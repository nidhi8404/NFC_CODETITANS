import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import { useParams } from 'react-router';

export default function BlogPost({ data }) {
  const [player, setPlayer] = useState(null);
  const [youtubeID, setYoutubeID] = useState('');
  const [readyToPlay, setReadyToPlay] = useState(false);

  const params = useParams();
  const post = data.posts.find((dataItem) => dataItem.id === params.id);

  useEffect(() => {
    if (post) {
      // Extract the video ID from the URL
      const videoIdMatch = post.url.match(/[?&]v=([^?&]+)/);
      if (videoIdMatch && videoIdMatch[1]) {
        setYoutubeID(videoIdMatch[1]);
        setReadyToPlay(true); // Mark the video as ready to play
      }
    }
  }, [post]);

  const onReady = (e) => {
    setPlayer(e.target);
  };

  const onPlayHandler = () => {
    if (player && readyToPlay) {
      player.playVideo(); // Start playing the video immediately
    }
  };

  const onPauseHandler = () => {
    if (player) {
      player.pauseVideo();
    }
  };

  const onStateChange = (e) => {
    // Check if the video has started playing and is ready to play
    if (e.data === YouTube.PlayerState.PLAYING && readyToPlay) {
      // Pause the video immediately to prevent unwanted playback
      player.pauseVideo();
    }
  };

  return (
    <div className="blog">
      {post ? (
        <>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className="player">
            <YouTube
              videoId={youtubeID}
              onReady={onReady}
              onStateChange={onStateChange}
              opts={{
                playerVars: {
                  playlist: '00AkMN9IAAY,4oCVDkb_EIs,7fPXI_MnBOY',
                },
              }}
            />
          </div>
          <button onClick={onPlayHandler} className="btn">
            Play
          </button>
          <button onClick={onPauseHandler} className="btn">
            Pause
          </button>
        </>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
}
