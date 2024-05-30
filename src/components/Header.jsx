import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const actualNbOFItem = useSelector(
    (state) => state.shops.filter((item) => item.status === "to buy").length
  );
  return (
    <header>
      <h5>Nombre de produits à acheter : {actualNbOFItem}</h5>
    </header>
  );
}

export default Header;
