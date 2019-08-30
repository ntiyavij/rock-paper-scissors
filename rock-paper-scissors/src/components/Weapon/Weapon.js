import React from 'react';

import   './weapon.css';
import Loading from '../../ui/Loading';


const Weapon = ({ icon, loading }) => (
	<span
		className={!loading && icon ? `Weapon fa fa-hand-${icon}-o` : ' Weapon empty'}
	>
		{!loading && !icon && '?'}
		{loading && <Loading />}
	</span>
);


export default Weapon;
