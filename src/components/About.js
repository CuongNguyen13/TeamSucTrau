import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div id="align-top"></div>

        <div className="text-justify text-center introAbout">
          <h1>Tầm nhìn chiến lược và định hướng trong tương lai</h1>
          <p>
            Cty TNHH bất động sản Nông Lâm không chỉ là nền tảng cung cấp tin
            tức về thị trường Bất động sản chính xác và nhanh chóng nhất Việt
            Nam, trong thời gian tới Cty TNHH bất động sản Nông Lâm sẽ phát
            triển thêm nền tảng môi giới bất động sản, có nhiệm vụ kết nối các
            nhà đầu tư với nhau trên khắp mọi miền tổ quốc.
          </p>
        </div>
        <h3 className="text-center">
          Được tạo ra từ 1023,5 giờ coding liên tục
        </h3>
        <div id="chartdiv1"></div>
        <h3 className="text-center timeLine123">
          Quá trình hình thành và phát triển
        </h3>

        <div id="chartdiv2"></div>
        <div className="LienHeComponent">
          <h1 className="text-center LHHT">Liên hệ hợp tác</h1>
          <div className="LienHeContent" >
            <h4>Địa Chỉ:</h4>
            <h5>
              <i className="fa fa-home"></i> Trụ sở chính : Trường Đại Học Nông
              Lâm Tp.HCM khu phố 6, phường Linh Trung, Quận Thủ Đức, Tp.HCM
            </h5>
            <h5>
              <i className="fa fa-home"></i> Chi nhánh 1 : KTX ĐHQG khu B,
              phường Đông Hòa, Thị Xã Dĩ An, tỉnh Bình Dương
            </h5>
            <h5>
              <i className="fa fa-home"></i> Chi nhánh 2 : Khu phố 6 - Phường
              Linh Trung - Quận Thủ Đức - Tp.HCM
            </h5>
            <h4>Liên hệ:</h4>
            <h5>
              <i className="fa fa-mobile"></i> SĐT : 18008199
            </h5>
            <h5>
              <i className="fa fa-envelope"></i> E-mail : batdongsan@nonglam.com
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
