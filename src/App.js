import Main from './components/Main';
import { bindActionCreators } from "redux";
import * as recordActions from "./redux/actions/recordActions";
import connect from "react-redux/es/connect/connect";

function mapStateToProps(state){
  return {
    records: state.records,
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: {
      editRecord: bindActionCreators(
        recordActions.editRecord, dispatch
      ),
      searchRecords: bindActionCreators(
        recordActions.searchRecords, dispatch
      )
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
