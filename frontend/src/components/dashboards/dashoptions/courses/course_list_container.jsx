import { connect } from "react-redux";
import { fetchStudent } from "../../../../actions/students";
import { fetchCourse, newCourse } from "../../../../actions/courses";
import { deleteCourse } from "../../../../util/course_api_utils";
import CourseList from "./course_list";

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
	fetchCourse: data => dispatch(fetchCourse(data)),
	newCourse: data => dispatch(newCourse(data)),
	deleteCourse: data => dispatch(deleteCourse(data))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CourseList);
