import React from 'react';
import './home.css';
import ProfieSide from '../../components/profileSide/ProfieSide';
import PostSide from '../../components/PostSide/PostSide';

const Home = () => {
  return (
    <div className='Home'>
        <ProfieSide />
        <PostSide/>
        <div className='rightSide'>Rightside</div>
    </div>
  )
}

export default Home