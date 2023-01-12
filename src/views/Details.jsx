import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PizzasContext from "../context/PizzasContext";

function Details() {
  const { pizzas, addCarrito } = useContext(PizzasContext);
  const [pizza, setPizza] = useState(undefined);

  const { id } = useParams();

  function getPizza() {
    const res = pizzas.filter((e) => e.id === id);
    setPizza(res);
  }

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <section className="section_detalle">
      {pizza ? (
        <div className="card_container" key={pizza[0].id}>
          <div className="img_detalle">
            <img src={pizza[0].img} alt={pizza.name} />
          </div>
          <div className="info_detalles">
            <div >
              <h4 className="name-detalles">{pizza[0].name}</h4>
              <p>{pizza[0].desc}</p>
              <p>
                <b>Ingredientes:</b>
              </p>

              <ul>
                {pizza[0].ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div>
              <div>
                <h2>Precio $ {pizza[0].price}</h2>
              </div>
              <div>
                <button className="button"
                onClick={() => addCarrito(pizza[0])}>Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
    </section>
  );
}
export default Details;
