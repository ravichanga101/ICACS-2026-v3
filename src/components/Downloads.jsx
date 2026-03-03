"use client";

import React from "react";
import Link from "next/link";
import { Download, FileText, FileArchive, File } from "lucide-react";

const Downloads = () => {
  const downloadCategories = [
    {
      id: "guidelines",
      title: "Guidelines & Documents",
      description: "Important guidelines and procedural documents",
      files: [
        {
          id: 5,
          name: "CMT Guideline",
          file: "/assets/files/CMT_Guideline.pdf",
          type: "PDF",
          size: "0.8 MB",
          description: "Guidelines for the CMT submission system",
        },
        {
          id: 6,
          name: "Springer Copyright Form",
          file: "/assets/files/springer-copyright-form-revised.pdf",
          type: "PDF",
          size: "0.5 MB",
          description: "Copyright form for Springer publication",
        },
        {
          id: 7,
          name: "Springer Word Template",
          file: "/assets/files/Springer_Word_Template.zip",
          type: "ZIP",
          size: "1.8 MB",
          description: "Springer template for word processors",
        },
      ],
    },
    {
      id: "templates",
      title: "Paper Templates",
      description: "Download templates for paper submission",
      files: [
        {
          id: 1,
          name: "Word + LaTeX Template",
          file: "/assets/files/Word+Latex-Template.zip",
          type: "ZIP",
          size: "2.5 MB",
          description: "Complete template package with Word and LaTeX formats",
        },
        {
          id: 2,
          name: "Word Template",
          file: "/assets/files/Word+Template.zip",
          type: "ZIP",
          size: "1.2 MB",
          description: "Microsoft Word template for paper submission",
        },
        {
          id: 3,
          name: "PowerPoint Presentation Template",
          file: "/assets/files/Template-ICACS2025.pptx",
          type: "PPTX",
          size: "5.1 MB",
          description: "Template for conference presentations",
        },
        {
          id: 4,
          name: "Alternative PowerPoint Template",
          file: "/assets/files/Template.pptx",
          type: "PPTX",
          size: "3.8 MB",
          description: "Alternative presentation template",
        },
      ],
    },
  ];

  const getFileIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FileText className="w-6 h-6 text-red-500" />;
      case "ZIP":
        return <FileArchive className="w-6 h-6 text-blue-500" />;
      case "PPTX":
        return <File className="w-6 h-6 text-orange-500" />;
      default:
        return <File className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-3">
            <span className="inline-block text-xs sm:text-sm font-bold text-[#fd7e14] tracking-widest uppercase px-4 py-1 bg-orange-50 rounded-full mb-4">
              📥 Downloads
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Conference <span className="text-[#fd7e14]">Downloads</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Access all the necessary templates, guidelines, and documents for
            ICACS 2026
          </p>
        </div>

        {/* Download Categories */}
        <div className="space-y-12">
          {downloadCategories.map((category) => (
            <div key={category.id} className="mb-12">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-blue-600 inline-block pb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600 mt-2">{category.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.files.map((file) => (
                  <div
                    key={file.id}
                    className="bg-white rounded-lg shadow-md border-l-4 border-[#fd7e14] hover:shadow-lg transition-shadow duration-300 p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {getFileIcon(file.type)}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">
                            {file.name}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            {file.description}
                          </p>
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <span className="inline-block px-2 py-1 bg-gray-100 rounded">
                              {file.type}
                            </span>
                            <span>{file.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <a
                      href={file.file}
                      download
                      className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-[#fd7e14] to-orange-600 hover:from-orange-600 hover:to-[#fd7e14] text-white font-medium rounded-md transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-lg">
          <h3 className="text-xl font-bold text-blue-900 mb-3">
            ℹ️ Important Information
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="mr-3 font-bold">•</span>
              <span>
                All templates are compatible with major word processors and
                presentation tools
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold">•</span>
              <span>
                Please follow the guidelines provided in the CMT Guidelines
                document before submitting
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold">•</span>
              <span>
                For publication in Springer proceedings, use the Springer
                template and copyright form
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 font-bold">•</span>
              <span>
                Contact support if you encounter any issues downloading the
                files
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
