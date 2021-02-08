import React, { Fragment, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Check, X, Edit, PlusSquare, Save, RefreshCcw } from "react-feather";

import GridTable from "@nadavshaar/react-grid-table";

const HistoricalData = (props) => {
  const [rows, setRows] = useState([
    {
      id: 1,
      source: "Revenue Source 1",
      past_month_1: "$100",
      past_month_2: "$200",
      past_month_3: "$300",
      past_month_4: "$400",
      past_month_5: "$500",
      past_month_6: "$600",
      past_month_7: "$700",
      past_month_8: "$800",
      past_month_9: "$900",
      past_month_10: "$1000",
      past_month_11: "$1100",
      past_month_12: "$1200",
    },
    {
      id: 2,
      source: "Revenue Source 2",
      past_month_1: "$100",
      past_month_2: "$200",
      past_month_3: "$300",
      past_month_4: "$400",
      past_month_5: "$500",
      past_month_6: "$600",
      past_month_7: "$700",
      past_month_8: "$800",
      past_month_9: "$900",
      past_month_10: "$1000",
      past_month_11: "$1100",
      past_month_12: "$1200",
    },
    {
      id: 3,
      source: "Cost of Goods Sold",
      past_month_1: "$100",
      past_month_2: "$200",
      past_month_3: "$300",
      past_month_4: "$400",
      past_month_5: "$500",
      past_month_6: "$600",
      past_month_7: "$700",
      past_month_8: "$800",
      past_month_9: "$900",
      past_month_10: "$1000",
      past_month_11: "$1100",
      past_month_12: "$1200",
    },
    {
      id: 4,
      source: "Expense Source 1",
      past_month_1: "$100",
      past_month_2: "$200",
      past_month_3: "$300",
      past_month_4: "$400",
      past_month_5: "$500",
      past_month_6: "$600",
      past_month_7: "$700",
      past_month_8: "$800",
      past_month_9: "$900",
      past_month_10: "$1000",
      past_month_11: "$1100",
      past_month_12: "$1200",
    },
    {
      id: 5,
      source: "Expense Source 2",
      past_month_1: "$100",
      past_month_2: "$200",
      past_month_3: "$300",
      past_month_4: "$400",
      past_month_5: "$500",
      past_month_6: "$600",
      past_month_7: "$700",
      past_month_8: "$800",
      past_month_9: "$900",
      past_month_10: "$1000",
      past_month_11: "$1100",
      past_month_12: "$1200",
    },
    {
      id: 6,
      source: "Expense Source 3",
      past_month_1: "$100",
      past_month_2: "$200",
      past_month_3: "$300",
      past_month_4: "$400",
      past_month_5: "$500",
      past_month_6: "$600",
      past_month_7: "$700",
      past_month_8: "$800",
      past_month_9: "$900",
      past_month_10: "$1000",
      past_month_11: "$1100",
      past_month_12: "$1200",
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
                source: "",
                past_month_1: "",
                past_month_2: "",
                past_month_3: "",
                past_month_4: "",
                past_month_5: "",
                past_month_6: "",
                past_month_7: "",
                past_month_8: "",
                past_month_9: "",
                past_month_10: "",
                past_month_11: "",
                past_month_12: "",
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
      field: "past_month_3",
      label: "Past Month 3",
    },
    {
      id: 5,
      field: "past_month_4",
      label: "Past Month 4",
    },
    {
      id: 6,
      field: "past_month_5",
      label: "Past Month 5",
    },
    {
      id: 7,
      field: "past_month_6",
      label: "Past Month 6",
    },
    {
      id: 8,
      field: "past_month_7",
      label: "Past Month 7",
    },
    {
      id: 9,
      field: "past_month_8",
      label: "Past Month 8",
    },
    {
      id: 10,
      field: "past_month_9",
      label: "Past Month 9",
    },
    {
      id: 11,
      field: "past_month_10",
      label: "Past Month 10",
    },
    {
      id: 12,
      field: "past_month_11",
      label: "Past Month 11",
    },
    {
      id: 13,
      field: "past_month_12",
      label: "Past Month 12",
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
      <Breadcrumb parent="Dashboard" title="Historical Data" />
      <Container fluid={true}>
        <Row className="second-chart-list third-news-update">
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

export default HistoricalData;
