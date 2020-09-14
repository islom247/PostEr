import React from "react";
import moment from "moment";
import "../../index.css";
const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{project.title}</span>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">
          {project.createdAt
            ? moment(project.createdAt.toDate()).calendar()
            : "Post date undefined"}
        </p>
      </div>
    </div>
  );
};
export default ProjectSummary;
