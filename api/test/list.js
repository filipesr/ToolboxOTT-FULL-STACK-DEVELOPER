import request from "supertest";
import app from "../app.js";

describe("GET /files/list", function () {
  it("return json response", function () {
    return request(app)
      .get("/files/list")
      .expect(200)
      .expect("Content-Type", /json/);
  });
});
