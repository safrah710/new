import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Ml() {
  const data = [
    { name: 'machine learning', link: '../ml.jpeg' },
    { name: 'deep learning', link: '../dl.jpeg' }
  ];

  return (
    <>
           <div className="header">
        <Link to='/' className="link"><p>All</p></Link>
        <Link to='/pl' className="link"><p >Programming Language</p></Link>
        <Link to='/fsd' className="link" ><p>Full Stack</p></Link>
        <Link to='/ml' className="link" style={{ borderBottom: '1px solid black',color: 'green' }}><p>ML</p></Link>
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

export default Ml;
