import { Sequelize } from "sequelize";

const db = new Sequelize('josephj1_JJ-Apparel', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;