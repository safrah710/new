import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [status, setStatus] = useState(0);
  const [tar, setTar] = useState(0);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = () => {
    const arr = { name, desc };
    const newData = [...data];
    newData.push(arr);
    setData(newData);
    setName(''); 
    setDesc('');
  };

  const editdata = (x) => {
    for (let i = 0; i < data.length; i++) {
      if (x === data[i].name) {
        setTar(i);
        setName(data[i].name);
        setDesc(data[i].desc);
        setStatus(1);
      }
    }
  };

  const handledelete = (x) => {
    const index = data.findIndex(item => item.name === x);
    if (index > -1) {
      const newArr = [...data];
      newArr.splice(index, 1);
      setData(newArr);
    }
  };

  const handleedit = () => {
    const newData = {
      name,
      desc,
    };
    const newArray = [...data];
    newArray.splice(tar, 1, newData);
    setData(newArray);
    setStatus(0); 
    setName(''); 
    setDesc('');
  };

  return (
    <>
      <div className="box">
        <h6>MY TODO</h6>
        <input
          className="input1"
          placeholder="name"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input2"
          placeholder="todo descriptions"
          required
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {!status ? (
          <button type="button" className="btn btn-success" onClick={handleSubmit}>
            Add User
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success"
            onClick={handleedit}
          >
            Edit Data
          </button>
        )}
      </div>
      <div className="main">
        {data.map((e, i) => (
          <div className="todobox" key={i}>
            <p><b>Name:</b> {e.name}</p>
            <p><b>Descriptions:</b> {e.desc}</p>
            <select
              className="select"
              style={value === 'completed' ? { backgroundColor: "green" } : { backgroundColor: "red" }}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="completed" style={{ backgroundColor: "green" }}>completed</option>
              <option value="notcompleted" style={{ backgroundColor: "red" }}>not completed</option>
            </select>
            <div className="btn-group">
              <button type="button" className="btn btn-success" onClick={() => editdata(e.name)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={() => handledelete(e.name)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
