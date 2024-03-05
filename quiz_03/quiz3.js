// Input jumlah pemilih dan suara untuk setiap calon presiden
const jumlahPemilih = 1000; // Misalnya 1000 pemilih
const suaraAmat = 450;
const suaraAmit = 300;
const suaraEmut = 250;

// Hitung presentase suara untuk setiap calon
const presentaseAmat = (suaraAmat / jumlahPemilih) * 100;
const presentaseAmit = (suaraAmit / jumlahPemilih) * 100;
const presentaseEmut = (suaraEmut / jumlahPemilih) * 100;

// Cek pemenang dalam satu putaran atau putaran kedua
if (presentaseAmat > 50) {
  console.log("Amat memenangkan pemilihan presiden dengan", presentaseAmat.toFixed(2), "% suara.");
} else if (presentaseAmit > 50) {
  console.log("Amit memenangkan pemilihan presiden dengan", presentaseAmit.toFixed(2), "% suara.");
} else if (presentaseEmut > 50) {
  console.log("Emut memenangkan pemilihan presiden dengan", presentaseEmut.toFixed(2), "% suara.");
} else {
  console.log("Tidak ada calon yang memperoleh lebih dari 50% suara dalam putaran pertama. Masuk ke putaran kedua.");
}
