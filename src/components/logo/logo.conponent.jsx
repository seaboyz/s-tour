import './logo.styles.scss';
import logo from '../../assets/shared/logo.svg';
import { Link, Outlet } from 'react-router-dom';

const Logo = () => (
	<div className='logo'>
		<Link to='/'>
			<img src={logo} alt='logo' />
		</Link>
	</div>
);

export default Logo;
