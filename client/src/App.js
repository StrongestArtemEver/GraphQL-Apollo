import "./App.css";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <form>
        <input type="text"></input>
        <input type="number"></input>
        <div className="btns">
          <button>Создать</button>
          <button>Получить</button>
        </div>
      </form>
      {users.map((user) => {
        return (
          <div className="user">
            {user.id}. 
            {user.username}
            {user.age}
          </div>
        );
      })}
    </div>
  );
}

export default App;
