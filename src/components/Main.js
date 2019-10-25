import React from "react";
import PropTypes from "prop-types";
import RecordsList from "./RecordList/RecordsList";
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import SearchBar from './SearchBar/SearchBar';
import StatisticBar from "./Statistic/StatisticBar";
import '../App.css';

const Main = ({ records, actions }) => {

  const onEdit = (record, e) => {
    const updatedRecord = Object.assign({}, record, { status: e.target.value });
    actions.editRecord(updatedRecord);
  };

  const onSearch = (query, mode) => {
    actions.searchRecords(query, mode);
  };

  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start'
    }}>
      <Container style={{ flexGrow: 1 }}>
        <SearchBar onChange={onSearch}/>
        <Paper className="Paper">
          <RecordsList records={records} onEdit={onEdit}/>
        </Paper>
      </Container>
      <StatisticBar records={records}/>
    </Container>
  );
};

Main.propTypes = {
  records: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
export default Main;
