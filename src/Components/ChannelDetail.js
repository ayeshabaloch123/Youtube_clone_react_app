import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchFromAPI } from '../Utils/fetchFromAPI';
import { Videos } from './Videos';

const ChannelDetail = (Videos, channelDetails) => {
  const [channelDetail, setchannelDetail] = useState('');
  const [Myvideos, setVideos] = useState([]);

  const { id } = useParams();
  console.log(channelDetail, Myvideos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setchannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return <div>{id}</div>;
};

export default ChannelDetail;
