const express = require("express");
const app = express();
const PORT = 3000;
const { dbConnection } = require("./config/config");

app.use(express.json());
dbConnection();
app.use("/product", require("./routes/product"));

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
