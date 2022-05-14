import React, { useCallback, useState } from "react";
import ItemList from "./itemList";
import "../src/sebstyle.css"

function SebComponent(){

    console.log("rendering SebComponent...")
    const [count, setCount] = useState(1)
    const [dark, setDark] = useState(false)

    let inlineStyle = {backgroundColor: dark ? "green" : "white"}

    
    const handleClick = useCallback(() => {
        setCount(count + 1)
    }, [count])


    return(
        <div className="sebComponent" style={inlineStyle}>
            <p>This is SebComponent</p>
            <button onClick={handleClick}> {count} </button>
            <br/>
            <br/>
            <button onClick={() => {setDark(x => !x)}}> change theme </button>

            <ItemList count={count}/>
        </div>
    )
}

export default SebComponent;