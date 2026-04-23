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

// api untuk login pengguna
app.post('/api/login', (req, res) => {
    const { email, kata_sandi } = req.body;

    const query = "SELECT * FROM pengguna WHERE email = ?";
    conn.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        // cek apakah email ditemukan di database
        if (results.length === 0) {
            return res.status(401).json({ error: "Email tidak ditemukan!" });
        }
        const user = results[0];
        // cek password yang diinput dengan yang ada di database
        const validPassword = await bcrypt.compare(kata_sandi, user.kata_sandi);
        if (!validPassword) {
            return res.status(401).json({ error: "Kata sandi salah!" });
        }
        // jika login berhasil, kirim data pengguna (tanpa kata sandi) ke frontend
        res.json({ 
            pesan: "Login berhasil!", 
            user: { 
                id: user.id, 
                nama: user.nama_pengguna, 
                email: user.email,
                peran: user.peran
            } 
        });
    });
});

// api untuk mendapatkan data profil pengguna berdasarkan ID
app.get('/api/profil/:id', (req, res) => {
    const userId = req.params.id;
    // tidak mengirimkan kata_sandi ke frontend untuk keamanan
    const query = "SELECT id, nama_pengguna, email, foto_profil, peran FROM pengguna WHERE id = ?";  
    conn.query(query, [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            return res.status(404).json({ error: "Pengguna tidak ditemukan!" });
        }
        res.json(results[0]);
    });
});

// api untuk memperbarui data profil pengguna
app.put('/api/profil/:id', (req, res) => {
    const userId = req.params.id;
    const { nama_pengguna, email } = req.body;

    const query = "UPDATE pengguna SET nama_pengguna = ?, email = ? WHERE id = ?";
    conn.query(query, [nama_pengguna, email, userId], (err, result) => {
        if (err) {
            if(err.code === 'ER_DUP_ENTRY') return res.status(400).json({ error: "Email sudah dipakai orang lain!" });
            return res.status(500).json({ error: err.message });
        }
        res.json({ pesan: "Profil berhasil diperbarui!" });
    });
});

// test endpoint untuk memastikan server berjalan
// app.get('/', (req, res) => {
//     res.json({ pesan: 'Server Backend SumutTalk berhasil berjalan dengan baik!' });
// });

app.listen(8080, () => {
    console.log(`Server berhasil jalan di http://localhost:8080`);
});