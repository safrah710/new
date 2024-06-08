import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Fsd() {
  const data = [
    { name: 'HTML', link: '../html.jpeg' },
    { name: 'css', link: '../css.jpeg' },
    { name: 'js', link: '../js.png' },
    { name: 'node js', link: '../node js.png' },
    { name: 'mongo db', link: '../mongo.jpeg' }
  ];

  return (
    <>
     <div className="header">
        <Link to='/' className="link"><p>All</p></Link>
        <Link to='/pl' className="link"><p >Programming Language</p></Link>
        <Link to='/fsd' className="link" style={{ borderBottom: '1px solid black',color: 'green' }}><p>Full Stack</p></Link>
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

export default Fsd;
