"use client";

import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", aspectRatio: "16/9", background: "#f0f0f0" }} />
});

type TVideoPlayerProps = React.ComponentProps<typeof ReactPlayer>;

export const VideoPlayer = ({
  config,
  url,
  width = "100%",
  height = "100%",
  ...props
}: TVideoPlayerProps) => (
  <PlayerContainer>
    <ReactPlayer
      url={url}
      width={width}
      height={height}
      controls
      light
      config={{
        youtube: {
          playerVars: {
            rel: 0,
            modestbranding: 1
          }
        },
        ...config
      }}
      {...props}
    />
  </PlayerContainer>
);

const PlayerContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  max-width: 550px;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
`;
