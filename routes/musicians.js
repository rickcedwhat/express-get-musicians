const { Router } = require("express");
const { Musician } = require("../models/index");

const router = Router();

router.get("/", async (req, res) => {
  console.log("finding musicians");
  const musicians = await Musician.findAll();
  res.json(musicians);
});

router.get("/:id", async (req, res) => {
  console.log("finding musician", req.params.id);
  const musician = await Musician.findByPk(req.params.id);
  res.json(musician);
});

router.post("/", async (req, res) => {
  console.log("adding musician", req.body);
  const musician = await Musician.create(req.body);
  res.json(musician);
});

router.put("/:id", async (req, res) => {
  console.log("updating musician", req.params.id, req.body);
  const musician = await Musician.findByPk(req.params.id);
  await musician.update(req.body);
  res.json(musician);
});

router.delete("/:id", async (req, res) => {
  console.log("deleting musician", req.params.id);
  const musician = await Musician.findByPk(req.params.id);
  await musician.destroy();
  res.json(musician);
});

module.exports = router;
