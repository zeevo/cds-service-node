const express = require("express");
const {
  authenticateEhr,
  authenticateClient,
} = require("../middleware/auth.js");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

router.post("/", [authenticateEhr, authenticateClient], async (req, res) => {
  const { body, fhirClient } = req;
  const { prefetch } = body;
  const { patient } = prefetch;

  fhirClient.request("Condition").then((r) => console.dir(r));

  return res.status(200).json({
    cards: {
      uuid: uuidv4(),
      summary: "Oops, no steps recorded for today!",
      indicator: "warning",
      detail: `SMART App for ${patient.name[0].given}.`,
      source: {
        label: "FHIR App",
      },
      links: [
        {
          label: "View your FHIR App",
          url: "https://csb-jj5gz.netlify.app/launch.html", // replace me with your App link
          type: "smart",
        },
      ],
    },
  });
});

module.exports = router;
