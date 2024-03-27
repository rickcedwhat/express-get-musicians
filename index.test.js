// install dependencies
const { execSync } = require("child_process");
execSync("npm install");
execSync("npm run seed");

const request = require("supertest");
// const { db } = require("./db/connection");
const { Musician } = require("./models/index");
const app = require("./server");
// const seedMusician = require("./seedData");

describe("GET ./musicians endpoint", () => {
  // Write your tests here
  let response;
  beforeAll(async () => {
    response = await request(app).get("/musicians");
  });

  test("should return status 200", () => {
    expect(response.statusCode).toBe(200);
  });
  test("response should be json", () => {
    expect(response.type).toBe("application/json");
  });
});

describe("GET ./musicians/:id endpoint", () => {
  // Write your tests here
  let response;
  beforeAll(async () => {
    response = await request(app).get("/musicians/1");
  });
  test("should return status 200", () => {
    expect(response.statusCode).toBe(200);
  });
  test("response should be json", () => {
    expect(response.type).toBe("application/json");
  });
  test("response should be Mick Jagger", () => {
    expect(response.body.name).toBe("Mick Jagger");
  });
});

describe("POST ./musicians endpoint", () => {
  // Write your tests here
  let response;
  beforeAll(async () => {
    response = await request(app)
      .post("/musicians")
      .send({ name: "Shania Twain", instrument: "Voice" });
  });
  test("should return status 200", () => {
    expect(response.statusCode).toBe(200);
  });
  test("response should be json", () => {
    expect(response.type).toBe("application/json");
  });
  test("response should be Shania Twain", () => {
    expect(response.body.name).toBe("Shania Twain");
  });
});

describe("PUT ./musicians/:id endpoint", () => {
  // Write your tests here
  let response;
  beforeAll(async () => {
    response = await request(app)
      .put("/musicians/1")
      .send({ name: "50 Cent", instrument: "Voice" });
  });
  test("should return status 200", () => {
    expect(response.statusCode).toBe(200);
  });
  test("response should be json", () => {
    expect(response.type).toBe("application/json");
  });
  test("response should be 50 Cent", () => {
    expect(response.body.name).toBe("50 Cent");
  });
});

describe("DELETE ./musicians/:id endpoint", () => {
  // Write your tests here
  let response;
  beforeAll(async () => {
    const mick = await Musician.create({
      name: "Mick Jagger",
      instrument: "Voice",
    });
    response = await request(app).delete("/musicians/" + mick.id);
  });
  test("should return status 200", () => {
    expect(response.statusCode).toBe(200);
  });
  test("response should be json", () => {
    expect(response.type).toBe("application/json");
  });
  test("response should be Mick Jagger", () => {
    expect(response.body.name).toBe("Mick Jagger");
  });
});
