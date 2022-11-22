import {Sequelize } from "sequelize";
import db from "../database/index.js";

const DataTypes = Sequelize;
const modelBarang = db.define(
  "master_barang",
  {
    _kode_barang: DataTypes.STRING,
    nama_barang: DataTypes.STRING,
    harga_jual: DataTypes.INTEGER,
    harga_beli: DataTypes.INTEGER,
    satuan: DataTypes.INTEGER,
    kategori: DataTypes.STRING,
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);


export default modelBarang;


// (async () => {
//   await db.sync();
// })()