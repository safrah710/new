import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { usercontext } from './App';
function Intr() {
  const navigate = useNavigate();
  const { data, setId } = useContext(usercontext);
  return (
    <>
      <div className="main">
        <p className="para">JINGLES</p>
        <p className="para1">WELCOME TO SHOPPING</p>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => navigate('/cart')}
        >
          Cart
        </button>
      </div>
      <div className="card1">
        {data.map((e, i) => (
          <div className="card" style={{ width: "18rem", height: "350px" }} key={i}>
            <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{e.name}</h5>
              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">Sale Item</h5>
                  <span className="text-muted text-decoration-line-through">Rs {e.price1}</span>
                  Rs {e.price2}
                </div>
              </div>
              <button className="btn btn-outline-info" onClick={() => setId(e.ind)}>
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Intr;
