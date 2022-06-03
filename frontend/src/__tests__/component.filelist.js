import React from "react";
import FileList from "../components/FileList";
import { create } from "react-test-renderer";

describe("FileList coponent", () => {
  const listFiles = ["teste"];
  const setFile = () => null;
  test("testing list files", () => {
    let tree = create(<FileList listFiles={listFiles} setFile={setFile} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
