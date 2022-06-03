import React from "react";
import App from "../App";
import { create } from "react-test-renderer";

describe("Init App", () => {
  test("testing init app", () => {
    let tree = create(<App />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
  const initialListFiles = [];
  const initialFileName = "teste";
  test("testing init app with Data 01", () => {
    let tree = create(
      <App
        initialListFiles={initialListFiles}
        initialFileData={initialFileName}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
  const initialFileData = { file: "teste", lines: [] };
  test("testing init app with Data 02", () => {
    let tree = create(
      <App
        initialListFiles={initialListFiles}
        initialFileData={initialFileData}
      />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
