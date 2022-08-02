import React from "react";

const Editor = ({ setMarkdown, markdown }) => {
  return (
    <div className="editor-box h-full flex-1">
      <div className="editor_heading_container bg-yellow-300 text-black rounded-t-2xl">
        <p className="text-center font-bold">Editor</p>
      </div>
      <textarea
        id="editor"
        className="w-full focus:outline-none p-2 font-mono h-full"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Editor;
