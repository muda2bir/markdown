import React from "react";
import ReactMarkdown from "react-markdown";

const Previewer = ({ markdown }) => {
  return (
    <div className="preview-box h-full flex-1">
      <div className="preview_heading_container bg-yellow-300 text-black rounded-t-2xl">
        <p className="text-center font-bold">Preview</p>
      </div>

      <div
        id="preview"
        className="w-full focus:outline-none bg-white p-2 font-sans h-full"
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Previewer;
