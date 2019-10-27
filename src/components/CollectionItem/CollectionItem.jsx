import React from 'react';
import CustomButton from '../custom-buttom/custom-buttom';
import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton inverted> ADD to cart </CustomButton>
    </div>
  );
};

export default CollectionItem;
