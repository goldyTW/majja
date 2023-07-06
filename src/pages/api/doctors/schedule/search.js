import excuteQuery from "../../../../../lib/db";
import NextCors from 'nextjs-cors';

export default async function exportDoctor(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    
    await NextCors(req, res, {
        // Options
        methods: ['GET'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    });

    try {
        const urlParams = new URLSearchParams(req.query);
        var id_dokter;
        for (const [key, value] of urlParams) {
            if(key === "id"){
                id_dokter = value;
            }   
        }
        
        const jadwal = await excuteQuery({
            query: `SELECT * FROM tb_jadwal a NATURAL JOIN tb_dokter b WHERE b.id_dokter = ${id_dokter}`, // Add a WHERE clause to filter by id_doctor
            values: '', 
        });
        res.status(200).json({ jadwal })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
