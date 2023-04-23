const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const otakudesu = require("./routes/otakudesu/otakudesu");
const animeIndo = require("./routes/animeIndo/animeIndo");
const kuramanime = require("./routes/kuramanime/kuramanime");

app.use("/otakudesu", otakudesu);
app.use("/animeindo", animeIndo);
app.use("/kuramanime", kuramanime);

app.get("/", (req, res) => {
  res.send("Welcome To Lucky Anime Rest API");
});
app.listen(PORT, () => console.log("Server listen on port " + PORT));
