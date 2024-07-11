import  { useEffect, useState, useRef } from "react";
import "./App.css";

const FilterSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [filterUserList, setFilterUserList] = useState([]);
  const input = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3002/products')
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setFilterUserList(data); 
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filterUser = (value) => {
    setInputValue(value);
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterUserList(filteredUsers);
  };

  const handleOnClick = (name) => {
    setInputValue(name);
    input.current.value = name;
    setFilterUserList([]);
  };

  return (
    <div className="container">
      <h2>Buscar usuario</h2>
      <input
       type="text"
        placeholder="Buscar por nombre..."
        value={inputValue} 
        onChange={(e) => filterUser(e.target.value)}
        
       
        
      />
      <ul>
        {filterUserList.map(user => (
          <li key={user.id} onClick={() => handleOnClick(user.name)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <FilterSearch />
    </div>
  );
}

export default App;