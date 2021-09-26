import { Sequelize } from "sequelize-typescript";
import path from "path";

const sequelize = new Sequelize("search_engine", "root", "1234", {
    dialect: "mysql",
    models: [path.join(__dirname, "../models")],
});

export default sequelize;