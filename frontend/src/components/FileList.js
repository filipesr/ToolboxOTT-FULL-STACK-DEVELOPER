import { useState, useEffect } from "react";
import { Table, Button, Spinner } from "react-bootstrap";

function FileList({ setFile }) {
  const [fileList, setFileList] = useState({ files: false });
  const { files } = fileList;

  const getList = () => {
    fetch(`http://localhost:3000/files/list`)
      .then((res) => {
        console.debug(res);
        return res.json();
      })
      .then((res) => {
        console.debug(res);
        setFileList(res);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
        </tr>
      </thead>
      <tbody style={{ cursor: "pointer" }}>
        {files ? (
          files.map((file, key) => (
            <tr key={key} onClick={() => setFile(file)}>
              <td>{file}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td>
              <Button variant="secondary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </Button>
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default FileList;
