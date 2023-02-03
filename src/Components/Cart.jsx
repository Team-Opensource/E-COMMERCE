import { useContext } from 'react';
import { CartContext } from './Context/CartContext';

const Cart = () => {
const { cart } = useContext(CartContext);

return (
<div>
{cart.map(item => (
<p key={item.id}>
{item.title} ({item.price})
</p>
))}
<p>Cart items: {cart.length}</p>
</div>
);
};

export default Cart