const app = require("./src/app");
const { db } = require("./db/connection");
const musicianRouter = require("./routes/musicians");
const bandRouter = require("./routes/bands");
const port = 3000;

app.listen(port, () => {
  db.sync();
  console.log(`Listening at http://localhost:${port}/musicians`);
});

app.use("/musicians", musicianRouter);
app.use("/bands", bandRouter);

module.exports = app;
