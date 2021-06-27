import React from 'react'
import {A} from "./Context"
import {B} from "./Context"


function Use2() {

    const data = React.useContext(A);
    
    const data1 = React.useContext(B);
    return (
        <div>
            

            <A.Consumer>
                {
                    a=>{
                        return(<div>
                            <h1>{a.title}</h1>
                           <B.Consumer>
                               {
                               b=>{
                                   return(<>{b.body}</>)
                               }
                            }
                           </B.Consumer>
                        </div>)
                    }
                }
            </A.Consumer>
        </div>
    )
}

export default Use2
