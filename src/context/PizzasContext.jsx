import { createContext, useState, useEffect } from "react"

 const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [carrito ,setCarito] = useState([])

  const url = "./pizzas.json"

  const getPizzas = async () => {
    const res = await fetch(url)
    const pizzas = await res.json()
    setPizzas(pizzas)
  }

  useEffect(() => {
    getPizzas();
  }, []);


  const addCarrito = ({ id, price, name, img }) => {
    const pizzaIndex = carrito.findIndex((p) => p.id === id);
    const product = { id, price, name, img, count: 1 };
    if (pizzaIndex >= 0) {
      carrito [pizzaIndex].count++;
      setCarito([...carrito]);
    } else {
      setCarito([...carrito, product]);
    }
  }

  return (
    <PizzasContext.Provider value={{pizzas, carrito, setCarito, addCarrito}}>
      {children}
    </PizzasContext.Provider>
  )
}
export { PizzasProvider }

export default PizzasContext