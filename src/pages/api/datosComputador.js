import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'GET'){
        const tipo = req.query.tipo;
        let filePath;
        if (tipo === 'pc'){
            filePath = path.join(process.cwd(), 'public', 'data', `datos.json`);
        }
        if (tipo === 'lp'){
            filePath = path.join(process.cwd(), 'public', 'data', `datos2.json`);
        }
        
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        res.status(200).json(data);
        
    }
}