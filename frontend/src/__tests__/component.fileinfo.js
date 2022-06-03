import React from "react";
import FileInfo from "../components/FileInfo";
import { create } from "react-test-renderer";

describe("FileInfo coponent", () => {
  const fileData = {
    file: "teste",
    lines: [{ text: "a", number: 0, hex: "a" }],
  };
  test("testing reading data file", () => {
    let tree = create(<FileInfo fileData={fileData} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
