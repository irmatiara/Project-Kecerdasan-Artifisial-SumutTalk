import express from 'express';
import mysql2 from 'mysql2';
import bcrypt from 'bcrypt'; // untuk keamanan password
import cors from 'cors';  // untuk mengizinkan akses dari frontend yang berbeda origin

const app = express();
app.use(express.json());
app.use(cors());

const conn = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sumuttalk_db'
});

// cek koneksi ke database
conn.connect((err) => {
    if (err) {
        console.error('koneksi gagal:', err.message);
        return;
    }
    console.log('koneksi berhasil.');
});

// api untuk mendapatkan list bahasa daerah yang aktif
app.get('/api/bahasa', (req, res) => {
    const query = "SELECT id, nama_bahasa, kode_bahasa FROM bahasa_daerah WHERE status_aktif = true";
    
    conn.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// test endpoint untuk memastikan server berjalan
// app.get('/', (req, res) => {
//     res.json({ pesan: 'Server Backend SumutTalk berhasil berjalan dengan baik!' });
// });

app.listen(8080, () => {
    console.log(`Server berhasil jalan di http://localhost:8080`);
});