import users from "./data.mjs";

const index = () => {
  console.log("=== Daftar Pengguna ===");
  users.map((user, index) => {
    console.log(`${index + 1}. ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

const store = () => {
  users.push(
    { nama: "User Baru 1", umur: 30, alamat: "Jl. Baru 1", email: "baru1@email.com" },
    { nama: "User Baru 2", umur: 31, alamat: "Jl. Baru 2", email: "baru2@email.com" }
  );
  console.log("✅ 2 data berhasil ditambahkan.");
};

const destroy = () => {
  const deleted = users.pop();
  console.log(`❌ Data terakhir (${deleted.nama}) berhasil dihapus.`);
};

export { index, store, destroy };
