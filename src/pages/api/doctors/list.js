import excuteQuery from "../../../../lib/db";
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
        const dokter = await excuteQuery({
            query: `SELECT a.*, b.pass FROM tb_dokter a LEFT JOIN tb_user b ON a.email = b.email`,
            values:'',
        });
        res.status(200).json({ dokter })
    } catch (error) {
        res.status(404).json({ msg: error.message });
    }
}

