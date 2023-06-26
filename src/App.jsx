import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import NavBar from './components/NavBar'
import VideoDetail from './components/VideoDetail'
import SearchFeed from './components/SearchFeed'
import ChannelDetail from './components/ChannelDetail'
import Feed from './components/Feed'
const App = () => {
  return (
  <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
    <NavBar/>
      <Routes>
        <Route path='/' exact element={<Feed/>}></Route>
        <Route path='/video/:id'  element={<VideoDetail/>}></Route>
        <Route path='/channel/:id'  element={<ChannelDetail/>}></Route>
        <Route path='/search/:searchTerm'  element={<SearchFeed/>}></Route>
      </Routes>
    </Box>
  </BrowserRouter>
  )
}

export default App