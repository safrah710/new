import React from 'react';

function Footernew() {
    let data4 = [
        {
            info: "About",
            class: "bi-facebook fs-3"
        },
        {
            info: "Contact",
            class: "bi-twitter fs-3"
        },
        {
            info: "Terms of use",
            class: "bi-instagram fs-3"
        },
        {
            info: "Privacy policy",
            class: ""
        }
    ];

    return (
        <footer className="footer bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            {data4.map((e, i) => (
                                <li className="list-inline-item" key={i}><a href="#!">{e.info}</a></li>
                            ))}
                            <li className="list-inline-item">⋅</li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Your Website 2023. All Rights Reserved.</p>
                    </div>
                    <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul className="list-inline mb-0">
                            {data4.map((e, i) => (
                                <li className="list-inline-item me-4" key={i}>
                                    <a href="#!"><i className={e.class}></i></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footernew;
