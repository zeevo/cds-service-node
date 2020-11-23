import express from "express";

const router = express.Router();

router.get("/", async (req, res) =>
  res.status(200).json({
    services: [
      {
        hook: "patient-view",
        id: "steps",
        title: "A Patient App",
        description: "A CDS service for your app.",
        prefetch: {
          patient: "Patient/{{context.patientId}}",
        },
      },
    ],
  })
);

export default router;
