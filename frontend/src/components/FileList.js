import { Table } from "react-bootstrap";

function FileList({ setFile, listFiles }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>File Name</th>
        </tr>
      </thead>
      <tbody style={{ cursor: "pointer" }}>
        {listFiles.map((file, key) => (
          <tr key={key} onClick={() => setFile(file)}>
            <td>{file}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default FileList;
