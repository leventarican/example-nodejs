import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const UploadPage: NextPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileInfo, setFileInfo] = useState<
    | {
        label: string;
        value: string;
      }[]
    | null
  >(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file) {
      // Display file information in a table on the page
      const fileInfo = [
        { label: "File to upload", value: file.name },
        { label: "File size", value: `${file.size} bytes` },
        { label: "File type", value: file.type },
        {
          label: "Last modified date",
          value: new Date(file.lastModified).toLocaleDateString(),
        },
      ];

      setFileInfo(fileInfo); // Assuming setFileInfo is a state setter for fileInfo
    }
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>Upload Page</title>
      </Head>
      <h1 className={styles.title}>&#129690; Upload</h1>
      <p></p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="file"
          onChange={handleFileChange}
        />
        <button className={styles.button} type="submit">
          Upload
        </button>
      </form>
      {file && <p className={styles.info}>File ready to upload: {file.name}</p>}
      {fileInfo && (
        <>
          <table className={styles.table}>
            <thead>
              <tr>
                {fileInfo.map((info) => (
                  <th key={info.label}>{info.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {fileInfo.map((info) => (
                  <td key={info.label}>{info.value}</td>
                ))}
              </tr>
            </tbody>
          </table>
          <p className={styles.success}>Uploading done.</p>
        </>
      )}
    </div>
  );
};

export default UploadPage;
