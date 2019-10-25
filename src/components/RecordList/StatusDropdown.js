import React from 'react';
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import {STATUSES} from "../../tools/constants";

const StatusDropdown = ({status, onEdit}) => (
  <form autoComplete="off">
    <FormControl>
      <Select
        value={status}
        onChange={onEdit}
        inputProps={{
          name: 'status',
          id: 'status-simple',
        }}
      >
        {STATUSES.map((s) => <MenuItem key={s} value={s}>{s}</MenuItem>)}
      </Select>
    </FormControl>
  </form>)
;

StatusDropdown.propTypes = {
  status: PropTypes.string,
  onEdit: PropTypes.func.isRequired
};

export default StatusDropdown;