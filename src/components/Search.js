import React, { Component } from "react";
import $ from "jquery";

class Search extends Component {
  getUserLocation = () => {
    $.getJSON(
      "http://api.ipstack.com/113.161.38.79?access_key=2a6ca3b7495c1048cd04839775fbad78",
      function (data) {
        $("#ip").html(data.ip);
        $("#country_name").html(data.country_name);
        $("#region_name").html(data.region_name);
        $("#city").html(data.city);
      }
    );
  };
  render() {
    return (
      <div className=" text-justify text-center SearchPage ">
        <div id="align-top"></div>
        {this.getUserLocation()}
        <h2 className="title">
          <i className="fa fa-street-view"></i> Tìm kiếm những dự án bất động
          sản hiện có xung quanh bạn
        </h2>
        <table className="table table-bordered getUserLocationTable">
          <thead className=" table-success">
            <tr>
              <th scope="col" colSpan="2">
                Thông tin của bạn
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">Your IP</th>
              <td id="ip"></td>
            </tr>

            <tr>
              <th scope="row">Quốc gia</th>
              <td id="country_name"></td>
            </tr>

            <tr>
              <th scope="row">Khu vực</th>
              <td id="region_name"></td>
            </tr>

            <tr>
              <th scope="row"> Thành phố</th>
              <td id="city"></td>
            </tr>

            <tr>
              <th scope="row" colSpan="2">
                {/* bengin button */}
                <div>
                  {/* Button trigger modal */}
                  <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#SearchLocation"
                  >
                    <i className="fa fa-search-plus"></i> Search
                  </button>
                  {/* Modal */}
                  <div
                    className="modal fade"
                    id="SearchLocation"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header ">
                          <h5
                            className="modal-title"
                          >
                            <span className="loader loader1"></span> <span className="title" >Đang tìm</span>
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">
                              <i className="fa fa-times-circle closeBtn"></i>
                            </span>
                          </button>
                        </div>
                        <div className="modal-body">sgftggrr adsfrrfgdfasgdsg dffgdfgf dafgdfzg dfgdsfgfsdg sdfsgdfzg fgfrgdfg</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* end button */}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Search;
