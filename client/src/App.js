import { useQuery } from "@apollo/client";
import "./App.css";
import { useEffect, useState } from "react";
import { GET_ALL_USERS } from "./query/user";

function App() {
  const {data, loading, error} = useQuery(GET_ALL_USERS)
  const [users, setUsers] = useState([]);
  console.log(data)


  useEffect(() => {
    if(!loading){
      setUsers(data.getAllUsers)
    }
  },[data])

  if(loading) {
    return <h1>Loading ...</h1>
  }

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
