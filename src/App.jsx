import { useState } from 'react'
import './App.css'

function DropdownItem({item, className, onChoose}){
  return(
    <li className={className} onClick={onChoose}>
      <a href="#">{item}</a>
    </li>
  )
}

function DropdownList({active, onChoose}){
  let items = ["Profile information", "Change Password", "Become PRO", "Help", "Log Out"]
  return(
    <ul className='dropdown'>
    {items.map((x)=>{
      return <DropdownItem className={x===active?"active":""} item={x} key={x} onChoose={()=>{onChoose(x)}}/>
    })}
    </ul>
    
  )
}

function Dropdown(){
  const [count, setCount] = useState({
    isActive:false,
    active: "Profile information"
  })
  return(
    <div className="container">
      <button className="btn" onClick={()=>{
      setCount({
      isActive: !count.isActive,
      active: count.active
    })}}>Account settings <span className="material-icons">public</span></button>
    <div className={count.isActive?"dropdown-wrapper open":"dropdown-wrapper"}>
    <DropdownList active={count.active} onChoose={(x)=>{setCount({isActive: count.isActive, active: x})}}/>
    
    </div>
    </div>
  )
}

function App() {

  return (
    <>
      <Dropdown />
    </>
  )
}

export default App
