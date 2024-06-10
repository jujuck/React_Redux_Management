import ShoppingForm from "./ShoppingForm";
import "./ToDos.css";

const shoppingList = [
  {
    id: 1,
    product: "Lait",
    brand: "Lactel",
    quantity: 2,
    store: "Carrefour",
    status: "to buy",
  },
  {
    id: 2,
    product: "Pain",
    brand: "Boulangerie Paul",
    quantity: 3,
    store: "Auchan",
    status: "done",
  },
  {
    id: 3,
    product: "Pâtes",
    brand: "Barilla",
    quantity: 5,
    store: "Leclerc",
    status: "to buy",
  },
  {
    id: 4,
    product: "Yaourt",
    brand: "Yoplait",
    quantity: 6,
    store: "Carrefour",
    status: "cancelled",
  },
  {
    id: 5,
    product: "Beurre",
    brand: "Président",
    quantity: 1,
    store: "Auchan",
    status: "done",
  },
  {
    id: 6,
    product: "Eau",
    brand: "Evian",
    quantity: 4,
    store: "Leclerc",
    status: "to buy",
  },
  {
    id: 7,
    product: "Jus d'orange",
    brand: "Tropicana",
    quantity: 2,
    store: "Carrefour",
    status: "done",
  },
  {
    id: 8,
    product: "Fromage",
    brand: "Babybel",
    quantity: 10,
    store: "Auchan",
    status: "to buy",
  },
];

function ToDos() {
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
                  onChange={(event) => console.log(event.target.value)}
                />
              </td>
              <td>{item.store}</td>
              <td>
                <select
                  name="status"
                  onChange={(event) => console.log(event.target.value)}
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
