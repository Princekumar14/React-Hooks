import { useState } from "react"

const UseStateArray = () => {
    const bioData = [
        {
            id: 0, myName: "prince", age: 22
        },
        {
            id: 1, myName: "dawinder", age: 23
        },
        {
            id: 2, myName: "dk", age: 24
        }

    ]
    const [myArray, setMyArray] = useState(bioData)
    const clearArray = () => {
        setMyArray([]);
    }
    const removeElem = (id) => {
        const myNewArray = myArray.filter((currentElem)=>{
            return currentElem.id !== id;
        })
        setMyArray(myNewArray);
    }
    return (
        <div>
            {
                myArray.map((currentItem) => {
                    return (
                        <h1 className="h1Style" key={currentItem.id}>
                            Name: {currentItem.myName} & Age: {currentItem.age}
                            <button className="btnInner" onClick={()=>removeElem(currentItem.id)}>remove</button>
                        </h1>
                    );
                })
            }
            <button className="btn" onClick={clearArray}>Clear</button>
        </div>
    );
}

export default UseStateArray;