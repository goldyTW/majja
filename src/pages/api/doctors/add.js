import { t } from "i18next";
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

    const { nama, posisi, gambar, xp } = req.body;
    
    try {
        const dokter = await excuteQuery({
            query: `INSERT INTO tb_dokter(nama, posisi, gambar, xp) VALUE("${nama}", "${posisi}", "${gambar}", ${xp})`,
            values:'',
        });
        if (dokter.error == null){
            res.status(200).json({ msg:"Success" })
        } else {
            res.status(200).json({ msg:dokter.error.sqlMessage })
        }
        
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

