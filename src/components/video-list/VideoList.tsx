import * as React from "react";
import VideoItem from "./video-item/VideoItem";
export interface VideoListProps {
  videos: any[];
  onVideoClicked: (video: any) => void;
}

const VideoList: React.FC<VideoListProps> = (props: VideoListProps) => {
  const VideoList = props.videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoClicked={props.onVideoClicked}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list container">{VideoList}</div>;
};

export default VideoList;
