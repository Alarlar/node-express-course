const express = require("express");
const app = express();
const { products } = require("./data");

// middleware
app.use(express.static("./public"));

// route, implementing api wich return json
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

// api route
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

// retriving particular product by ID
app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(req.params);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let filteredProducts = [...products];

  if (search) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }

  if (limit) {
    filteredProducts = filteredProducts.slice(0, Number(limit));
  }

  res.status(200).json(filteredProducts);
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(3000, () => {
  console.log("server is listening on port 3000...");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
