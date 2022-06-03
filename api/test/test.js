import request from "supertest";
import app from "../app.js";

describe("GET /", function () {
  it("return json response", function () {
    return request(app)
      .get("/")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect('{"text":"test is successfull!"}');
  });
});
