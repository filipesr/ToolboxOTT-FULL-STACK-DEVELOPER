import { Table } from "react-bootstrap";

function FileInfo({ fileData }) {
  const { file, lines } = fileData;

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
        {lines.map((line, key) => (
          <tr key={key}>
            <td>{file}</td>
            <td>{line.text}</td>
            <td>{line.number}</td>
            <td>{line.hex}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default FileInfo;
