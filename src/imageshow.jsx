import React from 'react';
function Imageshowcase() {
    let data5 = [
        {
            class1: "col-lg-6 order-lg-2 text-white showcase-img",
            class2: "col-lg-6 order-lg-1 my-auto showcase-text",
            img: "../bg-showcase-1.jpg",
            description1: "Fully Responsive Design",
            description2: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it is a phone, tablet, or desktop the page will behave responsively!"
        },
        {
            class1: "col-lg-6 text-white showcase-img",
            class2: "col-lg-6  my-auto showcase-text",
            img: "../bg-showcase-2.jpg",
            description1: "Updated For Bootstrap 5",
            description2: "Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
        },
        {
            class1: "col-lg-6 order-lg-2 text-white showcase-img",
            class2: "col-lg-6 order-lg-1 my-auto showcase-text",
            img: "../bg-showcase-3.jpg",
            description1: "Easy to Use & Customize",
            description2: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
        }
    ];

    return (
        <section className="showcase">
            <div className="container-fluid p-0">
                {data5.map((e, i) => (
                    <div className="row g-0" key={i}>
                        <div className={e.class1} style={{ backgroundImage: `url(${e.img})` }}></div>
                        <div className={e.class2}>
                            <h2>{e.description1}</h2>
                            <p className="lead mb-0">{e.description2}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Imageshowcase;
