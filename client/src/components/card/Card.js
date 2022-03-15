import './card.css'

export default function Card() {
    return (
        <div className="card-container">
            <h1>card example</h1>
            <div className="recipe-card">
            <h1>Add a recipe</h1>
            <br></br>
            <h2>Dish name:</h2>
            <input placeholder= "Enter dish name here"></input>
            <input placeholder= "Enter time to make dish here"></input>
            <div className='recipe-detail-container'>
                <h2>Ingredients:</h2>
                <input placeholder= "Enter ingredients here"></input>
                <h2>Directions:</h2>
                <input placeholder= "Enter directions here"></input>
                <h2>Upload image:</h2>
                <input placeholder= "Optional: upload image of dish here"></input>
            </div>
        </div>
        </div>
    )
}