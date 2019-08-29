import React from 'react';

import   './weapon.css';
import Loading from '../../ui/Loading';


const Weapon = ({ icon, loading }) => (
	<span
		className={!loading && icon ? `fa fa-hand-${icon}-o Weapon` : ' Weapon empty'}
	>
		{!loading && !icon && '?'}
		{loading && <Loading />}
	</span>
);


export default Weapon;
