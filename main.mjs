// main.mjs
import { index, store, destroy } from "./controller.mjs";

const main = () => {
  store();     // Tambah dua data
  index();     // Tampilkan semua data
  destroy();   // Hapus satu data
  index();     // Tampilkan ulang
};

main();
