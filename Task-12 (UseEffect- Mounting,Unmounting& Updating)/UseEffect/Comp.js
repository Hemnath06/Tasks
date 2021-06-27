import React,{useState} from 'react'
import img from "./2.jpg"
import "./Comp.css"
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
function Comp() {
    const [display, setDisplay] = useState(true)
    const [comp, setComp] = useState("")
    
    const change=()=>{
        setDisplay(false)
        setComp("")
    }
    
    return (
        display === true ?
        <div>
            <section>
                <div className="imgBx">
                     <img src={img} />
                </div>
                <div className="header">
                        <h1 style={{textShadow:"2px 2px 5px red"}}>UseEffect</h1>
                    </div>
                <div className="contentBx">
                      
                      <div className="inputBx">
                            <button type="submit" onClick={()=>{
        setDisplay(false)
     setComp(<Comp1 />)
    }}>Component Mount</button>
                      </div>
                      <div className="inputBx">
                            <button type="submit" onClick={()=>{
        setDisplay(false)
     setComp(<Comp2 />)
    }}>Component Unmount</button>
                      </div>
                      <div className="inputBx">
                            <button type="submit" onClick={()=>{
        setDisplay(false)
     setComp(<Comp3 />)
    }}>Component API</button>
                      </div>
                      
                      
                </div>

            </section> 
            
        </div>: comp
    )
}

export default Comp
