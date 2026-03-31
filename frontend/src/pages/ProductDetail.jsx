import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ShoppingBag, ArrowLeft, Star, Heart, Share2, Shield, Truck, RefreshCw, Loader2 } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(AppContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product:', err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) {
    return (
      <div className="page-enter container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Loader2 className="animate-spin" size={48} color="var(--accent)" />
      </div>
    );
  }

  if (!product || product.error) {
    return (
      <div className="page-enter container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '80vh' }}>
        <h2 className="heading-md" style={{ marginBottom: '1rem' }}>Product Not Found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/products')}>Back to Collection</button>
      </div>
    );
  }

  return (
    <div className="page-enter container" style={{ paddingTop: '120px', paddingBottom: '8rem' }}>
      <button className="btn-icon" onClick={() => navigate(-1)} style={{ marginBottom: '2rem', padding: '0.5rem 1rem' }}>
        <ArrowLeft size={20} /> <span style={{ marginLeft: '8px', fontWeight: 600 }}>Back</span>
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        <div>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
            <img src={product.image} alt="Thumbnail 1" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '12px', cursor: 'pointer', opacity: 1, border: '2px solid var(--accent)' }} />
            <img src={product.image} alt="Thumbnail 2" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '12px', cursor: 'pointer', opacity: 0.6 }} />
            <img src={product.image} alt="Thumbnail 3" style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '12px', cursor: 'pointer', opacity: 0.6 }} />
          </div>
        </div>
        
        <div style={{ padding: '1rem 0' }}>
          <div style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            {product.category}
          </div>
          <h1 className="heading-lg" style={{ marginBottom: '1rem', lineHeight: 1.1 }}>{product.name}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)' }}>${product.price}</span>
            <div style={{ display: 'flex', alignItems: 'center', color: '#f59e0b', background: 'var(--bg-secondary)', padding: '0.5rem 1rem', borderRadius: '50px' }}>
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <span style={{ color: 'var(--text-primary)', marginLeft: '8px', fontSize: '0.9rem', fontWeight: 600 }}>(128)</span>
            </div>
          </div>

          <p className="text-body" style={{ marginBottom: '2.5rem', fontSize: '1.15rem', lineHeight: 1.8 }}>
            {product.description} Expertly crafted to ensure durability and style. Perfect for everyday use with premium materials that stand the test of time.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '3.5rem' }}>
            <button 
              className="btn btn-primary" 
              style={{ flex: 1, padding: '1.25rem', fontSize: '1.1rem', background: added ? 'var(--accent)' : '', color: added ? 'white' : '' }}
              onClick={handleAddToCart}
            >
              <ShoppingBag size={20} /> {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>
            <button className="btn btn-outline" style={{ padding: '0 1.5rem' }}>
              <Heart size={20} />
            </button>
            <button className="btn btn-outline" style={{ padding: '0 1.5rem' }}>
              <Share2 size={20} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--text-primary)' }}><Truck size={24} /></div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>Free Global Delivery</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Arrives in 2-3 business days fully tracked.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--text-primary)' }}><RefreshCw size={24} /></div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>30-Day Returns</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Not satisfied? Return it seamlessly online.</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '50%', color: 'var(--text-primary)' }}><Shield size={24} /></div>
              <div>
                <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>2-Year Warranty</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Guaranteed quality on every purchase.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
