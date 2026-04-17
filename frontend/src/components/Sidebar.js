export default function Sidebar({ setFilters }) {
  return (
    <div className="sidebar">
      <input placeholder="Search..." onChange={e =>
        setFilters(f => ({ ...f, search: e.target.value }))
      } />

      <select onChange={e =>
        setFilters(f => ({ ...f, category: e.target.value }))
      }>
        <option value="">All</option>
        <option>Chains</option>
        <option>Bracelets</option>
        <option>Necklaces</option>
        <option>Earrings</option>
      </select>

      <select onChange={e =>
        setFilters(f => ({ ...f, sort: e.target.value }))
      }>
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </div>
  );
}