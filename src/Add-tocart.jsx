import React, { useEffect,useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { context1 } from './context';
import { usercontext } from './App'
function Add() {
  const { data, id, setId, tot, settot,arr,setArr } = useContext(usercontext);
  const { amount, setamount } = useContext(context1);
  const opt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    if (id !== -1) {
      const newItem = {
        ind: data[id].ind,
        name: data[id].name,
        price: data[id].price2
      };
      const newArr = [...arr, newItem];
      setArr(newArr);
      setId(-1);
    }
  }, [id, data, setId, arr, setArr, amount, setamount]);
  const handle_del = (ind) => {
    const newArr = arr.filter(item => item.ind !== ind);
    setArr(newArr);
    let newtot = [...tot];
    newtot[ind] = 0;
    settot(newtot);
    const newAmount = newtot.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setamount(newAmount);
  };
  
  const Total = (num, price, id) => {
    let newtot = [...tot];
    const newSubTotal = num * price; 
    newtot[id] = newSubTotal;
    settot(newtot);
    const newAmount = newtot.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    setamount(newAmount);
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Sub Total</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((e, i) => (
            <tr key={i}>
              <th scope="row">{e.ind}</th>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>
                <select className='box' onChange={(event) => {
                  Total(Number(event.target.value), e.price, e.ind);
                }}>
                  {
                    opt.map((k,i)=>(
                      <option value={k} key={i}>{k}</option>
                    ))
                  }
                </select>
              </td>
              <td>{tot[e.ind]}</td>
              <td>
                <Button className='but1' variant="danger" onClick={() => handle_del(e.ind)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='sub'>
        <p className='par'>Total Amount </p>
        <p className='par1'>{amount}</p>
      </div>
    </>
  );
}

export default Add;



