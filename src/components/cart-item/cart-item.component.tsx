import { type } from '@testing-library/user-event/dist/type';
import { FC } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types';
import { CartItemContainer, ItemDetails, Name, Price } from './cart-item.styles';

type CartItemProps = {
    cartItem: TCartItem;
}


const CartItem: FC<CartItemProps> = ({ cartItem })=> {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <Name>{name}</Name>
                <Price>{quantity} x ${price} </Price>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;