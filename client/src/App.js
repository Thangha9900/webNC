import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Đang kết nối server...");

  useEffect(() => {
<<<<<<< HEAD
    fetch("/api/data")
=======
    fetch("https://xxxxx-5000.app.github.dev/api/data")
>>>>>>> 607d3f0071e1c96a12ffb4d3e42d576d7f4b0255
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Không kết nối được Server");
      });
  }, []);

  return (
    <div>
      <h1>WebNC</h1>
      <h2>Client React</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;