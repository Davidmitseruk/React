import React, { Component } from "react";
import "./StudentForm.css";

class StudentForm extends Component{
     constructor(props){
        super(props)
        this.state = {
            name: "",
            group: "",
            course: "",
            present: false,
            students: [],
        };
     }
     handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        this.setState({
        [name]: type === "checkbox" ? checked : value,
            });
        };


    handleSubmit = (e) => {
        e.preventDefault();

        const { name, group, course, present } = this.state;
        const newStudent = { name, group, course, present };

        this.setState((prevState) => ({
            students: [...prevState.students, newStudent],
            name: "", 
            group: "",
            course: "",
            present: false,
        }));
        };

    
        render() {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Student Form</h2>
        <form onSubmit={this.handleSubmit}>
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}}


export default StudentForm