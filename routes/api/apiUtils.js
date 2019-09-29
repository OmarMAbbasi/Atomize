const indexPayload = array =>
	array.reduce((obj, ele) => {
		obj[ele._id] = ele;
		return obj;
	}, {});

const coursePayload = course => {
	return {
		_id: course._id,
		subject: course.subject,
		year: course.year,
		term: course.term,
		period: course.period,
		grade: course.grade,
		teacherId: course.teacherId._id,
		studentIds: Object.keys(indexPayload(course.studentIds))
	};
};

module.exports = {
	indexPayload,
	coursePayload
};
