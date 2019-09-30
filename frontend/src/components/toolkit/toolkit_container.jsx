import { connect } from "react-redux";
import Toolkit from "./toolkit";

const mapStateToProps = (state, ownProps) => {
	return {
		state,
		ownProps,
		currentTeacher: state.entities.currentTeacher
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Toolkit);
