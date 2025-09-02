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
  it("should return Hello from Express 🚀", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from Express 🚀");
  });
});
