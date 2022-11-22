import express from 'express'
import { addBarang, deleteBarang, getBarang, updateBarang } from '../controller/barang.js';
import { addTransaksi, getAllTransaksi, getByKodeBarang } from '../controller/penjualan.js';

const router = express.Router();
// SERVICE BARANG
router.get("/barang", getBarang);
router.post("/barang", addBarang);
router.patch("/barang/:id", updateBarang);
router.delete("/barang/:id", deleteBarang);
//SERVICE TRANSAKSI
router.get("/penjualan", getAllTransaksi);
router.get("/penjualan/:id", getByKodeBarang);
router.post("/penjualan/:id", addTransaksi);

// router.patch("/barang/:id", updateBarang);
// router.delete("/barang/:id", deleteBarang);

export default router