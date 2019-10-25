import React from 'react';
import StatusDropdown from "./StatusDropdown";
import {TableRow, TableCell} from "@material-ui/core";
import PropTypes from "prop-types";

export const RecordRow = ({ record, onEdit }) => {
  return (
    <TableRow>
      <TableCell component="th" scope="row">{record.name}</TableCell>
      <TableCell align="right">{record.role}</TableCell>
      <TableCell align="right"> {record.connectedOn}</TableCell>
      <TableCell align="right">
        <StatusDropdown onEdit={(e) => onEdit(record, e)} status={record.status}/>
      </TableCell>
    </TableRow>
  )
};

RecordRow.propTypes = {
  record: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired
};