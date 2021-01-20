import * as React from "react";
import { Segment, Container } from "semantic-ui-react";

export interface VideoDetailProps {
  video: any;
}

const VideoDetail: React.FC<VideoDetailProps> = ({ video }) => {
  if (!video) {
    return <div>LOADING..</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <Container>
      <div className="ui embed">
        <iframe src={videoSrc} title="Video Player" allowFullScreen></iframe>
      </div>
      <Segment>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </Segment>
    </Container>
  );
};

export default VideoDetail;
