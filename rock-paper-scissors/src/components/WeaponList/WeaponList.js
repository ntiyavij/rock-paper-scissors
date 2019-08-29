import React from 'react';
import './weaponlist.css';
import Weapon from '../Weapon/Weapon';
import Button from '../../ui/Button';

const WeaponList = ({ weapons, onClickWeapon }) => (
	<div className="WeaponList">
		<ul>
			{weapons.map(weapon => (
				<li key={weapon}>
					<Button
						onClick={() => onClickWeapon(weapon)}
					>
						<Weapon
							icon={weapon}
						/>
					</Button>
				</li>
			))}
		</ul>
		<span className="label">CHOOSE A WEAPON</span>
	</div>
);

export default WeaponList;
