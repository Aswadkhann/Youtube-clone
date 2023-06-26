import React from 'react'
import {Link} from 'react-router-dom'
import { Typography,Card,CardContent,CardMedia } from '@mui/material'
import {CheckCircle, Height} from '@mui/icons-material'
const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
const demoVideoUrl = '/video/GDa8kZLNhJ4';
const demoChannelTitle = 'JavaScript Mastery';
const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'
const VideoCard = ({video:{id:{videoId},snippet}}) => {

  return (
    <Card sx={{width:{md:'300px', sx:'100%'},boxShadow:'none',borderRadius:0}}>
        <Link to={videoId ?`/video/${videoId}`:demoVideoUrl}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt = {snippet?.title}
                sx={{width:358,height:180}}
                // component='div'
            />
            </Link>
            <CardContent
                sx={{backgroundColor:'#1e1e1e',
                height:'106px'}}
            >
            <Link to={videoId ?`/video/${videoId}`:demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight='bold' color='#fff'>
                    {snippet?.title.slice(0,40)|| demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ?`/channel/${snippet?.channelId}`:demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight='bold' color='gray'>
                    {snippet?.channelTitle|| demoVideoTitle}
                    <CheckCircle
                        sx = {{fontSize:12,color:'gray', ml:'5px'}}
                    />
                </Typography>
            </Link>
            </CardContent>
        
    </Card>
  )
}

export default VideoCard