const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    const uploadedfileName = uniqueSuffix + "-" + file.originalname;
    cb(null, uploadedfileName);
  },
});

const upload = multer({ storage: storage });

router
  .route("/")
  .get(async (_req, res) => {
    const data = await knex("venue");
    res.status(200).json(data);
  }) // POST END POINT

  .post(upload.single("imageFile"), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    req.body.image_url = req.file.filename;
    console.log(req.body);

    // res.json({
    //   message: "File successfully uploaded!",
    // });
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

module.exports = router;
