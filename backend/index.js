const express = require("express");
const cors = require("cors");
const dijkstra = require("./dijkstra");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/dijkstra", (req, res) => {
  const { nodes, edges, source, target } = req.body;
  const result = dijkstra(nodes, edges, source, target);
  res.json(result);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
