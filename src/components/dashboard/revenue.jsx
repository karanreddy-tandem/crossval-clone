import React, { Fragment, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import ApexCharts from "react-apexcharts";
import GridTable from "@nadavshaar/react-grid-table";

import { Currentlysale, apexMixedCharts } from "./chartsData/apex-charts-data";

import { Check, Edit, X, PlusSquare, Save, RefreshCcw } from "react-feather";
import {
  Dashboard,
  Summary,
  Daily,
  Weekly,
  Monthly,
  Store,
  Online,
  ReferralEarning,
  CashBalance,
  SalesForcasting,
  Yearly,
} from "../../constant";

const Revenue = (props) => {
  const [rows, setRows] = useState([
    {
      id: 1,
      source: "Revenue Source 1",
      past_month_1: "$100",
      past_month_2: "$200",
      current_month: "$300",
      future_month_1: "$400",
      future_month_2: "$500",
    },
    {
      id: 2,
      source: "Revenue Source 2",
      past_month_1: "$100",
      past_month_2: "$200",
      current_month: "$300",
      future_month_1: "$400",
      future_month_2: "$500",
    },
  ]);

  const ColumnVisibility = ({ tableManager }) => {
    return (
      <Fragment>
        <div
          style={{
            cursor: "pointer",
            paddingRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={(e) => {
            tableManager.rowsApi.setRows((d) => [
              ...d,
              {
                id: tableManager.rowsApi.totalRows + 1,
                username: "",
                gender: "",
                last_visited: "",
                test: 0,
                avatar: "",
              },
            ]);
            tableManager.rowEditApi.setEditRowId(
              tableManager.rowsApi.totalRows + 1
            );
          }}
        >
          <PlusSquare /> Row
        </div>
        <div
          style={{
            cursor: "pointer",
            paddingRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={(e) => {
            let columnsClone = [...tableManager.columnsApi.columns];
            columnsClone[tableManager.columnsApi.columns.length] =
              columnsClone[tableManager.columnsApi.columns.length - 1];

            columnsClone[tableManager.columnsApi.columns.length - 1] = {
              id: tableManager.columnsApi.columns.length,
              source: "",
              past_month_1: "",
              past_month_2: "",
              current_month: "",
              future_month_1: "",
              future_month_2: "",
            };

            tableManager.columnsApi.setColumns(columnsClone);

            tableManager.rowEditApi.setEditRowId(1);
          }}
        >
          <PlusSquare /> Column
        </div>
        <div
          style={{
            cursor: "pointer",
            paddingRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={(e) => {}}
        >
          <Save /> Save
        </div>
        <div
          style={{
            cursor: "pointer",
            paddingRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={(e) => {}}
        >
          <RefreshCcw /> Refresh
        </div>
      </Fragment>
    );
  };

  const columns = [
    {
      id: 1,
      field: "source",
      label: "-",
    },
    {
      id: 2,
      field: "past_month_1",
      label: "Past Month 1",
    },
    {
      id: 3,
      field: "past_month_2",
      label: "Past Month 2",
    },
    {
      id: 4,
      field: "current_month",
      label: "Current Month",
    },
    {
      id: 5,
      field: "future_month_1",
      label: "Future Month 1",
    },
    {
      id: 6,
      field: "future_month_2",
      label: "Future Month 2",
    },
    {
      id: "my-buttons-column",
      width: "max-content",
      pinned: true,
      sortable: false,
      resizable: false,
      cellRenderer: ({
        tableManager,
        value,
        data,
        column,
        colIndex,
        rowIndex,
      }) => (
        <>
          <div
            style={{ cursor: "pointer" }}
            onClick={(e) => tableManager.rowEditApi.setEditRowId(data.id)}
          >
            <Edit />
          </div>
        </>
      ),
      editorCellRenderer: ({
        tableManager,
        value,
        data,
        column,
        colIndex,
        rowIndex,
        onChange,
      }) => {
        return (
          <div style={{ display: "inline-flex" }}>
            <div
              style={{ cursor: "pointer" }}
              onClick={(e) => tableManager.rowEditApi.setEditRowId(null)}
            >
              <X />
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                let rowsClone = [...tableManager.rowsApi.rows];
                let updatedRowIndex = rowsClone.findIndex(
                  (r) => r.id === data.id
                );
                rowsClone[updatedRowIndex] = data;

                tableManager.rowsApi.setRows(rowsClone);
                tableManager.rowEditApi.setEditRowId(null);
              }}
            >
              <Check />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <Fragment>
      <Breadcrumb parent="Dashboard" title="Revenue" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          <Col xl="12">
            <Card className="earning-card">
              <CardHeader>
                <h5>{"Revenue Timeline"} </h5>
              </CardHeader>
              <CardBody className="p-0">
                <Row className="m-0">
                  <Col lg="3" className="p-0">
                    <Row className="m-0 chart-left">
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{Dashboard}</h5>
                        <p className="font-roboto">
                          {"Overview of last month"}
                        </p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"$4055.56"} </h5>
                        <p className="font-roboto">{"This Month Earning"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"$1004.11"}</h5>
                        <p className="font-roboto">{"This Month Profit"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left_side_earning">
                        <h5>{"90%"}</h5>
                        <p className="font-roboto">{"This Month Sale"}</p>
                      </Col>
                      <Col xl="12" className="p-0 left-btn">
                        <a className="btn btn-gradient" href="#javascript">
                          {Summary}
                        </a>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="9" className="p-0">
                    <div className="chart-right">
                      <Row className="m-0 p-tb">
                        <Col xl="8" md="8" sm="8" className="col-12 p-0">
                          <div className="inner-top-left">
                            <ul className="d-flex list-unstyled">
                              <li>{Daily}</li>
                              <li className="active">{Weekly}</li>
                              <li>{Monthly}</li>
                              <li>{Yearly}</li>
                            </ul>
                          </div>
                        </Col>
                        <Col
                          xl="4"
                          md="4"
                          sm="4"
                          className="col-12 p-0 justify-content-end"
                        >
                          <div className="inner-top-right">
                            <ul className="d-flex list-unstyled justify-content-end">
                              <li>{Online}</li>
                              <li>{Store}</li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xl="12">
                          <CardBody className="p-0">
                            <div className="current-sale-container">
                              <ApexCharts
                                id="chart-currently"
                                options={Currentlysale.options}
                                series={Currentlysale.series}
                                type="area"
                                height={240}
                              />
                            </div>
                          </CardBody>
                        </Col>
                      </Row>
                    </div>
                    <Row className="border-top m-0">
                      <Col xl="4" md="6" sm="6" className="pl-0">
                        <div className="media p-0">
                          <div className="media-left">
                            <i className="icofont icofont-crown"></i>
                          </div>
                          <div className="media-body">
                            <h6>{ReferralEarning}</h6>
                            <p>{"$5,000.20"}</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="6" sm="6">
                        <div className="media p-0">
                          <div className="media-left bg-secondary">
                            <i className="icofont icofont-heart-alt"></i>
                          </div>
                          <div className="media-body">
                            <h6>{CashBalance}</h6>
                            <p>{"$2,657.21"}</p>
                          </div>
                        </div>
                      </Col>
                      <Col xl="4" md="12" className="pr-0">
                        <div className="media p-0">
                          <div className="media-left">
                            <i className="icofont icofont-cur-dollar"></i>
                          </div>
                          <div className="media-body">
                            <h6>{SalesForcasting}</h6>
                            <p>{"$9,478.50"}</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col xl="12">
            <Card>
              <CardHeader>
                <h5>{"Revenue Sources"} </h5>
              </CardHeader>
              <CardBody>
                <GridTable
                  columns={columns}
                  rows={rows}
                  components={{ ColumnVisibility }}
                  onRowsChange={setRows}
                />
              </CardBody>
            </Card>
          </Col>

          <Col xl="4" className="chart_data_right box-col-12 a">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>
                      {"$95,900"}
                      {/* <span className="new-box">{Hot}</span> */}
                    </h4>
                    <span>{"Month on Month Growth"}</span>
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
                    <h4>{"$95,900"}</h4>
                    <span>{"Variance From Targets"}</span>
                  </div>
                  {/* <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue1"></div>
                  </div> */}
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="4" className="chart_data_right second">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>{"$95,000"}</h4>
                    <span>{"Highest Monthly Revenue"}</span>
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
                <h5>{"Revenue Seasonality Analysis"}</h5>
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

export default Revenue;
