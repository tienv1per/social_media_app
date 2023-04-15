import React from 'react';
import "./Posts.css";
import {PostsData} from "../../Data/PostsData";

const Posts = () => {
	return (
		<div className='Posts'>
			{PostsData.map((post, index) => {
				return <Posts data={post} id={index}/>
			})}
		</div>
	)
}

export default Posts