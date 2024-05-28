import React from 'react'

function Testimonials() {
    let data2=[
        {
            img:"../testimonials-1.jpg",
            name:"Nasreen",
            description:"This is fantastic! Thanks so much guys"
        },
        {
            img:"../testimonials-2.jpg",
            name:"kumar",
            description:"Bootstrap is amazing. I have been using it to create lots of super nice landing pages"
        },
        {
            img:"../testimonials-3.jpg",
            name:"john",
            description:"Thanks so much for making these free resources available to us"
        }
    ]
  return <>
   <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    {
                    data2.map((e,i)=>(
                        <div className="col-lg-4" key={i}>
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={e.img} alt="..." />
                            <h5>{e.name}</h5>
                            <p className="font-weight-light mb-0">{e.description}</p>
                        </div>
                    </div>
                    ))
                   }
                </div>
            </div>
    </section>

  
  
  
  </>
    
  
}

export default Testimonials
