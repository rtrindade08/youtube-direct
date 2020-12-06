import React, { useState } from "react";
import SearchBar from "./components/search-bar";
import VideoDetails from "./components/video-details";
import VideoList from "./components/video-list";
import youtube from "../src/api/youtube";

import { Grid } from "@material-ui/core";
function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideos = async (searchTerm) => {
    const result = await youtube.get("/search", { params: { q: searchTerm } });
    setVideos(result.data.items);
    setSelectedVideo(result.data.items[0]);
  };

  return (
    <Grid style={{ justifyContent: "center" }} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleVideos} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
