import "./InputFields.css";

const InputFields = () => {
  return (
    <div className="inputBox">
      <form>
        <label className="desc" for="desc">
          Description{" "}
        </label>
        <input
          className="descInput"
          type="text"
          name="desc"
          placeholder="Description.."
        />

        <label className="quantity" for="quantity">
          Quantity
        </label>
        <input
          className="quant"
          type="text"
          name="quantity"
          placeholder="quantity"
        />
        <br />
        <label className="dt" for="date">
          Date
        </label>
        <input className="dtInput" type="date" name="date" />
        <label className="price" for="price">
          Price
        </label>
        <input
          className="priceInput"
          type="number"
          placeholder="Price.."
          name="price"
        />
        <br />
        <button className="add">Add</button>
      </form>
    </div>
  );
};

export default InputFields;
