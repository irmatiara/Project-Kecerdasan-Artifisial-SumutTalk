# SumutTalk AI

## Kelompok 12
- Meyggy 241112699
- Sisca 241112966
- Irma Tiara 241112440
- Ulya Salsabila 241110485

## Deskripsi Project
**SumutTalk AI** adalah aplikasi berbasis kecerdasan buatan (AI) yang berfokus pada koreksi dan pembelajaran bahasa daerah Sumatera Utara (Karo, Hokkien) secara interaktif, akurat, dan mudah digunakan. Aplikasi ini dirancang untuk menjembatani kesenjangan komunikasi dan melestarikan kekayaan bahasa daerah di tengah era digital.

## Dampak Sosial & Potensi Monetisasi
* **Dampak Sosial:** Melestarikan bahasa daerah Sumatera Utara melalui pendekatan teknologi interaktif, membantu generasi muda belajar dengan cara yang modern (berbasis AI), serta membangun komunitas pelestari bahasa melalui fitur *crowdsourcing*.

---

## 20 Fitur Utama Aplikasi

Fitur-fitur SumutTalk AI dibagi menjadi 5 modul utama untuk memastikan arsitektur yang terstruktur:

### A. Modul Input & Deteksi Bahasa (Input & Detection)
1. **Text Input:** Kolom interaktif bagi pengguna untuk mengetik kata/kalimat yang ingin diproses.
2. **Speech Input:** Fitur penangkap suara (mikrofon) untuk berbicara langsung dalam bahasa daerah/Indonesia.
3. **Language Selection:** Menu *dropdown* untuk secara spesifik memilih bahasa daerah target.
4. **Smart Auto Detection:** Sistem deteksi otomatis bahasa apa yang sedang diketik oleh pengguna.

### B. Modul Pemrosesan AI & Pembelajaran (AI Engine & Learning)
5. **Text Correction:** AI yang mengoreksi ejaan dan tata bahasa daerah dari teks input pengguna.
6. **Speech Correction:** AI yang menganalisis input suara, mendeteksi letak kesalahan pelafalan, dan memberikan koreksi pengucapan.
7. **Auto Flashcard Generator:** AI otomatis mengekstraksi kosakata baru menjadi *flashcard* digital sebagai media belajar mandiri.
8. **Word Arrangement:** Latihan interaktif menyusun kata acak menjadi kalimat yang benar untuk melatih pemahaman tata bahasa.

### C. Modul Output & Informasi (Output & Information)
9. **Multi Output Display:** Antarmuka yang menampilkan terjemahan ke seluruh bahasa yang ada.
10. **AI Voice Output:** Fitur *Text-to-Speech* yang membacakan teks dengan pelafalan AI yang natural layaknya penutur asli.
11. **Language Description:** Ensiklopedia mini memuat informasi sejarah, budaya, dan karakteristik bahasa daerah.

### D. Modul Manajemen Pengguna & Riwayat (User & History Management)
12. **User Authentication:** Sistem keamanan terpadu (*Register, Login, Logout*) untuk mempersonalisasi pengalaman pengguna.
13. **User Profile Management:** Halaman pengaturan untuk mengubah detail akun (nama pengguna, kata sandi).
14. **Conversation History:** Sistem yang otomatis menyimpan riwayat percakapan untuk di-*review* kembali.
15. **Save / Bookmark Word:** Tombol akses cepat untuk menyimpan kosakata penting ke daftar favorit.

### E. Modul Interaksi, Monetisasi & Admin (Interaction & Admin)
16. **Tutorial Page:** Halaman panduan interaktif penggunaan aplikasi bagi pengguna baru.
17. **About Page:** Informasi mengenai visi aplikasi, versi sistem, dan profil tim pengembang.
18. **User Feedback System:** Formulir pelaporan hasil terjemahan/koreksi AI yang dirasa kurang akurat.
19. **Advertisement Banner (Monetisasi):** Ruang khusus untuk menampilkan iklan sebagai sumber pendapatan operasional aplikasi.
20. **Admin Dashboard:** Panel kontrol bagi administrator untuk mengelola gambar iklan dan meninjau laporan pengguna.

---

## Timeline Pengerjaan (Project Management) - Jangka Panjang

Estimasi waktu pengembangan dari rancangan hingga deployment memakan waktu kurang lebih 10 minggu dengan rincian sprint sebagai berikut:

* Minggu 1 - 2: Inisiasi & Setup Arsitektur
  - Desain UI/UX (Figma).
  - Setup repositori GitHub, konfigurasi Yii2 Backend & React Frontend.
  - Perancangan skema database PostgreSQL.
  - Pengerjaan Modul E: About Page (Fitur 17) dan Tutorial Page (Fitur 16).

* Minggu 3 - 4: Core System & User Management
  - Pembuatan sistem User Authentication (Fitur 12) dan User Profile Management (Fitur 13).
  - Integrasi Text Input, Speech Input UI, dan Language Selection (Fitur 1, 2, 3).

* Minggu 5 - 6: Integrasi AI & Engine Utama
  - Implementasi Text Correction (Fitur 5) dan Speech Correction (Fitur 6).
  - Integrasi Smart Auto Detection (Fitur 4) dan Auto Flashcard Generator (Fitur 7).

* Minggu 7 - 8: Output & Modul Pembelajaran
  - Penyatuan Multi Output Display (Fitur 9) dan AI Voice Output (Fitur 10).
  - Pembuatan Word Arrangement Logic (Fitur 8) dan Language Description (Fitur 11).

* Minggu 9: Storage, Interaksi, dan Monetisasi
- Penyelesaian Conversation History (Fitur 14) dan Save/Bookmark (Fitur 15).
- Pembuatan User Feedback System (Fitur 18).
- Implementasi Admin Dashboard (Fitur 20) dan Advertisement Banner (Fitur 19).

* Minggu 10: Finalisasi & Deployment
- System Testing, perbaikan bug, dan finalisasi responsivitas antarmuka.
- Penulisan dokumentasi teknis akhir dan deployment ke server.


## Timeline Pengerjaan (Project Management) - Jangka Pendek

* Minggu 1 – Fondasi Aplikasi
Di minggu pertama, fokusnya membangun dasar aplikasi dulu. Mulai dari desain UI/UX, setup backend dan frontend, sampai database.
Di tahap ini juga sudah dibuat sistem login, register, dan pengelolaan profil user.
Jadi di akhir minggu ini, aplikasi sudah bisa dijalankan dan user sudah bisa masuk serta mencoba fitur dasar, walaupun AI-nya belum aktif.
Fitur yang selesai:
  - User Authentication (Login, Register, Logout)
  - User Profile Management
  - Text Input
  - Speech Input (UI/basic)
  - Language Selection

* Minggu 2 – Fitur Utama (AI)
Masuk minggu kedua, mulai fokus ke fitur inti dari aplikasi, yaitu AI.
Fitur seperti text correction dan speech correction sudah berjalan, ditambah dengan auto detection untuk mengenali bahasa secara otomatis.
Selain itu, ada juga fitur pembelajaran seperti flashcard generator, word arrangement, dan language description.
Output juga sudah dikembangkan, jadi hasil bisa ditampilkan dalam berbagai bentuk, termasuk suara dari AI.
Di akhir minggu ini, aplikasi sudah benar-benar bisa digunakan sesuai tujuan utamanya, yaitu membantu pembelajaran bahasa dengan AI.
Fitur yang selesai:
  - Text Correction
  - Speech Correction
  - Smart Auto Detection
  - Auto Flashcard Generator
  - Word Arrangement
  - Language Description
  - Multi Output Display
  - AI Voice Output

* Minggu 3 – Penyempurnaan & Siap Rilis
Di minggu terakhir, fokusnya lebih ke penyempurnaan dan fitur tambahan.
Mulai dari penyimpanan riwayat percakapan, bookmark kata penting, sampai sistem feedback dari user.
Selain itu, ditambahkan juga admin dashboard dan fitur monetisasi seperti iklan.
Terakhir dilakukan testing, perbaikan bug, merapikan tampilan, dan deployment ke server.
Fitur yang selesai:
  - Conversation History
  - Save / Bookmark Word
  - User Feedback System
  - Admin Dashboard
  - Advertisement Banner
  - Testing & Bug Fixing
  - Final UI/UX Improvement
  - Deployment & Documentation
