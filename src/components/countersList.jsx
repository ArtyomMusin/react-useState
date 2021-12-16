import React, {useState} from "react"
import Counter from "./counter"

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name: "Ненужная вещь"}, 
        {id:1, value:4, name: "Ложка"}, 
        {id:2, value:0, name: "Вилка"},
        {id:3, value:0, name: "Тарелка"}, 
        {id:4, value:0, name: "Набор минималиста"}
    ]

    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const refreshValues = (value, id) => {
        setCounters(prevState => prevState.map(counter => {
            if (counter.id === id) {
                counter.value = value
            }
            return counter
        }))
    }    

    return (
        <>
            {counters.map(count => <Counter key={count.id} onDelete = {handleDelete} {...count} onIncrement={refreshValues} onDecrement={refreshValues}/>)}    
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>    
        </>
    )
}   
export default CountersList