import React from "react";

const Details = ({ video }) => {
  //Spinner shown in case of not viewing any video.
  if (!video) {
    return (
      <div>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/290a2c55412931.59831925f0655.gif"
          alt=""
        />
      </div>
    );
  }
  //Embedding the video depending on the id got from the call.
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title=""/>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div> {/* video title */}
        <div>{video.snippet.description}</div> {/* video Description */}
      </div>
    </div>
  );
};

export default Details;
