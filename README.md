# Ilham Muhammad — Portfolio

Website portofolio frontend yang dibuat dengan React, Vite, Bun, Tailwind CSS, dan TanStack Router. Website memiliki tema terang/gelap, latar bintang animasi, navigasi responsif, daftar skills dan project, timeline pengalaman, serta formulir kontak.

## Menjalankan project

```sh
bun install
bun run dev
```

Server development akan menampilkan alamat lokal yang dapat dibuka melalui browser.

## Validasi dan build

```sh
bun run lint
bun run build
bun run preview
```

Hasil build production tersimpan di folder `dist`. Folder ini dapat digunakan pada hosting statis. Jika menambahkan route baru, hosting perlu diarahkan kembali ke `index.html` ketika suatu route dibuka langsung.

## Struktur utama

```text
src/
├── assets/                  # Gambar dan aset project
├── components/              # Komponen React dan CSS masing-masing
├── data/
│   └── portfolio.js         # Profil, skills, dan daftar project
├── routes/                  # Root layout dan halaman utama
├── index.css                # Reset, font, tema, dan style global
├── main.jsx                 # Entry point React
└── routeTree.gen.ts         # Route tree yang dibuat TanStack Router
```

Setiap komponen mempunyai file CSS yang diletakkan bersamanya. Contohnya, tampilan navbar berada di `src/components/Navbar.css`, sedangkan struktur elemennya berada di `src/components/Navbar.jsx`.

## Mengubah konten

- `src/data/portfolio.js`: nama, email, tautan sosial, resume, skills, dan project.
- `src/components/Hero.jsx`: isi dan susunan hero.
- `src/components/About.jsx`: bagian perkenalan.
- `src/components/Experience.jsx`: tampilan pengalaman.
- `src/components/Contact.jsx`: formulir kontak.
- `src/components/Navbar.jsx`: daftar navigasi dan susunan navbar.
- `src/components/StarBackground.jsx`: pembuatan bintang dan meteor.
- `src/index.css`: warna tema, reset, dan pengaturan global.

File gambar project tetap disimpan di `src/assets`, kemudian di-import dan dipasangkan dengan data project melalui `src/data/portfolio.js`.

## Formulir kontak

Formulir kontak mengirim pesan melalui Web3Forms. Validasi input, status pengiriman, pesan berhasil, dan pesan gagal ditangani di `src/components/Contact.jsx`.

Sebelum website dipublikasikan:

1. Pastikan access key Web3Forms masih aktif.
2. Atur pembatasan domain dan perlindungan spam melalui dashboard Web3Forms.
3. Kirim pesan percobaan dari domain hasil deployment.

Backend dan database sendiri belum diperlukan jika formulir hanya meneruskan pesan ke email. Jika nanti website perlu menyimpan pesan, menerima upload, atau memiliki halaman admin, buat endpoint server terpisah dan simpan kredensial rahasia di environment server.

## Deployment

### Vercel

Hubungkan repository GitHub ke Vercel dan gunakan pengaturan berikut:

```text
Framework Preset: Vite
Install Command: bun install
Build Command: bun run build
Output Directory: dist
```

Push baru ke branch production akan memicu build dan deployment baru.

### Hosting statis

Jalankan `bun run build`, kemudian upload isi folder `dist` ke document root hosting. Jika website ditempatkan pada subfolder, sesuaikan nilai `base` di `vite.config.js` sebelum build.

## Checklist sebelum publikasi

- Lengkapi URL GitHub, LinkedIn, resume, demo, dan source project di `src/data/portfolio.js`.
- Ganti project contoh dengan project asli jika sudah tersedia.
- Jalankan lint dan build.
- Periksa tampilan desktop dan mobile dalam tema terang dan gelap.
- Uji formulir kontak dari domain production.
