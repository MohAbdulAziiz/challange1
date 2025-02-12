export default function StudentTable() {
  const students = [
    { no: 1, nim: "123456", nama: "Ahmad", gender: "L", prodi: "Data Science", kelas: "A", semester: "5", alamat: "Bandung", hobby: "Membaca", citacita: "Data Scientist" },
    { no: 2, nim: "123457", nama: "Budi", gender: "L", prodi: "Informatika", kelas: "B", semester: "3", alamat: "Jakarta", hobby: "Gaming", citacita: "Software Engineer" },
    { no: 3, nim: "123458", nama: "Citra", gender: "P", prodi: "Sistem Informasi", kelas: "A", semester: "2", alamat: "Surabaya", hobby: "Menulis", citacita: "UX Designer" },
    { no: 4, nim: "123459", nama: "Dewi", gender: "P", prodi: "Data Science", kelas: "C", semester: "6", alamat: "Bandung", hobby: "Fotografi", citacita: "Data Analyst" },
    { no: 5, nim: "123460", nama: "Eko", gender: "L", prodi: "Teknik Komputer", kelas: "B", semester: "4", alamat: "Yogyakarta", hobby: "Olahraga", citacita: "Network Engineer" },
  ];

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-2 py-1">No</th>
              <th className="border px-2 py-1">NIM</th>
              <th className="border px-2 py-1">Nama</th>
              <th className="border px-2 py-1">Gender</th>
              <th className="border px-2 py-1">Prodi</th>
              <th className="border px-2 py-1">Kelas</th>
              <th className="border px-2 py-1">Semester</th>
              <th className="border px-2 py-1">Alamat</th>
              <th className="border px-2 py-1">Hobby</th>
              <th className="border px-2 py-1">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.no}>
                <td className="border px-2 py-1">{student.no}</td>
                <td className="border px-2 py-1">{student.nim}</td>
                <td className="border px-2 py-1">{student.nama}</td>
                <td className="border px-2 py-1">{student.gender}</td>
                <td className="border px-2 py-1">{student.prodi}</td>
                <td className="border px-2 py-1">{student.kelas}</td>
                <td className="border px-2 py-1">{student.semester}</td>
                <td className="border px-2 py-1">{student.alamat}</td>
                <td className="border px-2 py-1">{student.hobby}</td>
                <td className="border px-2 py-1">{student.citacita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {students.map((student) => (
          <div key={student.no} className="border p-4 rounded-lg shadow-md bg-white">
            <p><strong>No:</strong> {student.no}</p>
            <p><strong>NIM:</strong> {student.nim}</p>
            <p><strong>Nama:</strong> {student.nama}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Prodi:</strong> {student.prodi}</p>
            <p><strong>Kelas:</strong> {student.kelas}</p>
            <p><strong>Semester:</strong> {student.semester}</p>
            <p><strong>Alamat:</strong> {student.alamat}</p>
            <p><strong>Hobby:</strong> {student.hobby}</p>
            <p><strong>Cita-cita:</strong> {student.citacita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
