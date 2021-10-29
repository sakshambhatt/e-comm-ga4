export const Filter = (value) => {
  const { productsDispatch, showFastDelivery } = value.value;
  return (
    <fieldset className="center">
      <legend>filter: </legend>
      <label>
        category:{" "}
        <select
          name="filter"
          onChange={(e) =>
            productsDispatch({ type: "FILTER", payload: e.target.value })
          }
        >
          <option value="NONE">none</option>
          <option value="SHOW_CASUAL">casual</option>
          <option value="SHOW_FORMAL">formal</option>
          <option value="SHOW_SPORTS">sports</option>
        </select>
      </label>
      &nbsp;
      <label>
        <input
          type="checkbox"
          name="filter"
          onChange={() =>
            productsDispatch({
              type: "FILTER",
              payload: "SHOW_FAST_DELIVERY"
            })
          }
          checked={showFastDelivery && showFastDelivery === true}
        />{" "}
        fast shipping
      </label>
    </fieldset>
  );
};
