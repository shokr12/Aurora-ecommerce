import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="page-enter container" style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Your Cart</h2>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <ShoppingBag size={64} color="var(--text-secondary)" style={{ marginBottom: '1rem', opacity: 0.5 }} />
          <h3 className="heading-md" style={{ marginBottom: '1rem' }}>Your cart is empty</h3>
          <p className="text-body" style={{ marginBottom: '2rem' }}>Looks like you haven't added anything to your cart yet.</p>
          <button className="btn btn-primary" onClick={() => navigate('/products')}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="cart-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '3rem' }}>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '1.5rem', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '12px' }} />
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem' }}>{item.name}</h4>
                  <p className="text-body" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>${item.price}</p>
                  <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: 'var(--accent)', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 500 }}>Remove</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-secondary)', padding: '0.5rem', borderRadius: '8px' }}>
                  <button onClick={() => updateQuantity(item.id, -1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--text-primary)' }}>-</button>
                  <span style={{ fontWeight: 600, width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: 'var(--text-primary)' }}>+</button>
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.2rem', minWidth: '80px', textAlign: 'right' }}>
                  ${item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary" style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span className="text-body">Subtotal</span>
              <span style={{ fontWeight: 600 }}>${cartTotal}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span className="text-body">Shipping</span>
              <span style={{ fontWeight: 600 }}>Free</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '1rem', marginBottom: '2rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Total</span>
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent)' }}>${cartTotal}</span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigate('/checkout')}>
              Proceed to Checkout <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
