import React, { Fragment, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Check, X, Edit, PlusSquare, Save, RefreshCcw } from "react-feather";

import GridTable from "@nadavshaar/react-grid-table";
import { New } from "../../constant";

const CapTables = (props) => {
  const [rows, setRows] = useState([
    {
      id: 1,
      stakeholder_id: "Founder 1",
      common: "",
      series: "",
      outstanding_shares: "231,321",
      fully_diluted_shares: "231,321",
      outstanding_ownership: "231,321",
      fully_diluted_ownership: "231,321",
    },
    {
      id: 2,
      stakeholder_id: "Investor 1",
      common: "",
      series: "",
      outstanding_shares: "231,321",
      fully_diluted_shares: "231,321",
      outstanding_ownership: "231,321",
      fully_diluted_ownership: "231,321",
    },
    {
      id: 3,
      stakeholder_id: "Fully Diluted Shares",
      common: "",
      series: "",
      outstanding_shares: "231,321",
      fully_diluted_shares: "231,321",
      outstanding_ownership: "231,321",
      fully_diluted_ownership: "231,321",
    },
    {
      id: 4,
      stakeholder_id: "Fully Diluted Ownership",
      common: "",
      series: "",
      outstanding_shares: "231,321",
      fully_diluted_shares: "231,321",
      outstanding_ownership: "231,321",
      fully_diluted_ownership: "231,321",
    },
    {
      id: 5,
      stakeholder_id: "Total Shares Outstanding",
      common: "",
      series: "",
      outstanding_shares: "231,321",
      fully_diluted_shares: "231,321",
      outstanding_ownership: "231,321",
      fully_diluted_ownership: "231,321",
    },
    {
      id: 6,
      stakeholder_id: "Percentage Outstanding",
      common: "",
      series: "",
      outstanding_shares: "231,321",
      fully_diluted_shares: "231,321",
      outstanding_ownership: "231,321",
      fully_diluted_ownership: "231,321",
    },
    {
      id: 7,
      stakeholder_id: "Price Per Share",
      common: "",
      series: "",
      outstanding_shares: "231,321",
      fully_diluted_shares: "231,321",
      outstanding_ownership: "231,321",
      fully_diluted_ownership: "231,321",
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
      field: "stakeholder_id",
      label: "Stakeholder Id",
    },
    {
      id: 2,
      field: "common",
      label: "Common (CS)",
    },
    {
      id: 3,
      field: "series",
      label: "Series A Preferred (PSA)",
    },
    {
      id: 4,
      field: "outstanding_shares",
      label: "Outstanding Shares",
    },
    {
      id: 5,
      field: "fully_diluted_shares",
      label: "Fully Diluted Shares",
    },
    {
      id: 6,
      field: "outstanding_ownership",
      label: "Outstanding Ownership",
    },
    {
      id: 7,
      field: "fully_diluted_ownership",
      label: "Fully Diluted Ownership",
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
      <Breadcrumb parent="Dashboard" title="Cap Tables" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
          <Col xl="4" className="chart_data_right box-col-12">
            <Card>
              <CardBody>
                <div className="media align-items-center">
                  <div className="media-body right-chart-content">
                    <h4>{"$95,900"}</h4>
                    <span>{"Majority Holder"}</span>
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
                    <span>{"Add New Investor"}</span>
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
                    <h4>
                      {"$95,000"}
                      <span className="new-box">{New}</span>
                    </h4>
                    <span>{"Manage ESOP"}</span>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col xl="12">
            <Card>
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

export default CapTables;
