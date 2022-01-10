const express = require ('express');
const app = express();
const port = process.env.PORT || 3005;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Hello from server"});
});

app.listen(port, () => {
    console.log('Server listen on ${PORT}');
})