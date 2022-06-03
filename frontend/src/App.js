import { useState, useEffect } from "react";

import { Container, Button, Spinner } from "react-bootstrap";

import { GetList, GetData } from "./service/api";

import Header from "./components/Header";

import FileList from "./components/FileList";
import FileInfo from "./components/FileInfo";

function App({ initialListFiles = false, initialFileData = false }) {
  const [listFiles, setListFiles] = useState(initialListFiles);
  const [fileData, setFileData] = useState(initialFileData);
  const { file = false } = fileData;

  useEffect(() => {
    GetList(setListFiles);
  }, []);

  useEffect(() => {
    if (!file && fileData) GetData(fileData, setFileData);
  }, [file, fileData]);

  const title = file ? `File info: ${file}` : "React Test App - List Files";

  return (
    <Container fluid>
      <Header title={title} />
      <Container>
        {!listFiles && (
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
        )}

        {listFiles && <FileList setFile={setFileData} listFiles={listFiles} />}

        {fileData && !file && (
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
        )}
        {file && <FileInfo fileData={fileData} />}
      </Container>
    </Container>
  );
}

export default App;
