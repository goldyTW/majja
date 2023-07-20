// api/booking/getBookedTimes.js

const express = require("express");
const router = express.Router();
import excuteQuery from "../../../../lib/db";

// Endpoint untuk mengambil data jam_booking yang telah dipesan untuk dokter dan tanggal tertentu
router.post("/", async (req, res) => {
  const { id_dokter, tanggal_booking } = req.body;

  try {
    // Lakukan query ke database untuk mengambil data jam_booking yang telah dipesan
    const result = await excuteQuery.query(
      "SELECT jam_booking FROM booking WHERE id_dokter = ? AND tanggal_booking = ?",
      [id_dokter, tanggal_booking]
    );

    // Ambil data jam_booking dari hasil query
    const bookedTimes = result.map((item) => item.jam_booking);

    // Kirim response dengan data jam_booking
    res.json({ bookedTimes });
  } catch (error) {
    console.error("Error fetching booked times: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
