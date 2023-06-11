const express = require("express"); 
const v1JugadorRouter = require("./v1/routes/jugadorRoutes");
const v1PartidaRouter = require("./v1/routes/partidaRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.json());

app.use("/v1/jugadors", v1JugadorRouter);
app.use("/v1/partides", v1PartidaRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
    V1SwaggerDocs(app, PORT);
}); 