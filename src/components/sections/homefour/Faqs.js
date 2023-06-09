import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import contactinfo from "../../../data/contactinfo.json";

const Faqs = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title-wrap section-header">
          <h5 className="custom-primary">FAQ</h5>
          <h2 className="title">FAQ</h2>
        </div>
        <div className="row">
          <div className="col-lg-8 mb-lg-30">
            <Accordion defaultActiveKey="0" className="with-gap">
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How can I start with buying a home?
                </Accordion.Header>
                <Accordion.Body className="collapseparent">
                  <p>
                    {" "}
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et.
                  </p>
                  <p>
                    {" "}
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                  </p>
                  <ul className="acr-list mb-0">
                    <li>
                      {" "}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </li>
                    <li>
                      {" "}
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum{" "}
                    </li>
                    <li>
                      {" "}
                      There are many variations of passages of Lorem Ipsum{" "}
                    </li>
                    <li>
                      {" "}
                      Internet tend to repeat predefined chunks as necessary{" "}
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How many agents can I have at once?
                </Accordion.Header>
                <Accordion.Body className="collapseparent">
                  <p>
                    {" "}
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et.
                  </p>
                  <p>
                    {" "}
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod.
                  </p>
                  <ul className="acr-list mb-0">
                    <li>
                      {" "}
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </li>
                    <li>
                      {" "}
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum{" "}
                    </li>
                    <li>
                      {" "}
                      There are many variations of passages of Lorem Ipsum{" "}
                    </li>
                    <li>
                      {" "}
                      Internet tend to repeat predefined chunks as necessary{" "}
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Do you need to be in Thailand to purchase a property?
                </Accordion.Header>
                <Accordion.Body className="collapseparent">
                  <p>
                    {" "}
                    You don’t need to be in Thailand to purchase a property from
                    us. We can assist you online and arrange funding from your
                    country to sign all the documents. We can arrange a notary
                    public through your embassy and get everything done while
                    you are in your country. If you want to assign a nominee to
                    assist you, we can work with your family and friend to get
                    all the transactions completed: turnaround is fast. You can
                    be rest assured that you are in good hands with our
                    professional staff and international law firms to assist you
                    throughout the process.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  If I am a foreigner, can I buy property in Thailand?
                </Accordion.Header>
                <Accordion.Body className="collapseparent">
                  <p>
                    {" "}
                    Yes, you can buy certain properties in Thailand. If you
                    request to buy land or residential property in Thailand, we
                    can arrange a certain free hold right for you to own land or
                    property in Thailand. Our real estate international law firm
                    has helped thousands of foreign clients purchase property in
                    Thailand. Their specialty in real estate laws is second to
                    none and they can help you buy your dream home in Thailand
                    legally.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  Can you receive a permanent resident visa in Thailand?
                </Accordion.Header>
                <Accordion.Body className="collapseparent">
                  <p>
                    {" "}
                    Yes, you can receive a permanent resident visa in Thailand
                    if you invest over ten million baht in any business or
                    property. There are several types of visas that the Thai
                    government issues to foreign investment for long term stay
                    or permanent residency. Our attorney can assist you with
                    your visa needs and help you with long term stays and
                    property rights.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  If I am a foreigner, can I get a mortgage loan in Thailand?
                </Accordion.Header>
                <Accordion.Body className="collapseparent">
                  <p>
                    {" "}
                    Yes, of course. If you have proof of employment and bank
                    statements, we can help approve your loans through our
                    partner financial institution that has a lot of experience
                    in international loans. We have funded thousands of
                    foreigner and expat in the recent years. Our company’s
                    uniqueness is that we understand what it takes to get your
                    loans approved through our local bank and even your own bank
                    overseas if you prefer. Our teams of expert loans processing
                    staff can work directly with your bank to help ease all the
                    difficulties that you may face.
                  </p>
                  <p>
                    {" "}
                    This is why we are the number one real estate company in
                    Thailand, who understands foreigners and expats that face
                    difficulties in purchasing a home in Thailand through local
                    banks. Our partner financial institution is on standby to
                    help you during your loans and escrow transactions. You can
                    be rest assured that we can get your dream home approved.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Why do you need to buy property through Buyhomeforless.com?
                </Accordion.Header>
                <Accordion.Body className="collapseparent">
                  <p>
                    {" "}
                    Buyhomeforless.com have thousands of properties from single
                    residences and hotels to apartments, condos, resorts and
                    even land throughout Thailand. Every property that we choose
                    to be listed on our website is fully audited to ensure that
                    they are safe, secure, and can be legally transferred. In
                    essence, we ensure that every property listed with us is
                    problem free in terms of quality, price, and transfer of
                    ownership—legally and worry free. Every property that we
                    sell is certified through our company. We stand behind every
                    deal that we close.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-4 infographics-5">
            {contactinfo.slice(0, 2).map((item, i) => (
              <div key={i} className="acr-infographic-item">
                <i className={"flaticon-" + item.icon + ""} />
                <div className="acr-infographic-item-body">
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                  <Link
                    to={item.btnurl}
                    className="btn-custom secondary btn-sm"
                  >
                    {item.btntext}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
