import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import ApexCharts from "react-apexcharts";
import { apexMixedCharts } from "./chartsData/apex-charts-data";
import {
  New,
  Hot,
  MixedChart,
  PurchaseOrderValue,
  ProductOrderValue,
} from "../../constant";

const IncomeStatement = (props) => {
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
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="8 xl-100">
            <Card>
              <CardHeader>
                <h5>{MixedChart}</h5>
              </CardHeader>
              <CardBody>
                <div id="mixedchart">
                  <ApexCharts
                    options={apexMixedCharts.options}
                    series={apexMixedCharts.series}
                    type="line"
                    height={350}
                  />
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
