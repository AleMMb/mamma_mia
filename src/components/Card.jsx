import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PizzasContext from "../context/PizzasContext";

function Card() {
  const { pizzas, addCarrito } = useContext(PizzasContext);
  const navigate = useNavigate();
  /*console.log(pizzas)*/

  const aPesosChilenos = (price) => {
    return price.toLocaleString('es-CL')
  }


  return (
    <div className="container">
      {pizzas?.map((pizza) => (
        <div className="tarjeta" key={pizza.id}>
          <div className="cuerpo">
            <img className="pizza_img" src={pizza.img} alt={pizza.name} />
            <div className="nombre">
              <h3>{pizza.name}</h3>
              <p>Ingredientes:</p>
              <div className="ingredientes">
                {pizza.ingredients.map((ingredient, i) => (
                  <div key={i}>🍕{ingredient}</div>
                ))}
              </div>
            </div>
            <div className="bottom">
              <h2>$ {aPesosChilenos(pizza.price)}</h2>
              <div className="botones">
                <button
                  className="button"
                  onClick={() => navigate(`/pizza/${pizza.id}`)}>Ver Más 👀</button>
                <button className="button" onClick={() => addCarrito(pizza)}>Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Card;
