import { connect } from "react-redux";
import { fetchStudent } from "../../../../actions/students";
import { fetchCourse } from "../../../../actions/courses";
import HybridList from "./hybrid_list";

const mapStateToProps = (state, ownProps) => {
	return {
		currentTeacher: state.entities.currentTeacher,
		courses: Object.values(state.entities.courses).filter(
			course => course.teacherId === state.entities.currentTeacher._id
		),
		students: state.entities.students
	};
};

const mapDispatchToProps = dispatch => ({
	fetchStudent: data => dispatch(fetchStudent(data)),
	fetchCourse: data => dispatch(fetchCourse(data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HybridList);
