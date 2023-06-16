const express = require('express');
const { Storage } = require('@google-cloud/storage');

const app = express();
const port = process.env.PORT || 8080;

// Konfigurasi Google Cloud Storage
const storage = new Storage();
const bucketName = 'stroke-detector';

// Permintaan POST untuk mengunggah file
app.post('/upload', (req, res) => {
  // Mendapatkan file dari permintaan
  const file = req.files.file;

  // Nama file tersimpan di Cloud Storage
  const fileName = authservice.json;

  // Unggah file ke Cloud Storage
  const bucket = storage.bucket(stroke-detector);
  const fileStream = bucket.file(fileName).createWriteStream();
  fileStream.end(file.data);

  // Memberikan respons ke client
  res.status(200).send('File berhasil diunggah ke Cloud Storage');
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${8080}`);
});
