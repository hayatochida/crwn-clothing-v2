import { CategoryItem } from '../categories/category.types';
import { createAction, withMatcher, Action, ActionWithPayload } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES, CartItem } from "./cart.types";

export const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
    // find if cartitems contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id);

    // if found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    // return new array with modified cartItems/ new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CategoryItem): CartItem[] => {
    // find the cart item to remove
    const exisitngCartItem = cartItems.find(
        (cartitem) => cartitem.id === cartItemToRemove.id
    );
    //check id quantity is equal to 1, if it is remove that item from the cart
    if (exisitngCartItem && exisitngCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

export const clearCartItem = (cartItems: CartItem[], cartItemToClear: CategoryItem): CartItem[] => {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
};

//----------------------------------------------------------------------------------
export type SetIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>;

export type SetIsCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;


//----------------------------------------------------------------------------------
export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen =>
createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean));


export const setCartItems = withMatcher(
    (cartItems: CartItem[]): SetIsCartItems => 
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};

export const clearItemFromCart = (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
};


