# 🐾 Panduan Lengkap Hosting Gratis di GitHub Pages (Tanpa Domain & Tanpa Biaya)

Halo! Website ini dirancang **100% statis murni** (HTML, CSS, JS) tanpa memerlukan build tool, server Node.js, atau instalasi database. Anda bisa meng-hosting website ini **secara gratis selamanya** menggunakan **GitHub Pages**.

URL website Anda nantinya akan menjadi seperti ini:
```text
https://username-github-kamu.github.io/allyouneed/
```
(Atau jika nama repositori Anda `username-github-kamu.github.io`, maka URL-nya langsung `https://username-github-kamu.github.io/`)

---

## 🛠️ Langkah 1: Cara Mengganti Nomor WhatsApp & Data Produk

Sebelum diunggah ke GitHub, Anda bisa menyesuaikan nomor WhatsApp toko Anda:
1. Buka file: [`assets/js/products.js`](./assets/js/products.js).
2. Di bagian paling atas, ubah `STORE_CONFIG`:
   ```javascript
   const STORE_CONFIG = {
     storeName: "MimiStore APK Premium", // Ganti dengan nama tokomu
     whatsappNumber: "6281234567890",    // Ganti dengan nomor WhatsApp kamu (awali dengan 62)
     whatsappBackup: "6289876543210",    // Nomor WA cadangan (opsional)
     telegramLink: "https://t.me/...",   // Link telegram kamu
     instagramLink: "https://instagram.com/...",
     ...
   };
   ```
3. Di file yang sama, Anda juga bisa menambah, mengurangi, atau mengganti harga APK pada daftar `PRODUCTS`.

---

## 🚀 Langkah 2: Cara Upload ke GitHub (Metode 1: Lewat Web Browser / Tanpa Terminal)

Jika Anda tidak terbiasa menggunakan terminal/Git command line, ikuti cara mudah lewat browser ini:

1. **Login ke GitHub**:
   - Buka [https://github.com](https://github.com) dan masuk ke akun GitHub Anda. (Jika belum punya akun, daftar gratis).
2. **Buat Repositori Baru**:
   - Klik tombol **"+"** di pojok kanan atas, lalu pilih **"New repository"**.
   - Isi **Repository name**, misalnya: `allyouneed` atau `mimistore`.
   - Pastikan pilih opsi **"Public"** (karena GitHub Pages gratis mewajibkan repo publik).
   - Centang atau lewati opsi README, lalu klik **"Create repository"**.
3. **Upload Seluruh File Proyek**:
   - Di halaman repositori baru yang masih kosong, klik link **"uploading an existing file"**.
   - Drag & drop (tarik dan lepaskan) seluruh isi folder proyek ini:
     - `index.html`
     - Folder `assets/` (beserta isinya `css/` dan `js/`)
     - `README.md`
   - Tunggu proses upload file selesai, lalu di bagian bawah ketik pesan commit (misal: *"Initial commit"*), lalu klik tombol hijau **"Commit changes"**.

---

## ⚡ Langkah 2: Cara Upload ke GitHub (Metode 2: Lewat Git Terminal / VS Code)

Jika Anda sudah menginstal Git di komputer:

1. Buka terminal (PowerShell / Git Bash) di dalam folder `e:\laragon\www\allyouneed`.
2. Jalankan perintah berikut:
   ```bash
   git init
   git add .
   git commit -m "Web Reseller APK Premium Siap Rilis 🐾"
   git branch -M main
   git remote add origin https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git
   git push -u origin main
   ```
   *(Ganti `USERNAME_KAMU` dan `NAMA_REPO_KAMU` dengan akun Anda)*.

---

## 🌐 Langkah 3: Mengaktifkan GitHub Pages (1 Menit Jadi!)

1. Di halaman repositori GitHub Anda, klik tab **"Settings"** (ikon gerigi di atas).
2. Di menu sebelah kiri, gulir dan klik menu **"Pages"** (di bawah kategori *Code and automation*).
3. Pada bagian **"Build and deployment"**:
   - **Source**: Pilih `Deploy from a branch`.
   - **Branch**: Pilih `main` (atau `master`), dan biarkan foldernya `/ (root)`.
   - Klik tombol **"Save"**.
4. Tunggu sekitar 1 - 2 menit (GitHub sedang memproses halaman Anda).
5. Refresh halaman Settings > Pages tersebut. Anda akan melihat kotak notifikasi hijau bertuliskan:
   > **"Your site is live at https://username.github.io/allyouneed/"**
6. Klik link tersebut, dan selamat! Website reseller APK premium Anda sudah aktif dan bisa diakses oleh seluruh calon pembeli di internet! 🎉🐾

---

## 💡 Tips Tambahan untuk Reseller

1. **Memasang Link di Bio Instagram & TikTok**:
   - Masukkan link GitHub Pages Anda ke bio Instagram/TikTok atau ke tombol WhatsApp Business Anda.
2. **Mengganti Bukti Transaksi**:
   - Buka `assets/js/products.js` pada variabel `TESTIMONIALS`. Anda bisa mengganti URL gambar dengan link foto screenshot testimoni asli Anda (bisa upload foto ke [Imgur](https://imgur.com) atau langsung masukkan ke folder `assets/images/` di GitHub Anda).
3. **Perbarui Harga Kapan Saja**:
   - Setiap ada perubahan harga atau promo baru, Anda cukup edit file `products.js` di GitHub langsung (klik ikon pensil) lalu klik **Commit changes**. Website akan otomatis ter-update dalam 1 menit!
