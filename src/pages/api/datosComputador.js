import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'GET'){
        const filePath = path.join(process.cwd(), 'public', 'data', 'datos.json')
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const data = JSON.parse(fileContents)
        res.status(200).json(data)
    }
}