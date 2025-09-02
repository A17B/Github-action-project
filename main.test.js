// const request = require("supertest");
// const express = require("express");

// // Recreate the app as in main.js
// const app = express();
// app.get("/", (req, res) => {
//   res.send("Hello from Express 🚀");
// });

// describe("GET /", () => {
//   it("should return Hello from Express 🚀", async () => {
//     const res = await request(app).get("/");
//     expect(res.statusCode).toBe(200);
//     expect(res.text).toBe("Hello from Express 🚀");
//   });
// });
import request from "supertest";
import express from "express";

// Recreate the app as in main.js
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Express 🚀");
});

describe("GET /", () => {
  //   it("should return Hello from Express 🚀", async () => {
  //     /**
  //      * The response object returned from the HTTP GET request to the root endpoint ("/").
  //      * Contains properties such as status, body, headers, etc., representing the server's response.
  //      * @type {import('supertest').Response}
  //      */
  //     const res = await request(app).get("/");
  //     expect(res.statusCode).toBe(200);
  //     expect(res.text).toBe(
  //       "Hello from Express 🚀 with Auto Deployment With CICD"
  //     );
  //   });
  it("should return Hello from Express 🚀", async () => {
    const res = await request(app).get("/");
    // Intentionally fail the test by expecting an incorrect value
    expect(res.text).toBe("This will fail the test");
  });
});
