import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="new_footer_top">
          {/* z1 */}
          <div className="container my-5">
            <div className="row justify-content-center ">
              <div className="col-lg-4 text-justify text-center social_block">
                <h5>Follow us on social media</h5>
                <div className="social-buttons">
                  {/* facebook  Button */}
                  <a
                    href="http://www.facebook.com"
                    target="blank"
                    className="social-margin"
                  >
                    <div className="social-icon facebook">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </div>
                  </a>
                  
                  {/* Github Button */}
                  <a
                    href="https://github.com/"
                    target="blank"
                    className="social-margin"
                  >
                    <div className="social-icon github">
                      <i className="fa fa-github" aria-hidden="true" />
                    </div>
                  </a>
                  {/* Youtube Button */}
                  <a
                    href="http://youtube.com/"
                    target="blank"
                    className="social-margin"
                  >
                    <div className="social-icon youtube">
                      <i className="fa fa-youtube" aria-hidden="true" />
                    </div>
                  </a>
                  
                  {/* TwitterButton */}
                  <a
                    href="http://twitter.com/"
                    target="blank"
                    className="social-margin"
                  >
                    <div className="social-icon twitter">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 text-justify text-center Copyright1_block">
                <h5>Cty TNHH bất động sản Nông Lâm</h5>
                <p>Nguồn tin tức chính xác, tin cậy về thị trường bất động sản Việt Nam</p>
                <p id="Copyright1">Copyright © HCI Team NLU 2020.</p>

                
              </div>
            </div>
          </div>
          {/* z0 */}
          <div className="footer_bg">
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
