import './navbar.styles.scss';
import MenuButton from '../menu-button/menu-button.component';
import Menu from '../menu/menu.component';
import { useState } from 'react';

const NavBar = () => {
	const [expand, setExpand] = useState(false);

	const handleClick = () => {
		setExpand(!expand);
	};

	return (
		<div>
			<MenuButton expand={expand} handleClick={handleClick} />
			<Menu expand={expand} />
		</div>
	);
};

export default NavBar;
