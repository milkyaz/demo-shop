import Box from "@mui/material/Box";

function Filter({ category, handleCategoryChange, goods }) {
  return (
    <div>
      <div className="filter-panel">
        <div className="filter-panel__text">
          <h3 className="filter-panel__text-title">Категории товаров</h3>
          <h3 className="filter-panel__text-right">Настройки</h3>
        </div>
        <hr />
      </div>
      <select
        name="filter"
        value={category}
        onChange={(event) => handleCategoryChange(event.target.value)}
      >
        <option value="All">All</option>
        <option value="audio">Audio</option>
        <option value="gaming">Gaming</option>
        <option value="mobile">Mobile</option>
      </select>
    </div>
  );
}

export default Filter;
