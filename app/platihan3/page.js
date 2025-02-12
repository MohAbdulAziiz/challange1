export default function StudentTable() {
  const students = [
    { no: 1, nim: "123456", nama: "Ahmad", gender: "L", prodi: "Data Science", kelas: "A", semester: "5", alamat: "Bandung", hobby: "Membaca", citacita: "Data Scientist" },
    { no: 2, nim: "123457", nama: "Budi", gender: "L", prodi: "Informatika", kelas: "B", semester: "3", alamat: "Jakarta", hobby: "Gaming", citacita: "Software Engineer" },
    { no: 3, nim: "123458", nama: "Citra", gender: "P", prodi: "Sistem Informasi", kelas: "A", semester: "2", alamat: "Surabaya", hobby: "Menulis", citacita: "UX Designer" },
    { no: 4, nim: "123459", nama: "Dewi", gender: "P", prodi: "Data Science", kelas: "C", semester: "6", alamat: "Bandung", hobby: "Fotografi", citacita: "Data Analyst" },
    { no: 5, nim: "123460", nama: "Eko", gender: "L", prodi: "Teknik Komputer", kelas: "B", semester: "4", alamat: "Yogyakarta", hobby: "Olahraga", citacita: "Network Engineer" },
    { no: 6, nim: "123461", nama: "Fajar", gender: "L", prodi: "Sistem Informasi", kelas: "A", semester: "5", alamat: "Medan", hobby: "Mendaki", citacita: "IT Consultant" },
    { no: 7, nim: "123462", nama: "Gita", gender: "P", prodi: "Manajemen Informatika", kelas: "C", semester: "2", alamat: "Palembang", hobby: "Memasak", citacita: "Project Manager" },
    { no: 8, nim: "123463", nama: "Hadi", gender: "L", prodi: "Data Science", kelas: "A", semester: "7", alamat: "Semarang", hobby: "Bersepeda", citacita: "AI Engineer" },
    { no: 9, nim: "123464", nama: "Indah", gender: "P", prodi: "Informatika", kelas: "B", semester: "1", alamat: "Makassar", hobby: "Bernyanyi", citacita: "Mobile Developer" },
    { no: 10, nim: "123465", nama: "Joko", gender: "L", prodi: "Sistem Informasi", kelas: "A", semester: "3", alamat: "Bali", hobby: "Menonton Film", citacita: "Game Developer" }
  ];

  return (
    <div className="p-4">
      {/* Desktop Table */}
      <div className="hidden lg:block">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-200">
            <tr>
              {Object.keys(students[0]).map((key) => (
                <th key={key} className="border px-2 py-1">{key.charAt(0).toUpperCase() + key.slice(1)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                {Object.values(student).map((value, idx) => (
                  <td key={idx} className="border px-2 py-1">{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mobile Grid */}
      <div className="lg:hidden grid grid-cols-1 gap-4">
        {students.map((student, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            {Object.entries(student).map(([key, value]) => (
              <p key={key} className="text-sm"><span className="font-semibold">{key.charAt(0).toUpperCase() + key.slice(1)}:</span> {value}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
