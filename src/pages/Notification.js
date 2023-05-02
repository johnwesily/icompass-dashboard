import React from "react";
import Note from "../components/Note";

function Notification() {
  return (
    <div className="container-fluid  justify-content-center ">
      <Note
        heading="notification 101"
        title="2023"
        content="
        some content from the 2023 or the note
        Some quick example text to build on the card t
        It all started with the computer. Had he known what was to follow, he would have never logged on that day. But
         the computer booted up, the screen came alive, an
         "
      />

      <Note
        heading="notification 102"
        title="2022"
        content="Some quick example text to build on the card title and make up the
        example text to build on the card title  example text to build on the card title 
         bulk of the card's content."
      />

      <Note
        heading="notification 103"
        title="2021"
        content="Some quick example text to build on the card t
        example text to build on the card title 
        example text to build on the card title 
        itle and make up the bulk of the card's content."
      />

      <Note
        heading="notification 104"
        title="2020"
        content="Some quick example text to build on the card title 
        example text to build on the card title 
        example text to build on the card title 
        and make up the bulk of the card's content."
      />
    </div>
  );
}

export default Notification;
