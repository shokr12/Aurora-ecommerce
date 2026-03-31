import React, { useContext, useState, useEffect, useMemo } from 'react';
import { ShoppingBag, Loader2 } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(AppContext);
  const [addedItems, setAddedItems] = useState({});
  const navigate = useNavigate();

  // Filter and Sort States
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState(1000);
  const [sizeFilter, setSizeFilter] = useState('All');
  const [sortBy, setSortBy] = useState('none');

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedItems({ ...addedItems, [product.id]: true });
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  // Derive filter categories and sizes dynamically from the products payload
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const allSizes = ['All', ...new Set(products.flatMap(p => p.sizes || []))];

  // Memoized application of filters and sorting algorithms
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    if (sizeFilter !== 'All') {
      result = result.filter(p => p.sizes && p.sizes.includes(sizeFilter));
    }

    result = result.filter(p => Number(p.price) <= Number(priceFilter));

    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'size') {
      result.sort((a, b) => {
        const sizeA = a.sizes && a.sizes.length > 0 ? a.sizes[0] : '';
        const sizeB = b.sizes && b.sizes.length > 0 ? b.sizes[0] : '';
        return sizeA.localeCompare(sizeB);
      });
    }

    return result;
  }, [products, categoryFilter, priceFilter, sizeFilter, sortBy]);

  // Extract the latest 3 arrivals based on their ID
  const latestArrivals = products.slice(-3);

  return (
    <div className="page-enter" style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      
      {/* 1. LATEST ARRIVALS SECTION */}
      <section className="container" style={{ marginBottom: '6rem' }}>
         <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h2 className="heading-lg">Latest Arrivals</h2>
          <p className="text-body" style={{ marginTop: '0.5rem' }}>The newest additions to our carefully curated collection.</p>
        </div>
        
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem 0' }}>
            <Loader2 className="animate-spin" size={48} color="var(--accent)" />
          </div>
        ) : (
          <div className="products-grid">
            {latestArrivals.map(product => (
              <div key={`latest-${product.id}`} className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--text-primary)', color: 'var(--bg-primary)', padding: '5px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, zIndex: 10 }}>NEW</div>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-category">{product.category}</div>
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <span className="product-price">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 2. ALL PRODUCTS WITH FILTERS SECTION */}
      <section className="container" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '5rem' }}>
        <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'left' }}>
          <h2 className="heading-lg">All Products</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '4rem' }}>
          
          {/* SIDEBAR WIDGETS */}
          <aside style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
            
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Category</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {categories.map(cat => (
                  <label key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="radio" value={cat} checked={categoryFilter === cat} onChange={() => setCategoryFilter(cat)} style={{ accentColor: 'var(--accent)' }}/>
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Size</h4>
              <select className="form-control" value={sizeFilter} onChange={(e) => setSizeFilter(e.target.value)}>
                {allSizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Max Price: ${priceFilter}</h4>
              <input type="range" min="0" max="1000" step="10" value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} style={{ width: '100%', accentColor: 'var(--accent)' }} />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ fontWeight: 700, marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>Sort By</h4>
              <select className="form-control" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="none">Recommended</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="size">Size</option>
              </select>
            </div>
            
            <button className="btn btn-outline" style={{width: '100%'}} onClick={() => { setCategoryFilter('All'); setSizeFilter('All'); setPriceFilter(1000); setSortBy('none'); }}>Clear Filters</button>
          
          </aside>

          {/* DYNAMIC PRODUCTS GRID */}
          <div>
            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '5rem 0' }}>
                <Loader2 className="animate-spin" size={48} color="var(--accent)" />
              </div>
            ) : filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', margin: '5rem 0' }}>
                <h3 className="heading-md" style={{ marginBottom: '1rem' }}>No products found</h3>
                <p className="text-body">Try adjusting your filters to see more results.</p>
              </div>
            ) : (
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <div key={`all-${product.id}`} className="product-card" onClick={() => navigate(`/products/${product.id}`)}>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-category">{product.category}</div>
                    <div className="product-info">
                      <h3 className="product-title">{product.name}</h3>
                      <span className="product-price">${product.price}</span>
                    </div>
                    <button 
                      className="product-add-btn" 
                      onClick={(e) => { e.stopPropagation(); handleAddToCart(product); }}
                      style={{ background: addedItems[product.id] ? 'var(--accent)' : '', color: addedItems[product.id] ? 'white' : '' }}
                    >
                      <ShoppingBag size={18} /> {addedItems[product.id] ? 'Added!' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Products;
