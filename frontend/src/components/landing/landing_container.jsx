import { connect } from "react-redux";
import {} from "../../actions/teachers";
import Landing from "./landing";

const mapStateToProps = (state, ownProps) => {
	return {
		state,
		ownProps,
		currentTeacher: state.entities.currentTeacher,
		courses: Object.values(state.entities.courses).filter(
			course => course.teacherId === state.entities.currentTeacher._id
		)
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing);
