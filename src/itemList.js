import React from "react";

export default function ItemList(props){

    console.log("rendering item list...")
    let myArray = [];

    for (let index = 1; index < props.count; index++) {
        myArray.push( 'item'  + index);
    }
    
    console.log(myArray);

    return(
        <div>
            <p>hello</p>

            {myArray.map(
                    x => {
                        return (
                            <p key={"item" + x}> {x} </p>
                        )
                    }
                )
            }

        </div>
    )
}