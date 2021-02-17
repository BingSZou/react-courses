import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

const CoursesPage = (props) => {
  const [newcourse, setNewcourse] = useState({ course: { title: "" } });

  const submitNewCourse = (event) => {
    event.preventDefault();

    props.actions.createCourse(newcourse);
  };
  const onChangeHandler = (event) => {
    console.log("new value" + event.target.value);
    setNewcourse({ ...newcourse, title: event.target.value });
  };
  return (
    <>
      <h4>Courses</h4>
      <p>Add Course</p>
      <form onSubmit={submitNewCourse}>
        <input type="text" value={newcourse.title} onChange={onChangeHandler}></input>
        <input type="submit" value="Save"></input>
        {props.courses.map((c) => (
          <div key={c.title}>{c.title}</div>
        ))}
      </form>
    </>
  );
};

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
