import { createContext, useState, useEffect } from "react";

const PizzasContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);


    useEffect(() => {
        getPizzas();
      }, []);
  };

  return (
    <PizzasContext.Provider value={{pizzas}}>
      {children}
    </PizzasContext.Provider>
  );
};

export { PizzasProvider };

export default PizzasContext