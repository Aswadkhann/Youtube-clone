import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Box} from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import {fetchAPI} from '../utils/fetchAPI'
import { Height } from '@mui/icons-material'
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams()
  console.log(channelDetail)
  console.log(videos)
  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then((data)=>(setChannelDetail(data?.items[0])))
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>(setVideos(data?.items)))
  }, [id])
  
  return (
    <Box minHeight='95vh'>
    <Box>
      <div
        style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 32%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height:'300px'
        }}
      />
      <ChannelCard channelDetail={channelDetail} marginTop='-92px'/>
    </Box>
    <Box display='flex' p='2'>
      <Box sx={{mr:{sm:'30px',}}}/>
          <Videos videos={videos}/>
     
    </Box>
    </Box>
  )
}

export default ChannelDetail