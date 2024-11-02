const express = require('express');
const app = express();
const mongoose = require("mongoose");
const productRoutes = require('./routes/product.route')

const PORT = 3001;
app.use(express.json());

// routes
app.use("/api/products", productRoutes)

app.get('/', (req, res) => {
    res.send("Hello From Shubham");
})

mongoose.connect("mongodb://localhost:27017/")
    .then(() => {
        console.log("Database Connected");
        app.listen(PORT, () => {
            console.log(`App running on PORT ${PORT}`);
        });
    })
    .catch(() => {
        console.log("Error Occoured");
    });

