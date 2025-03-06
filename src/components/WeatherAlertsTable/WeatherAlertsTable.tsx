import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import {
  ColumnOrder,
  HeadCell,
  WeatherAlertsTableItem,
  WeatherAlrertsTableProps,
} from "./WeatherAlertsTable.types";

// function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator<Key extends keyof WeatherAlertsTableItem>(
//   order: ColumnOrder,
//   orderBy: Key,
// ): (
//   a: { [key in Key]: number | string },
//   b: { [key in Key]: number | string },
// ) => number {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

const headCells: readonly HeadCell[] = [
  {
    id: "title",
    disablePadding: true,
    label: "Title",
  },
  {
    id: "areaDesc",
    disablePadding: false,
    label: "Area Description",
  },
  {
    id: "sent",
    disablePadding: false,
    label: "Sent",
  },
  {
    id: "effective",
    disablePadding: false,
    label: "Effective",
  },
  {
    id: "expires",
    disablePadding: false,
    label: "Expires",
  },
  {
    id: "severity",
    disablePadding: false,
    label: "Severity",
  },
  {
    id: "instruction",
    disablePadding: false,
    label: "Instruction",
  },
];

type EnhancedTableProps = {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof WeatherAlertsTableItem,
  ) => void;
  order: ColumnOrder;
  orderBy: string;
};

const EnhancedTableHead = (props: EnhancedTableProps) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof WeatherAlertsTableItem) =>
    (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export const WeatherAlertsTable = ({items}: WeatherAlrertsTableProps) => {
  const [order, setOrder] = React.useState<ColumnOrder>("desc");
  const [orderBy, setOrderBy] =
    React.useState<keyof WeatherAlertsTableItem>("sent");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof WeatherAlertsTableItem,
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {items.map((row) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell component="th" scope="row" padding="none">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.areaDesc}</TableCell>
                    <TableCell align="right">{row.sent}</TableCell>
                    <TableCell align="right">{row.effective}</TableCell>
                    <TableCell align="right">{row.expires}</TableCell>
                    <TableCell align="right">{row.severity}</TableCell>
                    <TableCell align="right">{row.instruction}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default WeatherAlertsTable;
