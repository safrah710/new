import React from 'react';
function New() {
    let data1 = [
        {
            title: "Fully Responsive",
            icon: "bi-window m-auto text-primary",
            description: "This theme will look great on any device, no matter the size!"
        },
        {
            title: "Bootstrap 5 Ready",
            icon: "bi-layers m-auto text-primary",
            description: "Featuring the latest build of the new Bootstrap 5 framework!"
        },
        {
            title: "Easy to use",
            icon: "bi-terminal m-auto text-primary",
            description: "Ready to use with your own content, or customize the source files!"
        }
    ];
    return (
        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    {data1.map((e, i) => (
                        <div className="col-lg-4" key={i}>
                            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                <div className="features-icons-icon d-flex"><i className={e.icon}></i></div>
                                <h3>{e.title}</h3>
                                <p className="lead mb-0">{e.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default New;
