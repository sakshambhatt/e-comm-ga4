export const Sort = (value) => {
  const { productsDispatch } = value.value;
  return (
    <div className="center">
      <label>
        sort by:{" "}
        <select
          name="sort"
          onChange={(e) =>
            productsDispatch({
              type: "SORT",
              payload: e.target.value
            })
          }
        >
          <option value="NONE">none</option>
          <option value="PRICE_LOW_TO_HIGH">price - low to high</option>
          <option value="PRICE_HIGH_TO_LOW">price - high to low</option>
          <option value="RATING_HIGH_TO_LOW">rating - high to low</option>
        </select>
      </label>
    </div>
  );
};
