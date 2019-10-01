import { connect } from "react-redux";
import { fetchStudent, newStudent } from "../../../../actions/students";
import StudentList from "./student_list";

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
	newStudent: data => dispatch(newStudent(data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(StudentList);
