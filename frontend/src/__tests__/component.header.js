import React from "react";
import Header from "../components/Header";
import { create } from "react-test-renderer";

describe("Header coponent", () => {
  test("testing list files", () => {
    let tree = create(<Header />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
