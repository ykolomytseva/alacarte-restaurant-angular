import React from "react";
import Link from "next/link";

export default function Menu() {
  const regularMenu = [
    {
      title: "Filet Mignon with Red Wine Reduction",
      price: "$38",
      description:
        "Tender filet mignon grilled to perfection, served with a rich red wine reduction sauce.",
    },
    {
      title: "Lobster Risotto",
      price: "$42",
      description:
        "Creamy Arborio rice cooked with succulent lobster meat and finished with Parmesan cheese.",
    },
    {
      title: "Pan-Seared Sea Bass",
      price: "$34",
      description:
        "Sea bass fillet delicately pan-seared and served with a citrus beurre blanc sauce.",
    },
  ];

  // Define vegan menu items
  const veganMenu = [
    {
      title: "Grilled Vegetable Platter",
      price: "$22",
      description:
        "A selection of seasonal grilled vegetables served with a balsamic glaze.",
    },
    {
      title: "Vegan Stuffed Portobello Mushrooms",
      price: "$26",
      description:
        "Portobello mushrooms stuffed with quinoa, spinach, and vegan cheese, baked to perfection.",
    },
    {
      title: "Vegan Truffle Pasta",
      price: "$28",
      description:
        "House-made pasta tossed in a creamy truffle sauce with seasonal vegetables.",
    },
  ];

  return (
    <section className="menu-section bg-color-1">
      <div className="pattern-layer">
        <div
          className="pattern-1"
          style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}
        ></div>
        <div
          className="pattern-2"
          style={{ backgroundImage: "url(assets/images/shape/shape-6.png)" }}
        ></div>
        <div
          className="pattern-3"
          style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}
        ></div>
      </div>
      <div className="auto-container">
        <div className="inner-container">
          <div className="sec-title light centred mb_100">
            <span className="sub-title">Weekly Specials</span>
            <h2>Sunday Speials</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 menu-block">
              <div
                className="menu-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-3.png)",
                      }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-4.png)",
                      }}
                    ></div>
                  </div>
                  <div className="inner">
                    {regularMenu.map((item, index) => (
                      <div key={index} className="single-item">
                        <div className="upper-box">
                          <h4>
                            <Link href="shop-details">{item.title}</Link>
                          </h4>
                          <span className="price">{item.price}</span>
                        </div>
                        <div className="text">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 menu-block">
              <div
                className="menu-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <div className="shape">
                    <div
                      className="shape-1"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-3.png)",
                      }}
                    ></div>
                    <div
                      className="shape-2"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-4.png)",
                      }}
                    ></div>
                  </div>
                  <div className="inner">
                    {veganMenu.map((item, index) => (
                      <div key={index} className="single-item">
                        <div className="upper-box">
                          <h4>
                            <Link href="shop-details">{item.title}</Link>
                          </h4>
                          <span className="price">{item.price}</span>
                        </div>
                        <div className="text">
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-btn mt_110 centred">
            <Link href="" className="theme-btn-one">
              Download PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
