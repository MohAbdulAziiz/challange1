"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const students = [
    { no: 1, nim: "230001", nama: "Aulia Rahman", gender: "Laki-laki", prodi: "Data Science", kelas: "Kelas A", semester: 1, alamat: "Jl. Merdeka No. 10, Jakarta", hobby: "Membaca", citaCita: "Data Scientist" },
    { no: 2, nim: "230002", nama: "Budi Santoso", gender: "Laki-laki", prodi: "Informatika", kelas: "Kelas B", semester: 2, alamat: "Jl. Diponegoro No. 15, Bandung", hobby: "Menulis", citaCita: "Software Engineer" },
    { no: 3, nim: "230003", nama: "Citra Dewi", gender: "Perempuan", prodi: "Sistem Informasi", kelas: "Kelas C", semester: 3, alamat: "Jl. Sudirman No. 20, Surabaya", hobby: "Olahraga", citaCita: "Entrepreneur" },
    { no: 4, nim: "230004", nama: "Dedi Prasetyo", gender: "Laki-laki", prodi: "Teknik Komputer", kelas: "Kelas A", semester: 4, alamat: "Jl. Ahmad Yani No. 25, Medan", hobby: "Musik", citaCita: "Dosen" },
    { no: 5, nim: "230005", nama: "Eka Lestari", gender: "Perempuan", prodi: "Data Science", kelas: "Kelas B", semester: 5, alamat: "Jl. Gatot Subroto No. 30, Yogyakarta", hobby: "Membaca", citaCita: "Data Scientist" },
    { no: 6, nim: "230006", nama: "Fajar Hidayat", gender: "Laki-laki", prodi: "Teknik Elektro", kelas: "Kelas C", semester: 6, alamat: "Jl. Imam Bonjol No. 12, Semarang", hobby: "Fotografi", citaCita: "Engineer" },
    { no: 7, nim: "230007", nama: "Gita Anjani", gender: "Perempuan", prodi: "Matematika", kelas: "Kelas A", semester: 1, alamat: "Jl. Kartini No. 8, Surabaya", hobby: "Menari", citaCita: "Peneliti" },
    { no: 8, nim: "230008", nama: "Hadi Prasetya", gender: "Laki-laki", prodi: "Fisika", kelas: "Kelas B", semester: 2, alamat: "Jl. Melati No. 14, Bali", hobby: "Memancing", citaCita: "Dosen" },
    { no: 9, nim: "230009", nama: "Indah Lestari", gender: "Perempuan", prodi: "Kedokteran", kelas: "Kelas C", semester: 3, alamat: "Jl. Anggrek No. 21, Bogor", hobby: "Menulis", citaCita: "Dokter" },
    { no: 10, nim: "230010", nama: "Joko Wibowo", gender: "Laki-laki", prodi: "Manajemen", kelas: "Kelas A", semester: 4, alamat: "Jl. Kenanga No. 32, Jakarta", hobby: "Olahraga", citaCita: "Pebisnis" },
    { no: 11, nim: "230011", nama: "Kartika Sari", gender: "Perempuan", prodi: "Akuntansi", kelas: "Kelas B", semester: 5, alamat: "Jl. Mawar No. 25, Surabaya", hobby: "Memasak", citaCita: "Akuntan" },
    { no: 12, nim: "230012", nama: "Lutfi Hidayat", gender: "Laki-laki", prodi: "Data Science", kelas: "Kelas C", semester: 6, alamat: "Jl. Cempaka No. 18, Bandung", hobby: "Coding", citaCita: "Data Engineer" },
    { no: 13, nim: "230013", nama: "Maya Putri", gender: "Perempuan", prodi: "Farmasi", kelas: "Kelas A", semester: 1, alamat: "Jl. Flamboyan No. 7, Yogyakarta", hobby: "Membaca", citaCita: "Apoteker" },
    { no: 14, nim: "230014", nama: "Nugroho Saputra", gender: "Laki-laki", prodi: "Hukum", kelas: "Kelas B", semester: 2, alamat: "Jl. Semeru No. 16, Malang", hobby: "Bermain Musik", citaCita: "Pengacara" },
    { no: 15, nim: "230015", nama: "Oktaviani Dewi", gender: "Perempuan", prodi: "Statistika", kelas: "Kelas C", semester: 3, alamat: "Jl. Bromo No. 5, Medan", hobby: "Melukis", citaCita: "Data Analyst" },
    { no: 16, nim: "230016", nama: "Putra Mahendra", gender: "Laki-laki", prodi: "Teknik Sipil", kelas: "Kelas A", semester: 4, alamat: "Jl. Gajah Mada No. 11, Surabaya", hobby: "Futsal", citaCita: "Arsitek" },
    { no: 17, nim: "230017", nama: "Qori Ananda", gender: "Perempuan", prodi: "Sosiologi", kelas: "Kelas B", semester: 5, alamat: "Jl. Diponegoro No. 9, Palembang", hobby: "Menari", citaCita: "Sosiolog" },
    { no: 18, nim: "230018", nama: "Rizki Aditya", gender: "Laki-laki", prodi: "Ekonomi", kelas: "Kelas C", semester: 6, alamat: "Jl. Ahmad Yani No. 3, Balikpapan", hobby: "Travelling", citaCita: "Ekonom" },
    { no: 19, nim: "230019", nama: "Sari Widya", gender: "Perempuan", prodi: "Biologi", kelas: "Kelas A", semester: 1, alamat: "Jl. Sudirman No. 27, Bandung", hobby: "Menulis", citaCita: "Peneliti" },
    { no: 20, nim: "230020", nama: "Teguh Prakoso", gender: "Laki-laki", prodi: "Kimia", kelas: "Kelas B", semester: 2, alamat: "Jl. Gatot Subroto No. 10, Jakarta", hobby: "Basket", citaCita: "Ilmuwan" },
    { no: 21, nim: "230021", nama: "Umi Khairunnisa", gender: "Perempuan", prodi: "Psikologi", kelas: "Kelas C", semester: 3, alamat: "Jl. Sam Ratulangi No. 15, Makassar", hobby: "Mendengar Musik", citaCita: "Psikolog" },
    { no: 22, nim: "230022", nama: "Vicky Ardiansyah", gender: "Laki-laki", prodi: "Teknik Mesin", kelas: "Kelas A", semester: 4, alamat: "Jl. Teuku Umar No. 5, Aceh", hobby: "Otomotif", citaCita: "Insinyur" },
    { no: 23, nim: "230023", nama: "Wulan Sari", gender: "Perempuan", prodi: "Pendidikan", kelas: "Kelas B", semester: 5, alamat: "Jl. Pattimura No. 18, Ambon", hobby: "Membaca", citaCita: "Guru" },
    { no: 24, nim: "230024", nama: "Xavier Putra", gender: "Laki-laki", prodi: "Ilmu Komputer", kelas: "Kelas C", semester: 6, alamat: "Jl. Dipati Ukur No. 2, Bandung", hobby: "Gaming", citaCita: "Software Developer" }
  ];  

  useEffect(() => {
    setCurrentPage(1); // Reset halaman jika pencarian berubah
  }, [searchTerm]);

  const filteredStudents = students.filter((student) =>
    student.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredStudents.length / itemsPerPage));
  const displayedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Daftar Mahasiswa</h1>

      <div className="flex justify-between mb-4">
        <input
          className="p-2 border border-gray-300 rounded"
          type="text"
          placeholder="Cari mahasiswa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="p-2 border border-gray-300 rounded"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value) || 10)}
        >
          {[5, 10, 15, 20].map((num) => (
            <option key={num} value={num}>
              {num} per halaman
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">No</th>
            <th className="border border-gray-300 p-2">Nama</th>
            <th className="border border-gray-300 p-2">Gender</th>
            <th className="border border-gray-300 p-2">Prodi</th>
            <th className="border border-gray-300 p-2">Kelas</th>
            <th className="border border-gray-300 p-2">Semester</th>
            <th className="border border-gray-300 p-2">Alamat</th>
            <th className="border border-gray-300 p-2">Hobby</th>
            <th className="border border-gray-300 p-2">Cita-cita</th>
          </tr>
        </thead>
        <tbody>
        {displayedStudents.length > 0 ? (
            displayedStudents.map((student) => (
            <tr key={student.nim} className="text-center">
              <td className="border border-gray-300 p-2">{student.no}</td>
              <td className="border border-gray-300 p-2">{student.nama}</td>
              <td className="border border-gray-300 p-2">{student.gender}</td>
              <td className="border border-gray-300 p-2">{student.prodi}</td>
              <td className="border border-gray-300 p-2">{student.kelas}</td>
              <td className="border border-gray-300 p-2">{student.semester}</td>
              <td className="border border-gray-300 p-2">{student.alamat}</td>
              <td className="border border-gray-300 p-2">{student.hobby}</td>
              <td className="border border-gray-300 p-2">{student.citaCita}</td>
            </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="border p-2 text-center text-gray-500">
                Tidak ada data ditemukan
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span>
          Halaman {currentPage} dari {totalPages}
        </span>

        <button
          className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}