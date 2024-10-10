import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./TextEditor.css";

interface TextEditorProps {
  content: string;
  setContent: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ content, setContent }) => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <div>
      <ReactQuill
        className="h-[10rem]"
        theme="snow"
        value={content}
        onChange={setContent}
        formats={[
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
        ]}
        placeholder=""
        modules={modules}
      />
    </div>
  );
};

export default TextEditor;
