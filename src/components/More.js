/* ################################################################################################################################                                                                                                                                #
#   _____ _               _   _                                      _                           ___   ___ ___   ___              #
#  / ____(_)             | | (_)                                    (_)                         |__ \ / _ \__ \ / _ \             #
# | |  __ _  __ _  ___   | |_ _  ___ _ __    _ __   __ _ _   _  ___  _   _ __ ___   __ _ _   _     ) | | | | ) | | | |            #
# | | |_ | |/ _` |/ _ \  | __| |/ _ \ '_ \  | '_ \ / _` | | | |/ _ \| | | '_ ` _ \ / _` | | | |   / /| | | |/ /| | | |            #
# | |__| | | (_| | (_) | | |_| |  __/ |_) | | | | | (_| | |_| | (_) | | | | | | | | (_| | |_| |  / /_| |_| / /_| |_| |            #
#  \_____|_|\__,_|\___/   \__|_|\___| .__/  |_| |_|\__, |\__,_|\___/|_| |_| |_| |_|\__,_|\__, | |____|\___/____|\___/             #
#                                  | |             __/ |                                 __/ |                                    #
#                                  |_|            |___/                                 |___/                                     #                                                                                                                                 #
################################################################################################################################## */



import React, { Component } from "react";

class More extends Component {
  render() {
    return (
      <div>
        <div id="align-top"></div>

        <div className="text-center introAbout">
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
          ĐƯỢC TẠO RA TỪ 1023,5 GIỜ CODING LIÊN TỤC
        </h3>
        <div id="chartdiv1"></div>
        <h3 className="text-center timeLine123">
          QUÁ TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN
        </h3>

        <div id="chartdiv2"></div>
        {/* /////////// begin carousel ///////////////////////// */}
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8 col-center m-auto">
              <h2>Phản hồi từ người dùng</h2>
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* Carousel indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#myCarousel" data-slide-to={1} />
                  <li data-target="#myCarousel" data-slide-to={2} />
                </ol>
                {/* Wrapper for carousel items */}

                <div className="carousel-inner feedBack ">
                  <div className="item carousel-item active">
                    <div className="img-box">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/mediastorage0943.appspot.com/o/Giao%20Tiep%20Nguoi%20May%202020%2FProject%20Nhom%2FFeedBack_MorePage%2FFeedBackThanhDien.jpg?alt=media&token=f67059b8-006a-4508-9343-17e6a56b5ee3"
                        alt=""
                      />
                    </div>
                    <p className="testimonial text-justify">
                      Tin tức cập nhật rất nhanh chóng, độ chính xác cao. Nội
                      dung bài viết chi tiết, cụ thể. Đây là nền tảng theo dõi
                      diễn biến thị trường BĐS tốt nhất Việt Nam.
                    </p>
                    <p className="overview">
                      <b>Mr. Thanh Điền</b>, khoa Quản lý đất đai & bất động sản
                      - Đại học Nông Lâm
                    </p>
                  </div>

                  <div className="item carousel-item">
                    <div className="img-box">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/mediastorage0943.appspot.com/o/Giao%20Tiep%20Nguoi%20May%202020%2FProject%20Nhom%2FFeedBack_MorePage%2FfeedbackHongPhuc.jpg?alt=media&token=70d8044f-67ad-4319-9c45-51a6a43fe193"
                        alt=""
                      />
                    </div>
                    <p className="testimonial text-justify">
                      Nền tảng cung cấp tin tức bất động sản giúp mọi người dễ
                      dàng kết nối với chủ đầu tư, nhiều lựa chọn và tìm được
                      những dự án nhà đất giá tốt.
                    </p>
                    <p className="overview">
                      <b>Mr. Hồng Phúc </b>, khoa Toán Kinh Tế - Đại Học Kinh Tế
                      Luật
                    </p>
                  </div>

                  <div className="item carousel-item">
                    <div className="img-box">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/mediastorage0943.appspot.com/o/Giao%20Tiep%20Nguoi%20May%202020%2FProject%20Nhom%2FFeedBack_MorePage%2FfeedbackCongDanh.jpg?alt=media&token=fcab5fdc-09c0-4b65-9cbc-46fe56b1bf6a"
                        alt=""
                      />
                    </div>
                    <p className="testimonial text-justify">
                      Giao diện thân thiện với trải nghiệm người dùng, nền tảng
                      sở hữu nguồn data khổng lồ từ thị trường BĐS, rất phù hợp
                      để phát triển và mở rộng sau này.
                    </p>
                    <p className="overview">
                      <b>Mr. Công Danh</b>, khoa Công Nghệ Thông Tin - Đại học
                      Nông Lâm
                    </p>
                  </div>
                </div>

                {/* Carousel controls */}
                <a
                  className="carousel-control left carousel-control-prev"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <i className="fa fa-angle-left" />
                </a>
                <a
                  className="carousel-control right carousel-control-next"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* /////////// end carousel ///////////////////////// */}

        

        <div className="container-fluid LienHeComponent pt-3 px-5">
          <div className="row">
            <div className="col-lg-6 mb-4 pl-5">
              <div className="googleMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.248272832275!2d106.78536971428014!3d10.86871179225896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752891cf0ca363%3A0x356ed7098d266f31!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBOw7RuZyBMw6JtIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1591683054049!5m2!1svi!2s"
                  width="100%"
                  height="350px"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
            <div className="col-lg-6 mb-4 px-5 mt-4 ">
              <div >
                <h4>Địa Chỉ:</h4>
                <p>
                  <i className="fa fa-home"></i> Trụ sở chính : Trường Đại Học
                  Nông Lâm Tp.HCM
                  khu phố 6, phường Linh Trung, Quận Thủ Đức, Tp.HCM
                </p>
                <p>
                  <i className="fa fa-home"></i> Chi nhánh 1 : KTX ĐHQG khu B
                  phường Đông Hòa, Thị Xã Dĩ An, tỉnh Bình Dương
                </p>
                <p>
                  <i className="fa fa-home"></i> Chi nhánh 2 : KTX ĐHQG Khu A
                  khu phố 6 - Phường Linh Trung - Quận Thủ Đức - Tp.HCM</p>
                
                <h4>Liên hệ:</h4>
                <p>
                  <i className="fas fa-phone-square"></i> SĐT : 18008199
                </p>
                <p>
                  <i className="fa fa-envelope"></i> E-mail :
                  batdongsan@nonglam.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default More;
