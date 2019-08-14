import React from "react";
import ListItem from "./List-Item";

const List = ({ onVideoSelect, videos }) => {
  //Maps videos into a list of "ListItems".
  const videoItems = videos.map(video => {
    return (
      <ListItem
        onUserSelected={onVideoSelect} //Video Selected by user.
        key={video.etag} //Unique Key for Map iteration.
        video={video}
      /> 
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems} {/* Shows the result of mapping VideoItems */}
    </ul>
  );
};

export default List;
