import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  NavBar,
  Feed,
  VideoDetail,
  SearchFeed,
  ChannelDetail,
} from './Components';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
          <NavBar />
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTeam' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
