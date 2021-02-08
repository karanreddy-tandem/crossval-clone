import React, { Fragment, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

import { Check, X, Edit, PlusSquare, Save, RefreshCcw } from "react-feather";

import GridTable from "@nadavshaar/react-grid-table";

const Inputs = (props) => {
  const [rows, setRows] = useState([
    {
      id: 1,
      fixed_expenses: "Expense Source 1",
      year_1: "$100",
      year_2: "$200",
      year_3: "$300",
    },
    {
      id: 2,
      fixed_expenses: "Expense Source 2",
      year_1: "$100",
      year_2: "$200",
      year_3: "$300",
    },
    {
      id: 3,
      fixed_expenses: "Expense Source 3",
      year_1: "$100",
      year_2: "$200",
      year_3: "$300",
    },
  ]);

  const [rows2, setRows2] = useState([
    {
      id: 1,
      current_cap_table: "Founder A",
      stake: "50 %",
    },
    {
      id: 2,
      current_cap_table: "Founder B",
      stake: "30 %",
    },
    {
      id: 3,
      current_cap_table: "Founder C",
      stake: "20 %",
    },
    {
      id: 4,
      current_cap_table: "Founder D",
      stake: "20 %",
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
                fixed_expenses: "",
                year_1: "",
                year_2: "",
                year_3: "",
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
          onClick={async (e) => {
            let columnsClone = [...tableManager.columnsApi.columns];
            columnsClone[tableManager.columnsApi.columns.length] =
              columnsClone[tableManager.columnsApi.columns.length - 1];

            columnsClone[tableManager.columnsApi.columns.length - 1] = {
              id: tableManager.columnsApi.columns.length,
              field: "username",
              label: "Username",
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

  const ColumnVisibility2 = ({ tableManager }) => {
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
                current_cap_table: "",
                stake: "",
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
          onClick={async (e) => {
            let columnsClone = [...tableManager.columnsApi.columns];
            columnsClone[tableManager.columnsApi.columns.length] =
              columnsClone[tableManager.columnsApi.columns.length - 1];

            columnsClone[tableManager.columnsApi.columns.length - 1] = {
              id: tableManager.columnsApi.columns.length,
              field: "username",
              label: "Username",
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
      field: "fixed_expenses",
      label: "Fixed Expenses",
    },
    {
      id: 2,
      field: "year_1",
      label: "Year 1",
    },
    {
      id: 3,
      field: "year_2",
      label: "Year 2",
    },
    {
      id: 4,
      field: "year_3",
      label: "Year 3",
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

  const columns2 = [
    {
      id: 1,
      field: "current_cap_table",
      label: "Current Cap Table",
    },
    {
      id: 2,
      field: "stake",
      label: "Stake %",
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
      <Breadcrumb parent="Dashboard" title="Inputs" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          <Col xl="6">
            <Row className="one">
              <Col xl="6" className="chart_data_right one box-col-12">
                <Card>
                  <CardBody>
                    <div className="media align-items-center">
                      <div className="media-body right-chart-content">
                        <h4>{"$95,900"}</h4>
                        <span>{"Fundraising Amount"}</span>
                      </div>
                      {/* <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue1"></div>
                  </div> */}
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6" className="chart_data_right two box-col-12">
                <Card>
                  <CardBody>
                    <div className="media align-items-center">
                      <div className="media-body right-chart-content">
                        <h4>{"$95,900"}</h4>
                        <span>{"Competitors/Potential Acquisition"}</span>
                      </div>
                      {/* <div className="knob-block text-center">
                    <div className="knob1" id="ordervalue1"></div>
                  </div> */}
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6" className="chart_data_right second">
                <Card>
                  <CardBody>
                    <div className="media align-items-center">
                      <div className="media-body right-chart-content">
                        <h4>{"$95,000"}</h4>
                        <span>{"Market Size"}</span>
                      </div>
                      {/* <div className="knob-block text-center">
                      <div className="knob1" id="ordervalue2"></div>
                    </div> */}
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl="6" className="chart_data_right second">
                <Card>
                  <CardBody>
                    <div className="media align-items-center">
                      <div className="media-body right-chart-content">
                        <h4>{"$95,000"}</h4>
                        <span>{"Marketing CPA"}</span>
                      </div>
                      {/* <div className="knob-block text-center">
                      <div className="knob1" id="ordervalue2"></div>
                    </div> */}
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col xl="6" className="chart_data_right second">
                <Card>
                  <CardBody>
                    <div className="media align-items-center">
                      <div className="media-body right-chart-content">
                        <h4>{"$95,000"}</h4>
                        <span>{"Revenue Model"}</span>
                      </div>
                      {/* <div className="knob-block text-center">
                      <div className="knob1" id="ordervalue2"></div>
                    </div> */}
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col xl="6" className="chart_data_right second">
                <Card>
                  <CardBody>
                    <div className="media align-items-center">
                      <div className="media-body right-chart-content">
                        <h4>{"$95,000"}</h4>
                        <span>{"Marketing LTV"}</span>
                      </div>
                      {/* <div className="knob-block text-center">
                      <div className="knob1" id="ordervalue2"></div>
                    </div> */}
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col xl="6" className="chart_data_right second">
                <Card>
                  <CardBody>
                    <div className="media align-items-center">
                      <div className="media-body right-chart-content">
                        <h4>{"$95,000"}</h4>
                        <span>{"Currency Format/Choice"}</span>
                      </div>
                      {/* <div className="knob-block text-center">
                      <div className="knob1" id="ordervalue2"></div>
                    </div> */}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xl="6" className="three box-col-12">
            <Card>
              <CardHeader>
                <h5>{"Current Cap Table"} </h5>
              </CardHeader>
              <CardBody>
                <GridTable
                  columns={columns2}
                  rows={rows2}
                  components={{ ColumnVisibility: ColumnVisibility2 }}
                  onRowsChange={setRows2}
                />
              </CardBody>
            </Card>
          </Col>

          <Col xl="12">
            <Card>
              <CardHeader>
                <h5>{"Fixed Expenses"} </h5>
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
        </Row>
      </Container>
    </Fragment>
  );
};

export default Inputs;
