import {Sequelize } from "sequelize";
import db from "../database/index.js";

const DataTypes = Sequelize;
const modelPenjualan = db.define(
  "penjualan",
  {
    no_faktur: DataTypes.STRING,
    nama_konsumen: DataTypes.STRING,
    _kode_barang: DataTypes.STRING,
    jumlah: DataTypes.INTEGER,
    harga_satuan: DataTypes.INTEGER,
    harga_total: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);


export default modelPenjualan;

// (async () => {
//   await db.sync();
// })()