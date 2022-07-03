import express from "express";
import morgan from "morgan";
import routes from "./src/routes/index.js";
import errorHandler from "./src/utils/middlewares/errorHandler.js";
import setHeaders from "./src/utils/middlewares/setHeaders.js";
import { port } from "./src/utils/config/index.js";
import { sequelize } from './src/database/db.js';


const app = express();

//set my middlewares
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
app.use(morgan("dev"));

//set headers
app.use(setHeaders);

//centralize my routes (bring the routes from my index in src/routes)
app.use("/", routes);

//error catching endware (last middleware)
app.use(errorHandler);


// set my DB connection and my express server.-
async function main() {
    try {
        await sequelize.sync({force: true});
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

main();


