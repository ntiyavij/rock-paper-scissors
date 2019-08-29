import React from 'react';
import './player.css';
import Weapon from '../../../Weapon/Weapon';



const Player = ({ label, weapon, loading, score }) => (
	<div className="Player">
		<div>
			<span className="label">{label}</span>
		</div>
		<Weapon
			icon={weapon}
			loading={loading}
		/>
		<div>
			<span className="score">{score} PT{score > 1 && 'S'}</span>
		</div>
	</div>
);

export default Player;
