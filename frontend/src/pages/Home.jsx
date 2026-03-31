import React from 'react';
import { ArrowRight, Star, Shield, Zap, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      {/* Hero Section */}
      <section className="hero container">
        <div className="hero-content">
          <h1 className="heading-xl">Redefining <br/>Modern Comfort.</h1>
          <p className="text-body">
            Discover our curated collection of premium essentials designed to elevate your everyday lifestyle with uncompromising quality.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={() => navigate('/products')}>
              Explore Collection <ArrowRight size={20} />
            </button>
            <button className="btn btn-outline" onClick={() => navigate('/story')}>
              Our Story
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-decoration"></div>
          <img 
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Modern Lifestyle" 
          />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container" style={{ padding: '8rem 5%' }}>
        <div className="section-header">
          <h2 className="heading-lg">Featured Categories</h2>
          <p className="text-body" style={{ marginTop: '1rem' }}>Everything you need, nothing you don't.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {['Accessories', 'Footwear', 'Electronics'].map((cat, idx) => (
            <div key={cat} style={{ position: 'relative', height: '350px', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate('/products')}>
              <img 
                src={`https://images.unsplash.com/photo-${['1509319117193-57bab727e09d', '1520639888713-7851133b1ed0', '1526406915894-7bcd65510266'][idx]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`} 
                alt={cat}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', alignItems: 'flex-end', padding: '2rem' }}>
                <h3 className="heading-md" style={{ color: 'white' }}>{cat}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: 'var(--bg-secondary)', padding: '8rem 0' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">The AURORA Difference</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            {[
              { icon: <Shield size={40} color="var(--accent)"/>, title: 'Premium Quality', desc: 'Crafted from the finest materials globally.' },
              { icon: <Zap size={40} color="var(--accent)"/>, title: 'Fast Delivery', desc: 'Arrives at your doorstep in 2-3 business days.' },
              { icon: <RefreshCw size={40} color="var(--accent)"/>, title: 'Easy Returns', desc: 'Not completely satisfied? Free 30-day returns.' },
              { icon: <Star size={40} color="var(--accent)"/>, title: '24/7 Support', desc: 'Our dedicated team is always here to help.' }
            ].map((feature, i) => (
              <div key={i} style={{ padding: '2rem', background: 'var(--surface)', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '50%', marginBottom: '1.5rem' }}>
                  {feature.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600 }}>{feature.title}</h4>
                <p className="text-body">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="container" style={{ padding: '8rem 5%', textAlign: 'center' }}>
        <div style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '5rem 2rem', borderRadius: '30px' }}>
          <h2 className="heading-lg" style={{ color: 'var(--bg-primary)', marginBottom: '1rem' }}>Join the Club</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.8 }}>Subscribe to our newsletter and get 15% off your first order.</p>
          <form style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }} onSubmit={(e) => { e.preventDefault(); alert('Subscribed!')}}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '1rem 1.5rem', borderRadius: '50px', border: 'none', fontSize: '1rem' }} required />
            <button type="submit" className="btn" style={{ background: 'var(--accent)', color: 'white' }}>Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
