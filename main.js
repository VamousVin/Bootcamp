// let a = 10;

// if (a > 10) {
//   console.log("nilai a lebih besar dari 10");
// }
// untuk menggunakan 2 fungsi bisa menggunakan &&

// kondisi dan &&
// let userName = "kevin";
// let password = "1234";

// if (userName == "kevin" && password == "1234") {
//   console.log("Anda berhasil login");
// } else {
//   console.log("Anda gagal login");
// }

// kondisi atau ||
// let user = "vin";

// if (user == "tukul" || user == "bapuk") {
//   console.log("Anda berhasil login");
// } else {
//   console.log("Anda gagal login");
// }
// soal

// let umur = 18;

// if (umur >= 18) {
//   console.log("kamu sudah dewasa");
// } else {
//   console.log("kamu masih anak-anak");
// }

// soal 2
// let pin = 1234;
// let id = "ab123";

// if (pin === 1234 && id === "ab123") {
//   console.log("Berhasil masuk");
// } else console.log("pin atau id salah");

// prompt

// let pin = "1234";
// let id = "ab123";

// let inputPin = prompt("Masukkan PIN :");
// let inputId = prompt("Masukkan ID :");

// if (inputPin === pin && inputId === id) {
//   alert("Berhasil masuk");
// } else alert("pin atau id salah");

// else if untuk membuat kondisi lain
let nilaiSiswa = 75;

if (nilaiSiswa >= 80) {
  console.log("Nilai siswa adalah A");
} else if (nilaiSiswa >= 70) {
  console.log("Nilai siswa adalah B");
} else if (nilaiSiswa >= 60) {
  console.log("Nilai siswa adalah C");
} else {
  console.log("Nilai siswa adalah D");
}

// Versi singkat if else menggunakan ? sebagai if dan : sebagai else
let namaSiswa = 59;

let grade =
  namaSiswa > 85 ? "A" : namaSiswa > 70 ? "B" : namaSiswa > 60 ? "C" : "D";

console.log(`Nilai siswa adalah ${grade}`);

// function ambilGrade(nilaiSiswa) {
//   if (nilaiSiswa >= 80) {
//     return "A";
//   }

//   if (nilaiSiswa >= 70) {
//     return "B";
//   }

//   if (nilaiSiswa >= 60) {
//     return "C";
//   }

//   return "D";
// }

// let nilaiSiswa = 90;
// let grade = ambilGrade(nilaiSiswa);
// console.log("Nilai siswa adalah " + grade);
