import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useContext(AppContext);
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 4000);
  };

  if (isSuccess) {
    return (
      <div className="page-enter container" style={{ paddingTop: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: '80vh' }}>
        <CheckCircle size={80} color="var(--accent)" style={{ marginBottom: '2rem' }} />
        <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>Order Confirmed!</h2>
        <p className="text-body" style={{ maxWidth: '500px', marginBottom: '2rem' }}>
          Thank you for your purchase. We've received your order and will begin processing it right away. You'll receive a confirmation email shortly.
        </p>
        <button className="btn btn-outline" onClick={() => navigate('/products')}>Continue Shopping</button>
      </div>
    );
  }

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="page-enter container" style={{ paddingTop: '120px', paddingBottom: '5rem' }}>
      <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>Checkout</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '4rem' }}>
        <div>
          <form id="checkout-form" onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Shipping Information</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label>Email Address</label>
              <input type="email" className="form-control" required />
            </div>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label>Street Address</label>
              <input type="text" className="form-control" required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>State</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>ZIP</label>
                <input type="text" className="form-control" required />
              </div>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Payment Method</h3>
            <div className="form-group" style={{ marginBottom: '1rem' }}>
              <label>Card Number</label>
              <input type="text" className="form-control" placeholder="0000 0000 0000 0000" pattern="\d*" maxLength="16" required />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="text" className="form-control" placeholder="MM/YY" required />
              </div>
              <div className="form-group">
                <label>CVC</label>
                <input type="text" className="form-control" placeholder="123" maxLength="4" required />
              </div>
            </div>
          </form>
        </div>

        <div>
          <div style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>In Your Cart</h3>
            <div style={{ marginBottom: '2rem' }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ position: 'relative' }}>
                      <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                      <span style={{ position: 'absolute', top: '-5px', right: '-5px', background: 'var(--accent)', color: 'white', fontSize: '0.7rem', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>{item.quantity}</span>
                    </div>
                    <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item.name}</span>
                  </div>
                  <span style={{ fontWeight: 600 }}>${item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="text-body">Total</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>${cartTotal}</span>
              </div>
              <button type="submit" form="checkout-form" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Pay ${cartTotal}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
