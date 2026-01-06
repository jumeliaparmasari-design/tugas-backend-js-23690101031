Perbedaan Tanggung Jawab Front-End dan Back-End
Front-End (Sisi Klien): Bertanggung jawab atas segala sesuatu yang dilihat dan berinteraksi langsung dengan pengguna. Ini mencakup desain tata letak (layout), tombol, warna, dan pengalaman pengguna (UX).

Analogi Toko: Front-End adalah Etalase dan Pelayan. Bagian ini yang menyambut pelanggan, menunjukkan produk, dan menerima pesanan dengan ramah agar pelanggan merasa nyaman.

Back-End (Sisi Server): Bertanggung jawab atas logika di balik layar, pemrosesan data, keamanan, dan interaksi dengan database atau sistem file.

Analogi Toko: Back-End adalah Dapur atau Gudang. Pelanggan tidak melihat apa yang terjadi di sini, tetapi di sinilah pesanan diproses, bahan-bahan dicek, dan hasil akhirnya disiapkan sebelum diberikan kembali ke pelayan.

Perbedaan Method GET dan POST
Keduanya adalah cara untuk mengirimkan data ke server, namun memiliki karakteristik yang berbeda:

Method GET: Mengirimkan data dengan cara menempelkannya pada URL (terlihat jelas di alamat browser). Biasanya digunakan untuk mengambil data (searching/filtering). Memiliki batasan jumlah karakter karena keterbatasan panjang URL.

Method POST: Mengirimkan data melalui request body (tidak terlihat di URL). Data yang dikirim lebih aman dari penglihatan langsung dan tidak memiliki batasan ukuran yang ketat seperti GET.

Kapan sebaiknya menggunakan POST? Kita sebaiknya menggunakan POST saat mengirimkan data sensitif (seperti password), data dalam jumlah besar (seperti isi pesan atau unggahan gambar), atau saat kita ingin mengubah status pada server (seperti menyimpan pesan baru ke database/file).

Mengapa Validasi Harus Dilakukan di Server (Back-End)?
[cite_start]Meskipun validasi sudah ada di browser (Front-End), validasi di server tetap wajib karena alasan berikut:   

Keamanan: Validasi di Front-End sangat mudah dilewati atau dimanipulasi. Seseorang bisa mematikan JavaScript di browser mereka atau mengirim data langsung menggunakan alat seperti Postman/Terminal tanpa melewati form HTML Anda.

Integritas Data: Server adalah pintu terakhir sebelum data disimpan. [cite_start]Validasi di sisi server (seperti memastikan nama minimal 3 karakter dan pesan minimal 10 karakter sesuai instruksi ) menjamin bahwa hanya data yang benar-benar valid dan aman yang masuk ke sistem kita.   

Konsistensi: Jika aplikasi Anda nantinya diakses dari aplikasi mobile atau pihak ketiga lainnya, validasi di server memastikan aturan bisnis tetap konsisten tanpa peduli dari mana data itu dikirim.

[cite_start]Apakah Anda ingin saya membantu membuatkan file server.js yang menerapkan logika validasi ini sesuai dengan instruksi pengerjaan di gambar pertama?