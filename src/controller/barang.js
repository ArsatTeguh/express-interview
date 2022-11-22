import modelBarang from "../config/modelDatabase/modelBarang.js";
import { v4 as uuidv4 } from "uuid";

// GET BARANG
export const getBarang = async (req, res) => {
  try {
    const response = await modelBarang.findAll();
    res.status(200).json({ msg: "Get barang successfuly", data: response });
  } catch (error) {
    res.status(400).send(error);
  }
};

// ADD BARANG
export const addBarang = async (req, res) => {
  const _kode_barang = uuidv4();
  const { nama_barang, harga_jual, harga_beli, satuan, kategori } = req.body;

  try {
    const response = await modelBarang.create({
      _kode_barang,
      nama_barang,
      harga_jual,
      harga_beli,
      satuan,
      kategori,
    });
    res.status(201).json({ msg: "Success add barang", data: response });
  } catch (error) {
    res.status(400).send(error);
  }
};

//UPDATE BARANG
export const updateBarang = async (req, res) => {
  const { nama_barang, harga_jual, harga_beli, satuan, kategori } = req.body;

  try {
    await modelBarang.update(
      { nama_barang, harga_jual, harga_beli, satuan, kategori },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({ msg: "Data berhasil di ubah" });
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE BARANG
export const deleteBarang = async (req, res) => {
  try {
    await modelBarang.destroy({
      where: { id: req.params.id },
    });

    res.status(200).json({ msg: "Data Berhasil di hapus" });
  } catch (error) {
    res.status(404).send(error);
  }
};
