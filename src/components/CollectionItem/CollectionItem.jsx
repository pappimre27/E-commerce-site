import React from 'react';
import CustomButton from '../custom-buttom/custom-buttom';
import { connect } from 'react-redux';
import './CollectionItem.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ collection, addItem }) => {
	const { name, price, imageUrl } = collection;
	return (
		<div className='collection-item'>
			<div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={() => addItem(collection)} inverted>
				ADD to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: collection => dispatch(addItem(collection))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
