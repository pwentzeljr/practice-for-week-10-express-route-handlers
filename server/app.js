// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());
app.use((req, res, next) => {
  console.log('Body:', req.body);
  next();
});

app.get("/artists/latest", (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.json(getLatestArtist());
  res.send();
});

app.get("/artists/latest/albums", (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.json(getAlbumsForLatestArtist());
  res.send();
});

app.get("/artists", (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.json(getAllArtists());
  res.send();
});

app.post("/artists", (req, res) => {
  res.status(201);
  res.setHeader('Content-Type', 'application/json');
  res.json(addArtist(req.body));
  res.send();
});

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
