import React from "react";
import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const Contacts = () => {
  return (
    <div className="w-full pt-8 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-4">Let’s Stay Connected</h2>
      <p className="text-gray-600 max-w-xl mb-6">
        Interested in collaborating, sharing ideas, or exploring new
        innovations? Feel free to reach out—let’s keep the conversation going.
      </p>
      <a
        href="mailto:manueljosepera487@gmail.com"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 
                   hover:bg-gray-100 transition"
      >
        <Mail size={18} />
        Contact Me
      </a>

      {/* Divider */}
      <div className="w-full max-w-3xl border-t mt-10 pt-6 flex flex-col items-center gap-4">
        {/* Social icons */}
        <div className="flex gap-6 text-gray-500">
          <a
            href="https://github.com/xebec1234"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-jose-pera-896894339"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077b5] transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://web.facebook.com/manuel.locco.7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0077b5] transition"
          >
            <Facebook size={22} />
          </a>
        </div>

        {/* Footer note */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Manuel Jose Pera. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
