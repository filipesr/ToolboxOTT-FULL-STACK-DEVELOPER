import { useState } from "react";

import { Container } from "react-bootstrap";

import Header from "./components/Header";

import FileList from "./components/FileList";
import FileInfo from "./components/FileInfo";

function App() {
  const [file, setFile] = useState(false);
  const backToList = () => setFile(false);
  // const search = useLocation().search;
  // const file = new URLSearchParams(search).get('file');
  // const { file = false } = useLocation().search;
  const title = file ? `File info: ${file}` : "React Test App - List Files";

  return (
    <Container fluid>
      <Header title={title} />
      <Container>
        {file ? (
          <FileInfo file={file} backToList={backToList} />
        ) : (
          <FileList setFile={setFile} />
        )}
      </Container>
    </Container>
  );
}

export default App;
