import React from 'react';
import './home.css';
import ProfieSide from '../../components/profileSide/ProfieSide';

const Home = () => {
  return (
    <div className='Home'>
        <ProfieSide />
        <div className='postSide'>Posts</div>
        <div className='rightSide'>Rightside</div>
    </div>
  )
}

export default Home