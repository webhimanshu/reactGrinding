import React, { useState, useEffect } from "react";
import "../To-do/style.css";

const getLocalData = () => {
  const list = localStorage.getItem("mytodo");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState(getLocalData());//fetch data from localstorage and store array of data
  const [iseditItem, setiseditItem] = useState("");
  const [toggle, setToggle] = useState(false);
  const editItem = (id) => {
    const editItem = item.find((data) => {
      return data.id === id;
    });
    setInputData(editItem.name);
    setiseditItem(id);
    setToggle(true);
  };

  useEffect(() => {
    localStorage.setItem("mytodo", JSON.stringify(item));
  }, [item]);

  //handle delete
  const handleDelete = (id) => {
    const newdata = item.filter((data) => data.id !== id);
    setItem(newdata);
  };

  const handleChange = (e) => {
    setInputData(e.target.value);
  };
  const addItem = () => {
    if (!inputData) {
      alert("fill the data");
    } else if (inputData && toggle) {
      setItem(
        item.map((item) => {
          if (item.id === iseditItem) {
            return { ...item, name: inputData };
          }
          return item;
        })
      );
      setInputData("");
      setToggle(false);
      setiseditItem(null);
    } else {
      const mylist = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItem([...item, mylist]);
      setInputData("");
    }
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/note.png" alt="note" className="note-img" />
            <figcaption>🙃 Add your list here</figcaption>
          </figure>
          <div className="add-items">
            <input
              type="text"
              className="form-control"
              placeholder=" 🐱‍👤Add Item"
              value={inputData}
              onChange={handleChange}
            />
            {toggle ? (
              <button className="add-button" onClick={() => addItem()}>
                Update
              </button>
            ) : (
              <button className="add-button" onClick={() => addItem()}>
                Add
              </button>
            )}
          </div>
          <div className="showitems">
            {item.map((data, index) => (
              <div className="eachitems" key={index}>
                <h3>{data.name}</h3>
                <div className="todo">
                  <i
                    className="far fa-edit"
                    onClick={() => {
                      editItem(data.id);
                    }}
                  ></i>
                  <i
                    className="far  fa-trash-alt"
                    onClick={() => {
                      handleDelete(data.id);
                    }}
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="show-items">
            {item.length===0 ?" ": (<button onClick={()=>setItem([])}>Remove All</button>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
