import { combineReducers } from "redux";

import teachersReducer from "./teachers_reducer";
import coursesReducer from "./courses_reducer";
import studentsReducer from "./students_reducer";

const entitiesReducer = combineReducers({
	teachers: teachersReducer,
	courses: coursesReducer,
	students: studentsReducer,
});

export default entitiesReducer;
