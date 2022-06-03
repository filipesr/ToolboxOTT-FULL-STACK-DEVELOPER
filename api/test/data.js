import request from "supertest";
import app from "../app.js";

describe("GET /files/data?fileName=file1.csv", function () {
  it("return json response", function () {
    return request(app)
      .get("/files/data?fileName=file1.csv")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect('{"file":"file1.csv","lines":[]}');
  });
});
