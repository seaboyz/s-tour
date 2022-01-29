import './header.styles.scss';
import Logo from '../logo/logo.conponent';
import NavBar from '../navbar/navbar.component';

const Header = () => (
	<div className='header'>
		<Logo />
		<NavBar />
	</div>
);

export default Header;
