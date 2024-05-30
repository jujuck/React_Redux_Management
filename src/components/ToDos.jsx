import { useSelector, useDispatch } from "react-redux";
import ShoppingForm from "./ShoppingForm";
import "./ToDos.css";
import { quantity, status } from "../redux/actions";

function ToDos() {
  const shoppingList = useSelector((state) => state.shops);
  const dispatch = useDispatch();

  return (
    <main className="container">
      <h1>Ma liste de course</h1>
      <ShoppingForm />
      <table>
        <thead>
          <tr>
            <th>Produit</th>
            <th>Marque</th>
            <th>Quantité</th>
            <th>Magasin</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item, index) => (
            <tr key={item.id} className={index % 2 === 0 ? "light" : "grey"}>
              <td>{item.product}</td>
              <td>{item.brand}</td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(event) =>
                    dispatch(quantity({ index, quantity: event.target.value }))
                  }
                />
              </td>
              <td>{item.store}</td>
              <td>
                <select
                  name="status"
                  onChange={(event) =>
                    dispatch(status({ index, status: event.target.value }))
                  }
                  value={item.status}
                >
                  <option value="to buy">A acheter</option>
                  <option value="done">Acheté</option>
                  <option value="cancelled">Annulé</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default ToDos;
