import './menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

const Menu = ({ expand }) => (
	<nav>
		<ul data-visible={expand} className='menu'>
			<MenuItem>00 home</MenuItem>
			<MenuItem>01 destination</MenuItem>
			<MenuItem>02 crew</MenuItem>
			<MenuItem>03 techology</MenuItem>
		</ul>
	</nav>
);

export default Menu;
