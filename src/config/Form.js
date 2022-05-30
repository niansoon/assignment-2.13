import React, { useState } from "react";

function Form() {
    const [food, setFood] = useState({
        product: null,
        price: null
    });

    //Defining empty array
    const [list, setList] = useState([])

    //Updating state of list to food
    const Submit = (e) => {
        e.preventDefault();
        setList(any => [...any, food]);
    }

    //Specifics is which object
    const Input = (e) => {
        e.preventDefault();
        const type = e.target.name;
        const data = {...food};

    switch(type){
        case "product":
            data.product = e.target.value;
            break;
        case "price":
            data.price = e.target.value;
            break;
    }
    setFood(data);
    };

    return(
        <form onSubmit={Submit}>
            <input type="text" placeholder="product" name="product" onChange={Input} />
            <input type="text" placeholder="price" name="price" onChange={Input} />
            <button>Add</button>

            <ul>
                {list.map((food) => {
                    return <li key={food.id}> {food.product}, {food.price}</li>
                })}
            </ul>
        </form>
    );
}

export default Form;