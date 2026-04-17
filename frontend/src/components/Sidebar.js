export default function Sidebar({ setFilters }) {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <input placeholder="Search jewelry..." onChange={e =>
        setFilters(f => ({ ...f, search: e.target.value }))
      } />

      <h4>Category</h4>
      <select onChange={e =>
        setFilters(f => ({ ...f, category: e.target.value }))
      }>
        <option value="">All Categories</option>
        <option>Chains</option>
        <option>Bracelets</option>
        <option>Necklaces</option>
        <option>Earrings</option>
      </select>

      <h4>Sort</h4>
      <select onChange={e =>
        setFilters(f => ({ ...f, sort: e.target.value }))
      }>
        <option value="">Default</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
        <option value="latest">Latest</option>
      </select>

      <h4>Price Range</h4>
      <input 
        type="number" 
        placeholder="Min ₹0" 
        onChange={e => setFilters(f => ({ ...f, minPrice: +e.target.value || 0 }))}
      />
      <input 
        type="number" 
        placeholder="Max ₹50000" 
        onChange={e => setFilters(f => ({ ...f, maxPrice: +e.target.value || Infinity }))}
      />
    </div>
  );
}
