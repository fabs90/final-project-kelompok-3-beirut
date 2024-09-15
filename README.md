# Aplikasi Kasir Sederhana dan Mudah Digunakan

### Aplikasi yang diperlukan
anda membutuhkan **Node.js** dan **Postman**. Jika belum menginstal aplikasi tersebut anda dapat mengunjungi halaman web berikut:

- Download **Node.js**: [https://nodejs.org/](https://nodejs.org/)
- Download **Postman**: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)


### Langkah Menjalankan Applikasi:

1. ``Clone`` repository ini:
   ```
   git clone https://github.com/fabs90/final-project-kelompok-3-beirut.git
   ```

2. Arahkan menuju repositori yang sudah di ``clone``:
   ```
   cd final-project-kelompok-3-beirut
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Jalankan projectt:
   ```
   npm run serve
   ```

   Server akan memulai, dan Anda akan mendapatkan pesan yang mengindikasi project telah berjalan di `http://localhost:3000`.

### Menggunakan Postman:

5. Buka **Postman** yang sudah Anda instal sebelumnya.

7. Buat environmet baru untuk menjalankan project.
    ![Tampilan awal Postman](https://github.com/user-attachments/assets/e1108fd9-0ecd-489e-b6b1-08be2afce36c)
    Anda dapat membuat environment baru sesuai dengan gambar diatas.

8. **View the Menu (GET)**:
   - Buat sebuah request baru dengan **method** ke `GET`. Masukkan URL berikut:
     ```
     http://localhost:3000/api
     ```
   - Ini akan menampilkan daftar menu yang tersedia.
   ![Tampilan Postman san respon yang didapatkan](https://github.com/user-attachments/assets/c5cd507c-6a0c-47bb-8dfc-71a73c552647)

7. **Checkout (POST)**:
   - Buat request baru, atur **method** ke `POST`, dan masukkan URL:
     ```
     http://localhost:3000/api/checkout
     ```
   - pada ``request body``, pilih **raw** dan pilih **JSON** sebagai format. Lalu, masukkan contoh berikut:
     ```
     {
       "selectedItems": ["Mie Ayam", "Bakso"], // ini adalah item yang dapat anda pilih dari daftar menu
       "isMember": true, // pernyataan mengenai apakah pembeli adalah member atau tidak
       "payment": 50000 // jumlah pemyaran yang dibayarkan
     }
     ```
   - Tekan **Send**, dan anda akan mendapatkan respon seperti ini:
     ```
     {
       "totalBelanja": 27000,
       "totalDiskon": 2700,
       "totalSetelahDiskon": 24300,
       "payment": 50000,
       "kembalian": 25700
     }
     ```

     ![Tampilan Postman saat membuat request /checkout](https://github.com/user-attachments/assets/5cfe9061-9882-4d32-aa37-12cde0dadf8b)

8. **Add New Menu Items (POST)**:
   - Buat request baru, atur **method** ke `POST`, dan masukkan URL:
     ```
     http://localhost:3000/api/items
     ```
   - pada ``request body``, pilih **raw** dan pilih **JSON** sebagai format. Lalu, masukkan contoh berikut:
     ```
     {
       "name": "Soto Ayam", // nama item yang ingin dimasukkan
       "price": 25000 // harga item
     }
     ```
   - Tekan **Send**, dan anda akan mendapatkan respon konfirmasi bahwa item baru telah ditambahkan:
     ```
     {
       "message": "Items successfully added",
       "data": [
         {"name": "Mie Ayam", "price": 12000},
         {"name": "Bakso", "price": 15000},
         {"name": "Soto Ayam", "price": 25000}
       ]
     }
     ```
     ![Tampilan Postman saat membuat request /items](https://github.com/user-attachments/assets/b12e2afa-81d9-43c9-92ba-8e096e4bfcda)
