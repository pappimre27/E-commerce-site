import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import './Header.scss';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				{
					currentUser ? <div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div> :
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>}
				<CartIcon />
			</div>
			{!hidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
	hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
