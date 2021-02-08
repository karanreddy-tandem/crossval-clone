import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import ApexCharts from "react-apexcharts";
import { apexBarChart } from "./chartsData/apex-charts-data";

import {
  New,
  Hot,
  PurchaseOrderValue,
  ProductOrderValue,
  BarChart,
} from "../../constant";

const Valuation = (props) => {
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
          <Col xl="12">
            <Card>
              <CardHeader>
                <h5>{BarChart}</h5>
              </CardHeader>
              <CardBody>
                <div id="basic-bar">
                  <ApexCharts
                    options={apexBarChart.options}
                    series={apexBarChart.series}
                    type="bar"
                    height={350}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="12" className="alert-sec">
            <Card className="bg-img">
              <CardHeader>
                <div className="header-top">
                  <h5 className="m-0">{"Alert"} </h5>
                  <div className="dot-right-icon">
                    <i className="fa fa-ellipsis-h"></i>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="body-bottom">
                  <h6> {"10% off For drama lights Couslations..."}</h6>
                  <span className="font-roboto">
                    {
                      "Lorem Ipsum is simply dummy...It is a long established fact that a reader will be distracted by "
                    }{" "}
                  </span>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Valuation;
