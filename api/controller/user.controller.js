export const test = (req, res) => {
  res.json({
    "nama": "agung saputra handal",
    "role": "fullstack",
    "alamat": {
      "desa": "tanjung kerajan",
      "kec": "seputih banyak"
    }
  })
};