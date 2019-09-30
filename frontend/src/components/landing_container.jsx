import { connect } from "react-redux";
import { getCurrentTeacher } from "../actions/teachers";
import Landing from "./landing";

const mapStateToProps = (state, ownProps) => {
	return {
		state,
		ownProps,
		currentTeacher: {
			_id: "5d919f82d5c6aa38edf30c4b"
		}
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getCurrentTeacher: data => dispatch(getCurrentTeacher(data))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing);
