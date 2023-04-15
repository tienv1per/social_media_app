import React from 'react';
import "./TrendCard.css";
import {TrendData} from "../../Data/TrendData";

const TrendCard = () => {
	return (
		<div className='TrendCard'>
			<h3>Trends For You</h3>
			{TrendData.map((trend, index) => {
				return (
					<div className='trend' key={index}>
						<span>#{trend.name}</span>
						<span>{trend.shares}k shares</span>
					</div>
				)
			})}
		</div>
	)
}

export default TrendCard