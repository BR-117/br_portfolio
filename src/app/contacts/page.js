'use client';

import { FaLinkedin, FaGithub, FaYoutube, FaTwitter, FaInstagram, FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import the PDF viewer, disabling SSR (Server-Side Rendering)
const Document = dynamic(() => import("react-pdf").then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import("react-pdf").then(mod => mod.Page), { ssr: false });

export default function ContactPage() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="contact-page">
      <h1>Stay up to date with me on...</h1>
      <div className="social-row">
        <a href="https://www.linkedin.com/in/bimitrai/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/br-117" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://twitter.com/thecodebim" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://youtube.com/@thecodebim" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://instagram.com/thecodebim" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      <h2 className="text-2xl font-semibold text-center mt-10 mb-2 text-white">My CV</h2>
        <div className="flex justify-center mt-6">
          <a
            href="/BRCV.pdf"
            download
            className="download-button"
          >
            <FaDownload className="download-icon" />
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700 mx-auto w-full max-w-4xl" style={{ height: "80vh" }}>
          <embed
            src="/BRCV.pdf#toolbar=0&navpanes=0&scrollbar=0"
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ backgroundColor: "#1e1e1e" }}
          />
        </div>
    </div>
  );
}
