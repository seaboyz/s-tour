import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/shared/logo.svg';
import NavBar from '../navbar/navbar.component';

const Header = () => (
	<div>
		<Logo />
		<NavBar />
	</div>
);

export default Header;
