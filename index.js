const express = require("express");
const app = express();
const data = require("./data");
const cors = require("cors");
const { default: slugify } = require("slugify");

app.use(express.json());
app.use(cors());

// Get a specific shoe by slug
app.get("/shoes/:slug", (req, res) => {
  const shoeName = slugify(req.params.slug.toLowerCase(), { lower: true });

  const shoe = data.find((shoe) => shoe.slug === shoeName);

  if (shoe) {
    return res.status(200).json(shoe);
  } else {
    return res.status(404).json({ message: "Shoe not found" });
  }
});

// Get shoes based on query parameters
app.get("/shoes", (req, res) => {
  const { query } = req.query;

  const shoe = data.filter((shoe) => {
    if (!query) {
      return data;
    } else if (shoe.name.toLowerCase().includes(query.toLowerCase())) {
      return shoe;
    }
  });
  return res.status(200).json(shoe);

  // Filter the data based on query parameters
});

app.get("/shoe/filter", (req, res) => {
  const shoes = data.slice(req.query.offset, req.query.limit);
  res.send(shoes);
});

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
