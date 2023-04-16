import React from 'react';
import './home.css';
import ProfieSide from '../../components/profileSide/ProfieSide';
import PostSide from '../../components/PostSide/PostSide';
import RightSide from '../../components/RightSide/RightSide';

const Home = () => {
  return (
    <div className='Home'>
        <ProfieSide />
        <PostSide/>
        <RightSide />
    </div>
  )
}

export default Home