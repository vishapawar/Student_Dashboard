//Card 

import React from "react";

export default function StudentCard({ name, rollNo, course, batch }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card shadow">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"><b>Roll No:</b> {rollNo}</p>
          <p className="card-text"><b>Course:</b> {course}</p>
          <p className="card-text"><b>Batch:</b> {batch}</p>
        </div>
      </div>
    </div>
  );
}