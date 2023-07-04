import "./style.scss";

export const FilterSelector = ({ title, options, value, setValue }) => {
  return (
    <div className="wrapper">
      <label htmlFor="filter" className="wrapper-title">
        {title}
      </label>

      <select
        className="wrapper-select"
        name="filter"
        id="filter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((item) => (
          <option key={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};
