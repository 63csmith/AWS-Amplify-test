import React from "react";
//AWS S3 Bucket
import { Storage } from "aws-amplify";
//AWS Auth

import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

function Form() {
  const [fileData, setFileData] = useState();
  const [fileStatus, setFileStatus] = useState(false);

  const uploadFile = async () => {
    const result = await Storage.put(fileData.name, fileData, {
      contentType: fileData.type,
    });
    setFileStatus(true);
    console.log(21, result);
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFileData(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
      {fileStatus ? "File Uploaded" : ""}
    </div>
  );
}

export default Form;
