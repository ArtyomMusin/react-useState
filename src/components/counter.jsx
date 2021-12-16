import React from "react"

const Counter = (props) => {
    const {value} = props

    const formatValue = () => value !== 0 ? value: "empty"

    const getBageClasses = () => {
        let classes = "badge m-2 " 
        classes += value !== 0 ? "bg-primary" : "bg-warning"
        return classes
    }
    
    const handleIcrement = () => {
        const value = props.value+1
        props.onIncrement(value, props.id)
    }

    const handleDecrement = () => {
        const value = props.value > 0 ? props.value-1 : 0
        props.onDecrement(value, props.id)
    }

    return(
        <div>  
            <span>{props.name}</span> 
            <span className = {getBageClasses()}>{formatValue()}</span>
            <button className = "btn btn-primary btn-sm m-2" onClick = {handleIcrement}>+</button>
            <button className = "btn btn-primary btn-sm m-2" onClick = {handleDecrement}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )    
} 

export default Counter