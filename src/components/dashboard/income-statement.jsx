import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
} from "reactstrap";
import DatePicker from "react-datepicker";
import ApexCharts from "react-apexcharts";
import ChartistChart from "react-chartist";
import Knob from "knob";
import {
  Currentlysale,
  Marketvalue,
  areaSpaline,
  apexMixedCharts,
} from "./chartsData/apex-charts-data";
import CountUp from "react-countup";
import { totalearning } from "./chartsData/apex-charts-data";

import {
  smallchart1data,
  smallchart1option,
  smallchart2data,
  smallchart2option,
  smallchart3data,
  smallchart3option,
  smallchart4data,
  smallchart4option,
} from "./chartsData/chartist-charts-data";
import { Send, Clock } from "react-feather";
import {
  NewsUpdate,
  New,
  Hot,
  TotalProfit,
  Done,
  Pending,
  Dashboard,
  Summary,
  Appointment,
  Notification,
  MarketValue,
  Chat,
  Tomorrow,
  Yesterday,
  MixedChart,
  Daily,
  Weekly,
  Monthly,
  Store,
  Online,
  ReferralEarning,
  CashBalance,
  SalesForcasting,
  Purchase,
  Sales,
  SalesReturn,
  PurchaseRet,
  PurchaseOrderValue,
  ProductOrderValue,
  Yearly,
  Today,
  VenterLoren,
  JohnLoren,
  Year,
  Month,
  Day,
  RightNow,
  BestSeller,
  AreaSpalineChart,
  NewProduct,
  RiskFactor,
  Location,
  TodayTotalSale,
  TodayTotalVisits,
  OurSaleValue,
  HikeShoes,
  CouponCode,
  TreePot,
  Watch,
  TShirt,
  TotalGoal,
  GoalArchive,
  Duration,
  DownloadDetails,
  Johnketer,
  HerryVenter,
  LoainDeo,
  TodayStockValue,
  Bag,
  HorenHors,
  InProcess,
  FenterJessy,
  Success,
} from "../../constant";

const IncomeStatement = (props) => {
  const [daytimes, setDayTimes] = useState();
  const today = new Date();
  const curHr = today.getHours();
  const curMi = today.getMinutes();
  const [meridiem, setMeridiem] = useState("AM");
  // eslint-disable-next-line
  const [date, setDate] = useState({ date: new Date() });
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    if (curHr < 12) {
      setDayTimes("Good Morning");
    } else if (curHr < 18) {
      setDayTimes("Good Afternoon");
    } else {
      setDayTimes("Good Evening");
    }

    if (curHr >= 12) {
      setMeridiem("PM");
    } else {
      setMeridiem("AM");
    }

    var ordervalue1 = Knob({
      value: 60,
      angleOffset: 0,
      thickness: 0.3,
      width: 65,
      fgColor: "#7366ff",
      readOnly: false,
      dynamicDraw: true,
      tickColorizeValues: true,
      bgColor: "#eef5fb",
      lineCap: "round",
      displayPrevious: false,
    });
    // document.getElementById("ordervalue1").appendChild(ordervalue1);

    var ordervalue2 = Knob({
      value: 60,
      angleOffset: 0,
      thickness: 0.3,
      fgColor: "#7366ff",
      readOnly: false,
      width: 65,
      dynamicDraw: true,
      lineCap: "round",
      displayPrevious: false,
    });
    // document.getElementById("ordervalue2").appendChild(ordervalue2);

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          <Col xl="4" className="chart_data_right box-col-12">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>
                      {"$95,900"}
                      <span className="new-box">{Hot}</span>
                    </h4>
                    <span>{PurchaseOrderValue}</span>
                  </div>
                  {/* <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue1"></div>
                  </div> */}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" className="chart_data_right box-col-12">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>
                      {"$95,900"}
                      <span className="new-box">{Hot}</span>
                    </h4>
                    <span>{PurchaseOrderValue}</span>
                  </div>
                  {/* <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue1"></div>
                  </div> */}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" className="chart_data_right second d-none">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>
                      {"$95,000"}
                      <span className="new-box">{New}</span>
                    </h4>
                    <span>{ProductOrderValue}</span>
                  </div>
                  {/* <div className="knob-block text-center">
                      <div className="knob1" id="ordervalue2"></div>
                    </div> */}
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="8 xl-100">
            <Card>
              <CardBody>
                <div className="best-seller-table responsive-tbl">
                  <div className="item">
                    <div className="table-responsive product-list">
                      <Table borderless>
                        <thead>
                          <tr>
                            <th className="f-22">{BestSeller}</th>
                            <th>{"Date"}</th>
                            <th>{"Product"}</th>
                            <th>{"Country"}</th>
                            <th>{"Total"}</th>
                            <th className="text-right">{"Status"}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-inline-block align-middle">
                                <img
                                  className="img-40 m-r-15 rounded-circle align-top"
                                  src={require("../../assets/images/avtar/7.jpg")}
                                  alt=""
                                />
                                <div className="status-circle bg-primary"></div>
                                <div className="d-inline-block">
                                  <span>{Johnketer}</span>
                                  <p className="font-roboto">{"2019"}</p>
                                </div>
                              </div>
                            </td>
                            <td>{"06 August"}</td>
                            <td>{"CAP"}</td>
                            <td>
                              <i className="flag-icon flag-icon-gb"></i>
                            </td>
                            <td>
                              {" "}
                              <span className="label">{"$5,08,652"}</span>
                            </td>
                            <td className="text-right">
                              <i className="fa fa-check-circle"></i>
                              {Done}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-inline-block align-middle">
                                <img
                                  className="img-40 m-r-15 rounded-circle align-top"
                                  src={require("../../assets/images/avtar/4.jpg")}
                                  alt=""
                                />
                                <div className="status-circle bg-primary"></div>
                                <div className="d-inline-block">
                                  <span>{HerryVenter}</span>
                                  <p className="font-roboto">{"2020"}</p>
                                </div>
                              </div>
                            </td>
                            <td>{"21 March"}</td>
                            <td>{"Branded Shoes"}</td>
                            <td>
                              <i className="flag-icon flag-icon-us"></i>
                            </td>
                            <td>
                              {" "}
                              <span className="label">{"$59,105"}</span>
                            </td>
                            <td className="text-right">
                              <i className="fa fa-check-circle"></i>
                              {Pending}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-inline-block align-middle">
                                <img
                                  className="img-40 m-r-15 rounded-circle align-top"
                                  src={require("../../assets/images/avtar/16.jpg")}
                                  alt=""
                                />
                                <div className="status-circle bg-primary"></div>
                                <div className="d-inline-block">
                                  <span>{LoainDeo}</span>
                                  <p className="font-roboto">{"2020"}</p>
                                </div>
                              </div>
                            </td>
                            <td>{"09 March"}</td>
                            <td>{"Headphone"}</td>
                            <td>
                              <i className="flag-icon flag-icon-za"></i>
                            </td>
                            <td>
                              {" "}
                              <span className="label">{"$10,155"}</span>
                            </td>
                            <td className="text-right">
                              <i className="fa fa-check-circle"></i>
                              {Success}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-inline-block align-middle">
                                <img
                                  className="img-40 m-r-15 rounded-circle align-top"
                                  src={require("../../assets/images/avtar/11.jpg")}
                                  alt=""
                                />
                                <div className="status-circle bg-primary"></div>
                                <div className="d-inline-block">
                                  <span>{HorenHors}</span>
                                  <p className="font-roboto">{"2020"}</p>
                                </div>
                              </div>
                            </td>
                            <td>{"14 February"}</td>
                            <td>{"Cell Phone"}</td>
                            <td>
                              <i className="flag-icon flag-icon-at"></i>
                            </td>
                            <td>
                              {" "}
                              <span className="label">{"$90,568"}</span>
                            </td>
                            <td className="text-right">
                              {" "}
                              <i className="fa fa-check-circle"></i>
                              {InProcess}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-inline-block align-middle">
                                <img
                                  className="img-40 m-r-15 rounded-circle align-top"
                                  src={require("../../assets/images/avtar/3.jpg")}
                                  alt=""
                                />
                                <div className="status-circle bg-primary"></div>
                                <div className="d-inline-block">
                                  <span>{FenterJessy}</span>
                                  <p className="font-roboto">{"2021"}</p>
                                </div>
                              </div>
                            </td>
                            <td>{"12 January"}</td>
                            <td>{"Earings"}</td>
                            <td>
                              <i className="flag-icon flag-icon-br"></i>
                            </td>
                            <td>
                              {" "}
                              <span className="label">{"$10,652"}</span>
                            </td>
                            <td className="text-right">
                              <i className="fa fa-check-circle"></i>
                              {Pending}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default IncomeStatement;
