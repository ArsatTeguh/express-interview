import modelBarang from "../config/modelDatabase/modelBarang.js";
import modelPenjualan from "../config/modelDatabase/modelPenjualan.js";
import { v4 as uuidv4 } from "uuid";

// GET ALL TRANSAKSI
export const getAllTransaksi = async (req, res) => {
  try {
    const response = await modelPenjualan.findAll();
    res.status(201).json({ mgs: "Success get all transaksi", data: response });
  } catch (error) {
    res.status(404).send(error);
  }
};

// ADD TRANSAKSI
export const addTransaksi = async (req, res) => {
  try {
    const { nama_konsumen, jumlah } = req.body;
    const no_faktur = uuidv4();

    !nama_konsumen | !jumlah && res.status(404).json({ msg: "Data kosong" });

    const response = await modelBarang.findOne({
      where: { id: req.params.id },
    });

    !response && res.status(404).json({ msg: "Barang tidak ada" });

    const { harga_jual, _kode_barang } = response.dataValues;
    const harga_total = jumlah * harga_jual;

    const penjualan = await modelPenjualan.create({
      no_faktur,
      nama_konsumen,
      _kode_barang,
      jumlah,
      harga_satuan: harga_jual,
      harga_total,
    });
    res.status(201).json({ msg: "transaksi is Success", data: penjualan });
  } catch (error) {
    res.status(404).send(error);
  }
};

// GET TRANSAKSI BASED ON ID
export const getByKodeBarang = async (req, res) => {
  !req.params.id && res.status(400).json({ msg: "barang tidak ada" });

  try {
    const response = await modelBarang.findOne({
      where: { id: req.params.id },
    });
    !response && res.status(404).json({ msg: "Transaksi Barang tidak ada" });
    const { _kode_barang } = response.dataValues;

    const transaksi = await modelPenjualan.findAll({
      where: { _kode_barang: _kode_barang },
    });

    res
      .status(201)
      .json({ msg: "Get transaksi succsessfuly", data: transaksi });
  } catch (error) {
    res.status(404).send(error);
  }
};
