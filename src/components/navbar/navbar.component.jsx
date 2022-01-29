import './navbar.styles.scss';
import MenuButton from '../menu-button/menu-button.component';
import { useState } from 'react';

const NavBar = () => {
	const [expand, setExpand] = useState(false);

	const handleClick = () => {
		setExpand(!expand);
	};

	return (
		<div>
			<MenuButton expand={expand} handleClick={handleClick} />
			<nav>
				<ul
					id='primary-navigation'
					data-visible={expand}
					className='primary-navigation flex'
				>
					<li>
						<a className='underline' href='index.html'>
							<span aria-hidden='true'>00</span>home
						</a>
					</li>
					<li>
						<a className='underline' href='destination-moon.html'>
							<span aria-hidden='true'>01</span>destination
						</a>
					</li>
					<li>
						<a className='underline' href='crew-commander.html'>
							<span aria-hidden='true'>02</span>crew
						</a>
					</li>
					<li>
						<a className='underline' href='technology-vehicle.html'>
							<span aria-hidden='true'>03</span>technology
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
