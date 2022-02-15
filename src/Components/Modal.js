import "./Modal.css";
const Modal = () => {
  return (
    <div>
      <div className=" customerBox">
        <form>
          <label className="customerName" for="desc">
            fullName
          </label>

          <br />
          <input className="name" type="text" placeholder="Name" />
          <br />
          <button>Cancel</button>
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
