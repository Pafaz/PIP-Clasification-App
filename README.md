# 🎓 SPK PIP API – Hapi.js + Prisma + PostgreSQL  
API backend untuk **Sistem Pendukung Keputusan PIP (Program Indonesia Pintar)** yang memungkinkan pengelolaan data siswa dan perhitungan hasil kelayakan bantuan berdasarkan kriteria tertentu.  
## ⚙️ Teknologi  
- [Hapi.js](https://hapi.dev/) – Web framework untuk Node.js  
- [Prisma ORM](https://www.prisma.io/) – ORM modern untuk akses database PostgreSQL  
- [PostgreSQL](https://www.postgresql.org/) – Database relasional open-source  
- [dotenv](https://www.npmjs.com/package/dotenv) – Pengelolaan environment variables  
## 📁 Struktur Folder  
```
.  
├── prisma/  
│   ├── schema.prisma     # Skema dan konfigurasi Prisma  
│   └── migrations/       # Riwayat migrasi database  
├── src/  
│   ├── routes/           # Route API (siswa, user, hasil, dll)  
│   ├── handlers/         # Logika bisnis dan response handler  
│   ├── services/         # Interaksi dengan Prisma Client  
│   ├── utils/            # Fungsi utilitas (jika ada)  
│   └── server.js         # Entry point aplikasi  
├── .env  
├── package.json  
└── README.md  
```  
## 🚀 Fitur Utama  
✅ **Autentikasi User**  
✅ **CRUD Siswa**  
✅ **CRUD Hasil**    
✅ **SPK Penilaian Otomatis** *(berbasis kriteria kelayakan)*  
## 🛠️ Instalasi  
1. **Clone repository**  
```bash  
git clone https://github.com/pafaz/PIP-Clasification-App.git 
```  
2. **Install dependencies**  
```bash  
npm install  
```  
3. **Setup environment variable**  
Buat file `.env` dan isi:  
```env  
DATABASE_URL="postgresql://user:password@localhost:5432/spk_pip"  
PORT=5000  
JWT_SECRET="secretmu"  
```  
4. **Setup Prisma**  
```bash  
npx prisma generate  
npx prisma migrate dev --name init  
```  
## 🧪 Menjalankan Server  
```bash  
npm run dev  
```  
## 🔐 Autentikasi  
- Menggunakan **JWT**.  
- User login akan menerima token yang digunakan untuk mengakses endpoint yang dilindungi.  
## 📦 API Endpoint  
### 📘 Auth  
| Method | Endpoint      | Deskripsi                |  
|--------|---------------|--------------------------|  
| POST   | /auth/register| Pendaftaran              |  
| POST   | /auth/login   | Masuk Aplikasi           |  
| POST   | /auth/logout  | Keluar Aplikasi          |  
### 📘 Siswa  
| Method | Endpoint     | Deskripsi                 |  
|--------|--------------|---------------------------|  
| GET    | /siswa       | Daftar siswa              |
| GET    | /siswa/{id}  | Detail siswa              |
| POST   | /siswa       | Tambah siswa              |
| POST   | /siswa/import| Tambah siswa dengan excel |
| PUT    | /siswa/{id}  | Ubah data siswa           |  
| DELETE | /siswa/{id}  | Hapus siswa               |  
### 📘 Hasil  
| Method | Endpoint     | Deskripsi                 |  
|--------|--------------|---------------------------|  
| GET    | /hasil       | Lihat semua hasil SPK     |  
| POST   | /hasil       | Tambah hasil penilaian    |  
| DELETE | /hasil/{id}  | Hapus hasil tertentu      |
| GET    | /hasil/rekap | Rekap hasil penilaian SPK |
### 📘 User  
| Method | Endpoint     | Deskripsi                 |  
|--------|--------------|---------------------------|  
| GET    | /user        | Detail user               |   
| PUT    | /user        | Update user               |   
