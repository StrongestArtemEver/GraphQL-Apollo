import { useMutation, useQuery } from "@apollo/client";
import "./App.css";
import { useEffect, useState } from "react";
import { GET_ALL_USERS, GET_ONE_USER } from "./query/user";
import { CREATE_USER } from "./mutations/user";

function App() {
  const { data, loading,  refetch } = useQuery(GET_ALL_USERS);
  const { data: oneUser, } = useQuery(GET_ONE_USER, {
    variables: {
      id: 1
    }
  });
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  
  const [newUser] = useMutation(CREATE_USER);

  console.log(data);
  console.log(oneUser);

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const addUser = (e) => {
    e.preventDefault()
    newUser({
        variables: {
            input: {
                username, age
            }
        }
    }).then(({data}) => {
        console.log(data)
        setUsername('')
        setAge(0)
    })
  } 

  const getAll = e => {
    e.preventDefault()
    refetch()
  }

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="App">
      <form>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        ></input>
        <input
          value={age}
          onChange={(e) => setAge(+e.target.value)}
          type="number"
        ></input>
        <div className="btns">
          <button onClick={(e) => {addUser(e)}}>Создать</button>
          <button onClick={(e) => getAll(e)}>Получить</button>
        </div>
      </form>
      {users.map((user) => {
        return (
          <div className="user">
            {user.id}.{user.username}
            {user.age}
          </div>
        );
      })}
    </div>
  );
}

export default App;
