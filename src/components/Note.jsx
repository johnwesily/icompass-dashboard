import React from "react";

function Note(props) {
  return (
    <div class="card text-bg-secondary mb-3 w-18">
      <div class="card-header">{props.heading}</div>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.content}</p>
      </div>
    </div>
  );
}

export default Note;
