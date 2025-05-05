"use client";

import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", aspectRatio: "16/9", background: "#f0f0f0" }} />
});

const PlayerContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  max-width: 550px;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
`;

export const VideoPlayer = () => (
  <PlayerContainer>
    <ReactPlayer
      url='https://www.youtube.com/watch?v=ETMunFpmVL8'
      width='100%'
      height='100%'
      controls
      light
      config={{
        youtube: {
          playerVars: {
            rel: 0,
            modestbranding: 1
          }
        }
      }}
    />
  </PlayerContainer>
);
