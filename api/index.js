import express, { json } from "express";
import cors from "cors";
import request from "request";

// import filesRoute from "./routes/files";
// const filesRoute = require("./routes/files.js");
// const authRoute = require("./routes/files");

const app = express();

const optionRequest = (url) => {
  return {
    method: "GET",
    url,
    headers: { Authorization: "Bearer aSuperSecretKey" },
  };
};

app.get("/test", async (req, res) => {
  console.log("test is successfull!");
  res.status(200).json("test is successfull!");
});
app.use(cors());
app.use(json());

// GET FILE - https://echo-serv.tbxnet.com/v1/secret/file/test2.csv
app.get("/files/data", async (req, res) => {
  const { fileName: file = "file1.csv" } = req.query;
  try {
    const options = optionRequest(
      `https://echo-serv.tbxnet.com/v1/secret/file/${file}`
    );
    request(options, (error, response, body) => {
      if (error) throw new Error(error);

      const linesRaw = body.split(/\r?\n/);

      const lines = [];
      linesRaw.forEach((lineRaw, index) => {
        if (index) {
          const line = lineRaw.split(",");
          lines.push({
            text: line[1] ?? null,
            number: line[2] ?? null,
            hex: line[3] ?? null,
          });
        }
      });

      res.status(200).json({ file, lines });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL - https://echo-serv.tbxnet.com/v1/secret/files
app.get("/files/list", async (req, res) => {
  try {
    const options = optionRequest(
      `https://echo-serv.tbxnet.com/v1/secret/files`
    );
    request(options, (error, response, body) => {
      if (error) throw new Error(error);

      res.status(200).json(JSON.parse(body));
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// app.use("/files", filesRoute);

app.listen(3000, () => {
  console.log("Backend server is running!");
});
