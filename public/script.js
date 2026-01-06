/* ============================
   🌿 JavaScript Interaktif
   ============================ */

// === Tombol Ubah Tema (Dark / Light Mode) ===
const themeButton = document.getElementById("themeBtn");

themeButton.addEventListener("click", function () {
    console.log("Tombol ubah tema diklik");

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerText = "Ubah ke Light Mode";
    } else {
        themeButton.innerText = "Ubah ke Dark Mode";
    }
});

// === Tombol Sapaan Dinamis ===
const greetingBtn = document.getElementById("greetBtn");
const greetingText = document.getElementById("greeting");

greetingBtn.addEventListener("click", function () {
    console.log("Tombol sapa diklik");

    let nama = prompt("Siapa nama Anda?");
    if (nama && nama.trim() !== "") {
        greetingText.innerText = "Halo, " + nama + "!";
    } else {
        greetingText.innerText = "Halo, Pengunjung!";
    }
});


/* ============================
   ✨ REFLEKSI TUGAS (Komentar)
   ============================

Bagian paling sulit dipahami adalah bagaimana cara
menghubungkan event listener dengan elemen HTML dan
mengubah style menggunakan DOM, karena awalnya
kelihatan rumit.

Tapi saat kode berhasil jalan, terutama ketika tombol
benar-benar bisa mengubah tema dan menampilkan sapaan,
itu bikin momen 'WOW!' — ternyata membuat halaman
interaktif itu seru dan terasa hidup.
*/