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
      <div className=" text-justify text-center">
        <div id="align-top"></div>
        {this.getUserLocation()}
        <h2> Tìm kiếm những dự án bất động sản hiện có xung quanh bạn</h2>

        <table className="table table-bordered userLocationTable ">
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
                Button
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Search;
