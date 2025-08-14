# VClaim
Fungsi AJAX VClaim
Wrapper sederhana untuk memanggil layanan **BPJS VClaim** via backend menggunakan AJAX (jQuery).

## 📌 Fitur
- Mempermudah pemanggilan API BPJS tanpa menulis ulang `$.ajax()` setiap kali
- Mendukung HTTP method (`GET`, `POST`, dll.)
- Callback otomatis untuk success & error
- Bisa digunakan ulang di berbagai fungsi (reusable)

---

## 📦 Instalasi
Cukup simpan file `vclaim.js` atau `vclaim.min.js` ke project kamu, lalu panggil di HTML:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="vclaim_baru.js"></script>
