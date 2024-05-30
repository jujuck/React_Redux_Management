import { useState } from "react";
import { useDispatch } from "react-redux";
import { quantity } from "../redux/actions";
import "./ShoppingForm.css";

function ShoppingForm() {
  const dispatch = useDispatch();
  const [shop, setShop] = useState({
    product: "",
    brand: "",
    quantity: 0,
    store: "",
    status: "to buy",
  });

  const handleShop = (event) => {
    setShop((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSub = (e) => {
    e.preventDefault();
    dispatch(quantity(shop));
  };

  return (
    <section>
      <form onSubmit={onSub}>
        <label>
          Nom du produit
          <input
            required
            type="text"
            onChange={handleShop}
            name="product"
            value={shop.product}
          />
        </label>
        <label>
          Marque
          <input
            required
            type="text"
            onChange={handleShop}
            name="brand"
            value={shop.brand}
          />
        </label>
        <label>
          Quantité
          <input
            required
            min={1}
            type="number"
            onChange={handleShop}
            name="quantity"
            value={shop.quantity}
          />
        </label>
        <label>
          Magasin
          <input
            required
            type="text"
            onChange={handleShop}
            name="store"
            value={shop.store}
          />
        </label>
        <label>
          Statut
          <select
            value={shop.status}
            onChange={handleShop}
            name="status"
            required
          >
            <option value="to buy">A acheter</option>
            <option value="done">Acheté</option>
            <option value="cancelled">Annulé</option>
          </select>
        </label>
        <button type="submit">Valider</button>
      </form>
    </section>
  );
}

export default ShoppingForm;
