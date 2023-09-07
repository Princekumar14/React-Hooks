import React, { useReducer } from 'react'


const initialState = 0;

const reducer = (state, action) => {
    if (action.type === "INCREMENT") {
        return state + 1;

    }
    if (action.type === "DECREMENT") {
        return state - 1;

    }
    return state;

}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>
                <h1>{state}</h1>
                <button className="btn" onClick={() => dispatch({ type: "INCREMENT" })}>Plus</button>
                <button className="btnInner" onClick={() => dispatch({ type: "DECREMENT" })}>Minus</button>

            </div>
        </>
    )
}

export default UseReducer