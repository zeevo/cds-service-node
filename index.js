const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const discoveryController = require("./controllers/discovery.js");
const sampleApp = require("./controllers/app.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/cds-services/sample-app", sampleApp);
app.use("/cds-services", discoveryController);

app.listen(3001, () => {
  console.log(`Server listening ${3001}`);
});
