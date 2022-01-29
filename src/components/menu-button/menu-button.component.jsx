import './menu-button.styles.scss';

const MenuButton = ({ handleClick, expand }) => {
	return (
		<div
			onClick={handleClick}
			className='menu-btn'
			aria-controls='primary-navigation'
			aria-expanded={expand}
		>
			<span className='sr-only'>Menu</span>
		</div>
	);
};

export default MenuButton;
