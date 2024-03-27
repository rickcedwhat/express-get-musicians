const { Router } = require("express");
const { Band, Musician } = require("../models");

const router = Router();

router.get("/", async (req, res) => {
  const bands = await Band.findAll({ include: [Musician] });
  res.json(bands);
});

router.get("/:id", async (req, res) => {
  console.log("finding band", req.params.id);
  const band = await Band.findByPk(req.params.id, {
    include: [Musician],
  });
  res.json(band);
});

module.exports = router;
