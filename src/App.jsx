import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BasicExample from './componets/navbar/Navbar'
import SideBar from './componets/SideBar/SideBar'
import Content from './componets/content/content'
import Slider from './componets/slider/Slider'
// import Button from './componets/button/Button'
// import Card from './componets/Card/Card'





function App() {
 const [count, setCount] = useState(false)

  // const openBtn = () => {
  //   setCount(!count)
  // }


  return (
    <>
      
      {/* <button onClick={openBtn} className='modalBtn'>ochilsin</button>
      {
        count ?
        <div className='modalBody shadow' >
        <p>Suvonov Javohir</p>
        <button className='modalOpenBtn'>yopilsin</button>
      </div>
      :
      ""
      } */}
      {/* <Button name={"yuborilsin"} rangi={"blue"}/>
      <Card/> */}
      {/* navbar */}
      



      <div className='my-container'>
        <BasicExample />
        <div className='row'>
          <div className="col-2">
            <SideBar />
          </div>
          <div className='col-10'>
            <Content />
          </div>
        </div>
      </div>

      {/* <Slider/> */}


    </>
  )
}

export default App
