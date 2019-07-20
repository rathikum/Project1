import { connect } from "react-redux";
import paginationComponent from './paginationComponent';
import { getLogin } from "../../reducers";
import { loginActions } from "../../actions";


const mapStateToProps = (state /* , props */) => (
    {
     // loginData: getLogin(state)
    }
  );

const mapDispatchToProps = {
    // ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(paginationComponent);