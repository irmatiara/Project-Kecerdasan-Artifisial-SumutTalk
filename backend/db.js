import { Sequelize } from 'sequelize';

// Konfigurasi koneksi ke database MySQL
const sequelize = new Sequelize('sumuttalk_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

export default sequelize;
