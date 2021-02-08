import React, { Fragment } from "react";
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

import Chart from "react-apexcharts";

import {
  radialChart,
  radialChartLive,
  apexDonutCharts,
} from "./chartsData/apex-charts-data";
import CountUp from "react-countup";

import {
  ArrowDown,
  ArrowUp,
  GitPullRequest,
  MoreHorizontal,
} from "react-feather";

import { Sale, Today, Month, Week, Year } from "../../constant";

const General = (props) => {
  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="General" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          <Col xl="12 xl-100">
            <Card>
              <CardHeader>
                <Row>
                  <Col xs="9">
                    <h5>{"Valuation"}</h5>
                  </Col>
                  <Col xs="3" className="text-right">
                    <MoreHorizontal className="text-muted" />
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <div className="best-seller-table responsive-tbl">
                  <div className="item">
                    <div className="table-responsive product-list">
                      <Table borderless>
                        <tbody>
                          <tr>
                            <td>
                              <GitPullRequest />
                            </td>
                            <td className="text-center">{"Scorecard"}</td>
                            <td className="f-24">{"$6,299,481"}</td>
                            <td rowSpan="2" className="text-center">
                              {"Average"}
                              <div className="f-28">{"$6,299,481"}</div>
                            </td>
                            <td>
                              <GitPullRequest />
                            </td>
                            <td className="text-center">{"DCF"}</td>
                            <td className="f-24">{"$6,299,481"}</td>
                          </tr>
                          <tr>
                            <td>
                              <GitPullRequest />
                            </td>
                            <td className="text-center">{"VC Method"}</td>
                            <td className="f-24">{"$6,299,481"}</td>

                            <td>
                              <GitPullRequest />
                            </td>
                            <td className="text-center">{"Comparables"}</td>
                            <td className="f-24">{"$6,299,481"}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" className="chart_data_right">
            <Card>
              <CardHeader>
                <h5>{"Cap Table"}</h5>
              </CardHeader>
              <CardBody className="apex-chart p-20-px">
                <div id="donutchart">
                  <Chart
                    options={apexDonutCharts.options}
                    series={apexDonutCharts.series}
                    type="donut"
                    height="250"
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" className="">
            <Card>
              <CardHeader>
                <h5>{"Cash Runway"}</h5>
              </CardHeader>
              <CardBody className="p-20-px">
                <div className="chart-container">
                  <div id="circlechart">
                    <Chart
                      options={radialChartLive.options}
                      series={radialChartLive.series}
                      height="250"
                      width="100%"
                      type="radialBar"
                    />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="4">
            <Card className="o-hidden">
              <CardHeader>
                <h5>{"Revenues Vs Costs"}</h5>
              </CardHeader>
              <div className="bar-chart-widget">
                <CardBody className="p-20-px">
                  <div id="chart-widget5">
                    <Chart
                      options={radialChart.options}
                      series={radialChart.series}
                      height="250"
                      type="radialBar"
                    />
                  </div>
                </CardBody>
              </div>
            </Card>
          </Col>

          <Col xl="12 xl-100" className="dashboard ">
            <Card className="">
              <CardHeader>
                <h5>{"Unit Economics"}</h5>
              </CardHeader>
              <CardBody
                className="widget-joins widget-arrow"
                style={{ position: "relative" }}
              >
                <Row>
                  <Col sm="6" className="pr-0">
                    <div className="media border-after-xs">
                      <div className="align-self-center mr-3 text-left">
                        <h6 className="mb-1">{Sale}</h6>
                        <h4 className="mb-0">{Today}</h4>
                      </div>
                      <div className="media-body align-self-center">
                        <ArrowDown className="font-primary" />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">
                          {"$"}
                          <span className="counter">
                            <CountUp end={25698} />
                          </span>
                        </h5>
                        <span className="mb-1">{"-$2658(36%)"}</span>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" className="pl-0">
                    <div className="media">
                      <div className="align-self-center mr-3 text-left">
                        <h6 className="mb-1">{Sale}</h6>
                        <h4 className="mb-0">{Month}</h4>
                      </div>
                      <div className="media-body align-self-center">
                        <ArrowUp className="font-primary" />
                      </div>
                      <div className="media-body pl-2">
                        <h5 className="mb-0">
                          {"$"}
                          <span className="counter">
                            <CountUp end={6954} />
                          </span>
                        </h5>
                        <span className="mb-1">{"+$369(15%)"}</span>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" className="pr-0">
                    <div className="media border-after-xs">
                      <div className="align-self-center mr-3 text-left">
                        <h6 className="mb-1">{Sale}</h6>
                        <h4 className="mb-0">{Week}</h4>
                      </div>
                      <div className="media-body align-self-center">
                        <ArrowUp className="font-primary" />
                      </div>
                      <div className="media-body">
                        <h5 className="mb-0">
                          {"$"}
                          <span className="counter">
                            <CountUp end={63147} />
                          </span>
                        </h5>
                        <span className="mb-1">{"+$69(65%)"}</span>
                      </div>
                    </div>
                  </Col>
                  <Col sm="6" className="pl-0">
                    <div className="media">
                      <div className="align-self-center mr-3 text-left">
                        <h6 className="mb-1">{Sale}</h6>
                        <h4 className="mb-0">{Year}</h4>
                      </div>
                      <div className="media-body align-self-center pl-3">
                        <ArrowUp className="font-primary" />
                      </div>
                      <div className="media-body pl-2">
                        <h5 className="mb-0">
                          {"$"}
                          <span className="counter">
                            <CountUp end={963198} />
                          </span>
                        </h5>
                        <span className="mb-1">{"+$3654(90%)"}</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default General;
