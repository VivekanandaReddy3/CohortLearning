const express = require("express");
const app = express();

const users = [
  {
    name: "kik",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());
app.get("/", function (req, res) {
  const kikKidneys = users[0].kidneys;
  const noOdKidNeys = kikKidneys.length;
  let numOfHealthy = 0;
  for (let i = 0; i < kikKidneys.length; i++) {
    if (kikKidneys[i].healthy) {
      numOfHealthy = numOfHealthy + 1;
    }
  }
  const UnhealthyKidneys = noOdKidNeys - numOfHealthy;
  res.json({
    noOdKidNeys,
    numOfHealthy,
    UnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg : "Done!"
    })
});



app.listen(3001);
