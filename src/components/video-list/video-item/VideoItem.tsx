import * as React from "react";
import "./VideoItem.css";
export interface VideoItemProps {
  video: any;
  onVideoClicked: (video: any) => any;
}

export interface VideoItemState {}

class VideoItem extends React.Component<VideoItemProps, VideoItemState> {
  render() {
    const { video } = this.props;
    return (
      <div
        onClick={() => this.props.onVideoClicked(video)}
        className=" video-item item"
      >
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />

        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
