import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Pengguna = sequelize.define('Pengguna', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_pengguna: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    kata_sandi: {
        type: DataTypes.STRING,
        allowNull: false
    },
    foto_profil: {
        type: DataTypes.STRING,
        allowNull: true
    },
    peran: {
        type: DataTypes.STRING,
        defaultValue: 'user'
    }
}, {
    tableName: 'pengguna',
    timestamps: false   // Nonaktifkan timestamps jika tidak diperlukan
});

export default Pengguna;
