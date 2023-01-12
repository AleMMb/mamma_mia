import { useContext, useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import PizzasContext from '../context/PizzasContext'


function Details(){

    const { pizzas } = useContext(PizzasContext)
    const [pizza, setPizza] = useState(undefined)

    const { id } = useParams()

    function getPizza(){
        const res = pizzas.filter((e) => e.id === id)
          setPizza(res)
    }


    useEffect(() => {
        getPizza()
      }, [])

    return(
        <section>
            {pizza ? (
        <div >
          <div>
            <div key={pizza[0].id}>
              <div>
                <img src={pizza[0].img} alt={pizza.name} />
              </div>
              <div>
                <h4>{pizza[0].name}</h4>
                <p>{pizza[0].desc}</p>
                <p><b>Ingredientes:</b></p>

                <ul>
                  {pizza[0].ingredients.map((ingredient, i) => (
                    <li key={i}>🍕{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div>
                  <h2>Precio $ {pizza[0].price}</h2>
                </div>
                <div>
                  <button>Añadir 🛒</button>
                </div>
              </div>
              <div className='back'>
                <Link to='/'>
                  <button>
                    Volver
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
        </section>
    )
}export default Details