import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Đang kết nối server...");

  useEffect(() => {
    fetch("https://xxxxx-5000.app.github.dev/api/data")
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