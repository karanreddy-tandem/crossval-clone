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
          <Col xl="6" className="chart_data_right second d-none">
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
          <Col xl="6" className="chart_data_right second d-none">
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
          <Col xl="6" className="chart_data_right second d-none">
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
          <Col xl="6" className="chart_data_right second d-none">
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
          <Col xl="6" className="chart_data_right second d-none">
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
          <Col xl="6" className="chart_data_right second d-none">
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
          <Col xl="6" className="chart_data_right second d-none">
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
          <Col xl="6" className="chart_data_right second d-none">
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
          <Col xl="6" className="chart_data_right center-div">
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
        </Row>
      </Container>
    </Fragment>
  );
};

export default IncomeStatement;
