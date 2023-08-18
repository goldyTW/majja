import excuteQuery from "../../../../lib/db";
import NextCors from 'nextjs-cors';

export default async function bookingCheck(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    await NextCors(req, res, {
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200,
    });

    const { tanggal, id_dokter } = req.query;

    try {
        const result = await excuteQuery({
            query: "SELECT * FROM booking WHERE payment_status = 'settlement' AND tanggal_booking = ? AND id_dokter = ?",
            values: [tanggal, id_dokter],
        });
        res.status(200).json({ result });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
