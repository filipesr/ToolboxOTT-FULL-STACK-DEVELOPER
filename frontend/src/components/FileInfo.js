import { useState, useEffect } from "react";
import { Table, Button, Spinner } from "react-bootstrap";

function FileInfo({ file, backToList }) {
  const [fileData, setFileData] = useState({ file, lines: false });
  const { lines } = fileData;

  const getData = () => {
    fetch(`http://localhost:3000/files/data?fileName=${file}`)
      .then((res) => {
        console.debug(res);
        return res.json();
      })
      .then((res) => {
        console.debug(res);
        setFileData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        {lines ? (
          lines.map((line, key) => (
            <tr key={key}>
              <td>{file}</td>
              <td>{line.text}</td>
              <td>{line.number}</td>
              <td>{line.hex}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>
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
        <tr
          onClick={backToList}
          style={{ cursor: "pointer", fontWeight: "bolder" }}
        >
          <td colSpan={4}>voltar</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default FileInfo;
