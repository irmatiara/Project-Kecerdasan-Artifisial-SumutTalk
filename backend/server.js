import express from 'express';
import bcrypt from 'bcrypt';
import cors from 'cors';
import sequelize from './db.js';
import Pengguna from './models/Pengguna.js';
import BahasaDaerah from './models/BahasaDaerah.js';

const app = express();
app.use(express.json());
app.use(cors());

// Sinkronisasi Database
sequelize.authenticate()
    .then(() => {
        console.log('Koneksi database berhasil (Sequelize).');
        return sequelize.sync(); // Sinkronisasi model dengan database
    })
    .catch(err => {
        console.error('Koneksi database gagal:', err.message);
    });

// api untuk mendapatkan daftar bahasa daerah aktif
app.get('/api/bahasa', async (req, res) => {
    try {
        const bahasa = await BahasaDaerah.findAll({
            where: { status_aktif: true },
            attributes: ['id', 'nama_bahasa', 'kode_bahasa']
        });
        res.json(bahasa);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// api untuk registrasi pengguna baru
app.post('/api/register', async (req, res) => {
    try {
        const { nama_pengguna, email, kata_sandi } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(kata_sandi, salt);
        await Pengguna.create({
            nama_pengguna,
            email,
            kata_sandi: hashedPassword
        });
        res.json({ pesan: "Yeay! Registrasi berhasil." });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: "Email sudah digunakan!" });
        }
        res.status(500).json({ error: error.message });
    }
});

// api untuk login pengguna
app.post('/api/login', async (req, res) => {
    try {
        const { email, kata_sandi } = req.body;
        const user = await Pengguna.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: "Email tidak ditemukan!" });
        }
        const validPassword = await bcrypt.compare(kata_sandi, user.kata_sandi);
        if (!validPassword) {
            return res.status(401).json({ error: "Kata sandi salah!" });
        }
        res.json({ 
            pesan: "Login berhasil!", 
            user: { 
                id: user.id, 
                nama: user.nama_pengguna, 
                email: user.email,
                peran: user.peran
            } 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// api untuk mendapatkan profil pengguna
app.get('/api/profil/:id', async (req, res) => {
    try {
        const user = await Pengguna.findByPk(req.params.id, {
            attributes: ['id', 'nama_pengguna', 'email', 'foto_profil', 'peran']
        });
        if (!user) {
            return res.status(404).json({ error: "Pengguna tidak ditemukan!" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// api untuk memperbarui profil pengguna
app.put('/api/profil/:id', async (req, res) => {
    try {
        const { nama_pengguna, email } = req.body;
        const [updated] = await Pengguna.update(
            { nama_pengguna, email },
            { where: { id: req.params.id } }
        );
        if (updated) {
            res.json({ pesan: "Profil berhasil diperbarui!" });
        } else {
            res.status(404).json({ error: "Pengguna tidak ditemukan!" });
        }
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(400).json({ error: "Email sudah dipakai orang lain!" });
        }
        res.status(500).json({ error: error.message });
    }
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server berhasil jalan di http://localhost:${PORT}`);
});