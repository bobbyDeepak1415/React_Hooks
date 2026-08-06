import React, { useRef, useState } from "react";

const Demo = () => {
  const inputFileRef = useRef(0);
  const [files, setFiles] = useState([]);

  const handleClick = () => {
    inputFileRef.current.cick();
  };

  return (
    <div>
      <input
        type="file"
        hidden
        ref={inputFileRef}
        multiple
        onChange={(e) => setFiles(e.target.files)}
      />
      <button onClick={handleClick}>Browse files</button>
      <div>
        <h2>Your file List here:</h2>
        <ul>
          {files.map((file, index) => {
            return <li key={index}>{file}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Demo;
