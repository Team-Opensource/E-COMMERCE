import { useContext } from 'react';
import { CartContext } from './Context/CartContext';

const CartCounter = () => {
const { cart } = useContext(CartContext);

return (
<div>
<div className='counter'>{cart.length}</div>
</div>
);
};

export default CartCounter

/*
{cart.map(item => (
<p key={item.id}>
{item.title} ({item.price})
</p>
))}*/