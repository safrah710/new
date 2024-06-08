import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Pl() {
  const data = [
    { name: 'c', link: '../c.jpeg' },
    { name: 'c++', link: '../c++.png' },
    { name: 'python', link: '../pythn.jpeg' },
    { name: 'java', link: '../java.jpeg' }
  ];

  return (
    <>
    <div className="header">
        <Link to='/' className="link"><p>All</p></Link>
        <Link to='/pl' className="link"><p style={{ borderBottom: '1px solid black',color: 'green' }}>Programming Language</p></Link>
        <Link to='/fsd' className="link"><p>Full Stack</p></Link>
        <Link to='/ml' className="link"><p>ML</p></Link>
      </div>
      <div className='card-container'>
        {data.map((e, i) => (
          <Card style={{ width: '18rem' }} key={i}>
            <Card.Img variant="top" src={e.link} style={{ height: '200px', width: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            <Card.Body>
              <p className='para'>{e.name}</p>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Pl;
