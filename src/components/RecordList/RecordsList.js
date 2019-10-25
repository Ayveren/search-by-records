import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { RecordRow } from "./RecordRow";

const RecordsList = ({ records, onEdit }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Role&nbsp;</TableCell>
          <TableCell align="right">Date&nbsp;</TableCell>
          <TableCell align="right">Status&nbsp;</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {records.map(record => (
          <RecordRow
            key={record.name + Date.now()}
            record={record}
            onEdit={onEdit}/>
        ))}
      </TableBody>
    </Table>)
};

RecordsList.propTypes = {
  records: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default RecordsList;