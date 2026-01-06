const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware untuk memproses data dari form (wajib ada)
app.use(express.urlencoded({ extended: true }));

// Melayani file statis (CSS, JS, Gambar) dari folder public
app.use(express.static('public'));

// Route GET /: Menampilkan portofolio kamu
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route POST /contact: Validasi sesuai instruksi tugas
app.post('/contact', (req, res) => {
    const { name, message } = req.body;

    // VALIDASI
    let errors = [];
    if (!name || name.length < 3) errors.push("Kesalahan: Nama minimal harus 3 karakter.");
    if (!message || message.length < 10) errors.push("Kesalahan: Pesan minimal harus 10 karakter.");

    if (errors.length > 0) {
        // TAMPILAN GAGAL (MERAH)
        return res.status(400).send(`
            <div style="padding: 2rem; font-family: sans-serif; color: #721c24; background-color: #f8d7da; border: 1px solid #f5c6cb; border-radius: 10px; margin: 2rem; max-width: 600px;">
                <h3 style="margin-top: 0;">Pesan Gagal Terkirim</h3>
                <p>${errors.join('<br>')}</p>
                <a href="/" style="display: inline-block; margin-top: 1rem; color: #155724; text-decoration: none; font-weight: bold;">← Kembali ke Form</a>
            </div>
        `);
    }

    // TAMPILAN BERHASIL (HIJAU)
    res.send(`
        <div style="padding: 2rem; font-family: sans-serif; color: #155724; background-color: #d4edda; border: 1px solid #c3e6cb; border-radius: 10px; margin: 2rem; max-width: 600px;">
            <h3 style="margin-top: 0;">Berhasil!</h3>
            <p>Terima kasih <strong>${name}</strong>, pesan Anda: <em>"${message}"</em> telah diterima.</p>
            <a href="/" style="display: inline-block; margin-top: 1rem; color: #155724; text-decoration: none; font-weight: bold;">← Kembali ke Beranda</a>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server imel berjalan di http://localhost:${PORT}`);
});