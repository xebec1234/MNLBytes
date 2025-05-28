"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const ThreeSphereOfBoxes = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.3;
    controls.enableZoom = false;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Increased intensity
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5); // Increased intensity
    dirLight.position.set(10, 10, 10);
    dirLight.castShadow = true;
    scene.add(ambientLight, dirLight);

    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    const boxSize = 0.4;
    const radius = 3;
    const widthSegments = 20;
    const heightSegments = 32;
    const boxGeometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);

    const startColor = new THREE.Color("#A855F7");
    const endColor = new THREE.Color("#8300FF");

    const boxes: {
      mesh: THREE.Mesh;
      direction: THREE.Vector3;
      offset: number;
      isAnimating: boolean;
      timeoutId?: NodeJS.Timeout;
    }[] = [];

    for (let i = 0; i <= widthSegments; i++) {
      const theta = (i / widthSegments) * Math.PI;

      const reduceDensityRows = [
        1,
        2,
        3,
        4,
        widthSegments - 1,
        widthSegments - 2,
        widthSegments - 3,
        widthSegments - 4,
      ];

      for (let j = 0; j <= heightSegments; j++) {
        if (reduceDensityRows.includes(i) && j % 2 !== 0) continue;

        const phi = (j / heightSegments) * 2 * Math.PI;

        const x = radius * Math.sin(theta) * Math.cos(phi);
        const y = radius * Math.cos(theta);
        const z = radius * Math.sin(theta) * Math.sin(phi);

        const colorFactor = i / widthSegments;
        const boxColor = startColor.clone().lerp(endColor, colorFactor);

        const material = new THREE.MeshStandardMaterial({
          color: boxColor,
          roughness: 0.5,
          metalness: 0.5,
          emissive: boxColor.clone().multiplyScalar(0.01),
        });

        const mesh = new THREE.Mesh(boxGeometry, material.clone());
        mesh.position.set(x, y, z);
        mesh.lookAt(0, 0, 0);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        // Save original emissive
        mesh.userData.originalEmissive = material.emissive.clone();

        sphereGroup.add(mesh);

        boxes.push({
          mesh,
          direction: new THREE.Vector3(x, y, z).normalize(),
          offset: 0,
          isAnimating: false,
        });
      }
    }

    const clock = new THREE.Clock();
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let hoveredBox: THREE.Mesh | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const delta = clock.getDelta();

      controls.update();
      dirLight.position.copy(camera.position);

      sphereGroup.position.y = Math.sin(elapsed * 0.8) * 0.3;

      // Pop animation
      if (Math.random() < 0.15) {
        const box = boxes[Math.floor(Math.random() * boxes.length)];
        if (!box.isAnimating) {
          box.isAnimating = true;
          box.offset = 0.2;

          box.timeoutId = setTimeout(() => {
            box.offset = 0;
            box.isAnimating = false;
          }, 500);
        }
      }

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(sphereGroup.children, true);

      if (intersects.length > 0) {
        const intersected = intersects[0].object as THREE.Mesh;
        if (hoveredBox !== intersected) {
          // Reset previous hovered box
          if (hoveredBox) {
            const prevBox = boxes.find((b) => b.mesh === hoveredBox);
            if (prevBox) prevBox.offset = 0;

            const prevMaterial =
              hoveredBox.material as THREE.MeshStandardMaterial;
            prevMaterial.emissive.copy(hoveredBox.userData.originalEmissive);
            hoveredBox.scale.set(1, 1, 1);
          }

          hoveredBox = intersected;
          const hovered = boxes.find((b) => b.mesh === hoveredBox);
          if (hovered) hovered.offset = 0.4; // pop-out on hover

          const newMaterial = hoveredBox.material as THREE.MeshStandardMaterial;
          newMaterial.emissive.set(0xa855f7);
          hoveredBox.scale.set(1.3, 1.3, 2);
        }
      } else if (hoveredBox) {
        const prevBox = boxes.find((b) => b.mesh === hoveredBox);
        if (prevBox) prevBox.offset = 0; // pop-in on hover out

        const prevMaterial = hoveredBox.material as THREE.MeshStandardMaterial;
        prevMaterial.emissive.copy(hoveredBox.userData.originalEmissive);
        hoveredBox.scale.set(1, 1, 1);
        hoveredBox = null;
      }

      boxes.forEach((box) => {
        const target = radius + box.offset;
        const current = box.mesh.position.length();
        const lerped = THREE.MathUtils.lerp(current, target, delta * 10);
        const newPos = box.direction.clone().multiplyScalar(lerped);
        box.mesh.position.copy(newPos);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      boxes.forEach((box) => clearTimeout(box.timeoutId));
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full relative" />;
};

export default ThreeSphereOfBoxes;
