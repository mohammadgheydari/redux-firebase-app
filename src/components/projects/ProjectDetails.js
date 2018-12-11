import React from "react";

const ProjectDetails = props => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-detials">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            In publishing and graphic design, lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document without
            relying on meaningful content. Replacing the actual content with
            placeholder text allows designers to design the form of the content
            before the content itself has been produced.In publishing and
            graphic design, lorem ipsum is a placeholder text commonly used to
            demonstrate the visual form of a document without relying on
            meaningful content. Replacing the actual content with placeholder
            text allows designers to design the form of the content before the
            content itself has been produced.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: Net Ninja </div>
          <div>2nd September, 2am </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
