import request from "supertest";
import app from "../app.js";

describe("GET /error", function () {
  it("return 404", function () {
    return request(app).get("/error").expect(404);
  });
});
