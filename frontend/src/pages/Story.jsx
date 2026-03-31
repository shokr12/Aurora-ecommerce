import React from 'react';

const Story = () => {
  return (
    <div className="page-enter">
      <section className="story-section container">
        <div className="story-grid">
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Our Workshop" 
              style={{ borderRadius: '24px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
            />
          </div>
          <div className="story-content">
            <h2 className="heading-lg">Crafted with Purpose.</h2>
            <p className="text-body">
              AURORA. started with a simple belief: everyday objects should bring joy, not just utility. We source the finest materials from around the world to create products that stand the test of time.
            </p>
            <p className="text-body">
              Every piece in our collection is carefully selected for its design, durability, and ethical manufacturing footprint. We're on a mission to redefine modern comfort by bridging the gap between aesthetics and function.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
