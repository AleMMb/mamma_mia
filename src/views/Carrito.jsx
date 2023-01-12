import { useContext } from "react";
import PizzasContext from "../context/PizzasContext";
import { Link } from "react-router-dom";

function Carrito() {
  const { carrito } = useContext(PizzasContext);
  const total = carrito.reduce((a, { count, price }) => a + price * count, 0);

  

  return (
    <div>
      <h1 className="titulo_carrito">Mi carrito de compras</h1>
      <div>
        <h4 className="subtitulo_carrito">Detalles del pedido: </h4>
        <div className="lista_compra">
          {carrito.map((product, i) => (
            <div className="detalle_compra" key={i}>
              <img src={product.img} alt="pizza" />
              <h3>{product.name}</h3>

              <div>
                <h3>${product.price * product.count}</h3>
                <b>Cantidad: {product.count}</b>
              </div>
            </div>
          ))}
          <h2>Total: ${total}</h2>
          <div className="botones_carrito">
            <button className="button">Ir a Pagar</button>
            <Link to="/">
              <button className="button">seguir comprando</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Carrito;
