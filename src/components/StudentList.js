//list


import React, { Component } from "react";
import StudentCard from "./Student_Card";


class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        { name: "Aarav Mehta", rollNo: "101", course: "ReactJS", batch: "10-12 AM" },
        { name: "Riya Sharma", rollNo: "102", course: "NodeJS", batch: "12-3 PM" },
        { name: "Rohit Patil", rollNo: "103", course: "Bootstrap", batch: "2:30-4:30 PM" },
        { name: "Neha Kulkarni", rollNo: "104", course: "JavaScript", batch: "5-6 PM" },
        { name: "Vishal Singh", rollNo: "105", course: "HTML & CSS", batch: "7-8 PM" },
        { name: "Anjali Verma", rollNo: "106", course: "Python", batch: "8-9 PM" }
      ]
    };
  }

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          {this.state.students.map((student, index) => (
            <StudentCard key={index} {...student} />
          ))}
        </div>
      </div>
    );
  }
}

export default StudentList;