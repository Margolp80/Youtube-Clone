import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import youtube from "../../API/youtube";
import { AppState } from "./App.State";
import VideoList from "../video-list/VideoList";
import VideoDetail from "../VideoDetail/VideoDetail";

class App extends React.Component {
  state: AppState = { videos: [], selectedVideo: null };

  onSubmit = async (term: string) => {
    console.log(`The term is ${term}`);
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoClicked = (video: any) => {
    console.log("the video:", video);
    this.setState({ selectedVideo: video });
  };

  componentDidMount = () => {
    this.onSubmit("flower");
  };

  render() {
    return (
      <div style={{ backgroundColor: "rgba(255,0,0,0.3)" }}>
        <SearchBar onSubmit={this.onSubmit} />
        <div
          className="ui grid"
          style={{ margin: "auto", marginTop: "25px", width: "90%" }}
        >
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoClicked={this.onVideoClicked}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
