const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("./middlewares/error.middleware");
const { productRouter } = require("./routes/product.routes");

dotenv.config();
const app = express();
const port = 3000;

// Use middleware and setup
app.use(express.json());

// Use routes
app.use("/api/v1/products", productRouter);

// Error Handling
app.use(errorHandler);

app.listen(port, () => console.log(`App listening on port ${port}`));
