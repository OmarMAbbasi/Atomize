import { connect } from "react-redux";
import { getCurrentTeacher } from "../../actions/teachers";
import Landing from "./landing";

const mapStateToProps = (state, ownProps) => {
	return {
		state,
		ownProps,
		currentTeacher: state.entities.currentTeacher
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
