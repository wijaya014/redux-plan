import React from "react";

const ProjectDetail = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card content">
          <span className="card-title">Title Project - {id}</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            obcaecati, similique nihil laborum unde blanditiis minima
            necessitatibus ducimus, voluptas, sit rem id vel dolorem repellendus
            enim cumque aperiam. Optio, quod.
          </p>
          <div className="card-action gret lighten-4 grey-text">
            <div>post by reduxman</div>
            <div>september, 2,2020</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
