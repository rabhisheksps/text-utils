import React from 'react'

export default function Footer(props) {
  return (
    <div>
    <footer className={`text-center text-lg-start bg-${props.mode} text-muted border 12px solid black`}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{color: props.mode==='light'?'black':'white'}}>
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="#!" className="me-4 link-secondary">
            <i className="fa fa-facebook-f"></i>
          </a>
          <a href="#!" className="me-4 link-secondary">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#!" className="me-4 link-secondary">
            <i className="fa fa-google"></i>
          </a>
          <a href="#!" className="me-4 link-secondary">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#!" className="me-4 link-secondary">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#!" className="me-4 link-secondary">
            <i className="fa fa-github"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5" style={{color: props.mode==='light'?'black':'white'}}>
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fa fa-gem me-3 text-secondary"></i>Text-Utils
              </h6>
              <p>TextUtils is an open-source text utility app which offer various day-to-day use features such as word & character counting, covert text to UpperCase and much more.</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset">Angular</a>
              </p>
              <p>
                <a href="#!" className="text-reset">React</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Vue</a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Pricing</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Settings</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fa fa-home me-3 text-secondary"></i> New York, NY 10012, US</p>
              <p>
                <i className="fa fa-envelope me-3 text-secondary"></i>
                contact@textutils.com
              </p>
              <p><i className="fa fa-phone me-3 text-secondary"></i> + 01 234 567 88</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-2" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
        <p style={{color: props.mode==='dark'?'white':'black'}}>© 2023 Copyright: TextUtils.com</p>
      </div>
    </footer>
    </div>
  )
}
