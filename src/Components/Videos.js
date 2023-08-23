import React from 'react';
import { Stack, Box } from '@mui/material';
import { ChannelCard, VideoCard } from './';

const Videos = ({ videos }) => {
  if (!videos) {
    // Handle the case when videos is null or undefined
    return <div>No videos available.</div>;
  }

  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetails={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
