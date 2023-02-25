const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const url = "https://api.instantwebtools.net/v1/";
// query in url
app.get("/passenger", async (req, res) => {
    const page = parseInt(req.query.page) || 10;
    const size = parseInt(req.query.size) || 1000;
    const start = (page - 1) * size;
    const updatedUrl = `${url}passenger?page=${page}&size=${size}`;
    try {
        const response = await axios.get(updatedUrl);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// get airlines data
app.get("/airlines", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 1000;
    const start = (page - 1) * size;
    const updatedUrl = `${url}passenger?start=${start}&size=${size}`;
    try {
        const response = await axios.get(updatedUrl);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// get specific airlines data
app.get("/airlines/:id", async (req, res) => {
    const id = req.params.id;
    const updatedUrl = `${url}airlines/${id}`;
    try {
        const response = await axios.get(updatedUrl);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//post a passenger data
app.post("/airlines", async (req, res) => {
    const updatedUrl = `${url}airlines`;
    const data = req.body;
    try {
        const response = await axios.post(updatedUrl, req.body);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//delete a passenger data
app.delete("/airlines/:id", async (req, res) => {
    const id = req.params.id;
    const updatedUrl = `https://api.instantwebtools.net/v1/passenger/${id}`;
    try {
        const response = await axios.delete(updatedUrl);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
//update a passenger data
app.put("/passenger/:id", async (req, res) => {
    const id = req.params.id;
    const updatedUrl = `${url}passenger/${id}`;
    const data = req.body;
    try {
        const response = await axios.put(updatedUrl, data);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// get a specific passenger data
app.get("/passenger/:id", async (req, res) => {
    const id = req.params.id;
    const updatedUrl = `${url}passenger/${id}`;
    try {
        const response = await axios.get(updatedUrl);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

//post a passenger data
app.post("/passenger", async (req, res) => {
    const updatedUrl = `${url}passenger`;
    const data = req.body;
    try {
        const response = await axios.post(updatedUrl, req.body);
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



app.listen(PORT, () => {
    console.log(`Server running on port ===> http://localhost:${PORT}`);
});
