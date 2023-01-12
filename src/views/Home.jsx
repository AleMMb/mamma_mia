import Card from "../components/Card"

function Home(){
    return(
        <div>
            <header>
                <h1 className="tile">¡Pizzería Mamma Mía!</h1>
                <div className="subtitle">
                    <p>Tenemos las mejores pizzas que podrás encontrar</p>
                </div>
            </header>
            <div>
                <h3 className="lista_pizza">Elige la tuya!</h3>
                <Card />
            </div>
        </div>
    )
}export default Home