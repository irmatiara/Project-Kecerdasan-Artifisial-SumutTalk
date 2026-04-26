import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const BahasaDaerah = sequelize.define('BahasaDaerah', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_bahasa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kode_bahasa: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    status_aktif: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    tableName: 'bahasa_daerah',
    timestamps: false
});

export default BahasaDaerah;
