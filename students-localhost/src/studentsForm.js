import { Component } from "react";
import "./StudentForm.css";

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      group: "",
      course: "",
      present: false,
      students: [],
    };
  }

  componentDidMount() {
    const savedStudents = localStorage.getItem("students");
    if (savedStudents) {
      this.setState({ students: JSON.parse(savedStudents) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.students !== this.state.students) {
      localStorage.setItem("students", JSON.stringify(this.state.students));
    }
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  addStudent = (e) => {
    e.preventDefault();
    const { name, group, course, present, students } = this.state;

    if (name.trim() !== "" && group.trim() !== "" && course.trim() !== "") {
      const newStudent = { name, group, course, present };
      this.setState({
        students: [...students, newStudent],
        name: "",
        group: "",
        course: "",
        present: false,
      });
    }
  };

  deleteStudent = (index) => {
    const updatedStudents = this.state.students.filter((_, i) => i !== index);
    this.setState({ students: updatedStudents });
  };

  render() {
    return (
      <div className="container">
        <div className="form-container">
          <h2>Student Form</h2>
          <form onSubmit={this.addStudent}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </label>

            <label>
              Group:
              <input
                type="text"
                name="group"
                value={this.state.group}
                onChange={this.handleChange}
                required
              />
            </label>

            <div>
              Course:
              {["HTML", "CSS", "JS", "React"].map((c) => (
                <label key={c} style={{ marginLeft: 8 }}>
                  <input
                    type="radio"
                    name="course"
                    value={c}
                    checked={this.state.course === c}
                    onChange={this.handleChange}
                    required
                  />
                  {c}
                </label>
              ))}
            </div>

            <label>
              <input
                type="checkbox"
                name="present"
                checked={this.state.present}
                onChange={this.handleChange}
              />
              Present
            </label>

            <button type="submit">Add Student</button>
          </form>
        </div>

        <div className="list-container">
          <h3>Students:</h3>
          <ul>
            {this.state.students.map((student, index) => (
              <li key={index}>
                {student.name} - {student.group} - {student.course} -{" "}
                {student.present ? "Present" : "Absent"}
                <button
                  style={{ marginLeft: 10 }}
                  onClick={() => this.deleteStudent(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default StudentForm;