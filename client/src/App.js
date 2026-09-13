import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Đang kết nối server...");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Không kết nối được Server");
      });

    fetch("/api/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>WebNC</h1>
      <h2>Client React</h2>
      <p>{message}</p>

      <h3>Danh sách sinh viên</h3>
      {students.length === 0 ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.SID || student.id || Math.random()}>
              {student.SID} - {student.SNAME || "Không có tên"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
