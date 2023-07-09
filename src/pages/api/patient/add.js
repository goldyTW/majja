import excuteQuery from "../../../../lib/db";
import NextCors from 'nextjs-cors';

export default async function exportDoctor(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    await NextCors(req, res, {
        // Options
        methods: ['POST'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    const { nama, telp } = req.body;
    
    try {
        if (nama !== undefined && telp !== undefined){
            const pasien = await excuteQuery({
                query: `INSERT INTO tb_pasien (nama, telp, id_record) VALUES("${nama}", "${telp}", null)`,
                values:'',
            });
            if (pasien.error == null){
                res.status(200).json({ id_pasien:pasien.insertId, mgs:"Success" });
            } else {
                res.status(200).json({ msg:pasien.error.sqlMessage })
            }
        } else {
            throw Error("Data not complete")
        }
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}