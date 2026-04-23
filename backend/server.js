import express from 'express';
import mysql2 from 'mysql2';

const app = express();

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

// test endpoint untuk memastikan server berjalan
app.get('/', (req, res) => {
    res.json({ pesan: 'Server Backend SumutTalk berhasil berjalan dengan baik!' });
});

app.listen(8080, () => {
    console.log(`Server berhasil jalan di http://localhost:8080`);
});