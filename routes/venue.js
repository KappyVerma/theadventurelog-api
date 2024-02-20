const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (_req, file, cb) {
    const uniqueSuffix = Date.now();
    const uploadedfileName = uniqueSuffix + "-" + file.originalname;
    cb(null, uploadedfileName);
  },
});

const upload = multer({ storage: storage });

router.route("/").get(async (_req, res) => {
  const data = await knex("venue")
    .select(
      "venue.id",
      "venue.when",
      "venue.visitedplaces",
      "venue.content",
      "venue.image_url",
      "venue.ratings",
      "bucketlist.destination"
    )
    .join("bucketlist", "venue.bucketlist_id", "bucketlist.id");
  res.status(200).json(data);
});

router.route("/").post(upload.single("imageFile"), async (req, res) => {
  req.body.image_url = req.file.filename;
  if (!req.body) {
    return res
      .status(400)
      .json({ error: "Request body is empty or missing data" });
  }
  try {
    const data = await knex("venue").insert(req.body);
    if (data[0]) {
      const updatedVenue = await knex("venue").where({
        id: data[0],
      });
      res.status(200).json(updatedVenue);
    } else {
      res.json({ message: "There is a problem with inserting in table" });
    }
  } catch (error) {
    res.status(400).json({ error: "Connection not made with table" });
  }
});

router.route("/:id").delete(async (req, res) => {
  console.log(req.params.id);
  if (!req.params.id) {
    res.status(400).json({ error: "The id is not in the venue table" });
  }
  try {
    const data = await knex("venue").where({ id: req.params.id }).delete();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error deleting data:", error);
    res.status(500).json({ error: "Error in deleting data" });
  }
});

router.route("/:id").patch(async (req, res) => {
  console.log(req.body, req.params.id);
  if (!req.body || Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ error: "Request body is empty or missing data" });
  }
  try {
    const rowUpdate = await knex("venue")
      .where({ id: req.params.id })
      .update(req.body);
    if (rowUpdate == 0)
      res.status(404).json(`The venue with ${req.params.id} is not available`);

    const updatedVenueList = await knex("venue");
    res.status(200).json(updatedVenueList);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "unable to update with the venueId" });
  }
});

module.exports = router;
