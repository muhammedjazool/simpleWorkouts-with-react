import React, { useState } from 'react'
import {phoneData} from './ProductData'
import { Card,Button, Container } from 'react-bootstrap'
import "./style.css"

function Products() {
     const [list,setList]=useState(phoneData)
     const [count, setCount] = useState(Array(list.length).fill(0));

     const handleIncrement = (index) => {
       if (count[index] < list[index].qty) {
         const updatedCount = [...count];
         updatedCount[index]++;
         setCount(updatedCount);
       }
     };
   
     const handleDecrement = (index) => {
       if (count[index] > 0) {
         const updatedCount = [...count];
         updatedCount[index]--;
         setCount(updatedCount);
       }
     };
     
    
  return (
    <>
     <Container>
    <h1 className='text-white text-center header'>Products</h1>
{
     list.map((obj,index)=>
          (
               <div className='d-inline-flex justify-content-center p-2 '>
               <Card key={index} className='shadow p-3 mb-2  rounded list' style={{ width: '15.1rem' }}>
               <Card.Img style={{ height: '14rem' }} className='p-2' variant="top" src={`${obj.img}`} />
               <Card.Body>
               <div className='ms-2 text-center '>
                 <Card.Title>{obj.model}</Card.Title>
                 <Card.Text>
                   {obj.desc}
                 </Card.Text>
                 </div>
                 <div className='ms-2 text-center'>
                    <p>price: ₹ {obj.price}</p>
                 </div>
                 <div className='text-center'>
                    

                 <p >
                    <button  onClick={() => handleDecrement(index)}>-</button>
                    {count[index]}
                    <button onClick={() => handleIncrement(index)}>+</button>
                  </p>
                 </div>
                    
                 <div className='ms-1 text-center'>
                 <Button className='button' variant="primary">Go to Cart</Button>
                 </div>
               </Card.Body>
             </Card>
             </div>
          )
     )
}
   
   
    </Container>
    </>

  )
}

export default Products