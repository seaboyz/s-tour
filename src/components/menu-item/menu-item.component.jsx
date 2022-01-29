import { Link } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({ children }) => (
	<Link className='menu-item' to={children === 'home' ? '/' : children}>
		<span aria-hidden='true'>{children.substring(0, 3)}</span>
		{children.substring(3)}
	</Link>
);

export default MenuItem;
