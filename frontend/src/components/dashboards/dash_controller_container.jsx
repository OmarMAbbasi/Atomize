import { connect } from "react-redux";
import { DashController } from "./dash_controller";
import withRouter from "./dash_controller_container";

const mapStateToProps = (state, ownProps) => {
	return {
		currentTeacher: state.entities.currentTeacher,
		courses: Object.values(state.entities.courses).filter(
			course => course.teacherId === state.entities.currentTeacher._id
		),
		students: state.entities.students
	};
};

const mapDispatchToProps = {
	
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DashController);
