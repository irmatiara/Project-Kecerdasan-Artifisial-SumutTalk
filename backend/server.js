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

// api untuk registrasi pengguna baru
app.post('/api/register', async (req, res) => {
    try {
        const { nama_pengguna, email, kata_sandi } = req.body;
        // password hashing untuk keamanan
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(kata_sandi, salt);

        const query = "INSERT INTO pengguna (nama_pengguna, email, kata_sandi) VALUES (?, ?, ?)";
        conn.query(query, [nama_pengguna, email, hashedPassword], (err, result) => {
            if (err) {
                // Error 1062 biasanya karena email sudah terdaftar
                if(err.code === 'ER_DUP_ENTRY') return res.status(400).json({ error: "Email sudah digunakan!" });
                return res.status(500).json({ error: err.message });
            }
            res.json({ pesan: "Yeay! Registrasi berhasil." });
        });
    } catch (error) {
        res.status(500).json({ error: "Terjadi kesalahan pada server" });
    }
});

// test endpoint untuk memastikan server berjalan
// app.get('/', (req, res) => {
//     res.json({ pesan: 'Server Backend SumutTalk berhasil berjalan dengan baik!' });
// });

app.listen(8080, () => {
    console.log(`Server berhasil jalan di http://localhost:8080`);
});