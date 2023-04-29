import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { ADD } from '../redux/actions/action';
import "./style.css";
import { height } from '@mui/system'
import { useDispatch } from 'react-redux';


const Cards = () => {
    
  
  const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products').then(
            response => response.json()
        ).then(json => setData(json.products))
        console.log(data) //returns empty because sync nature
    }, [])

const dispatch = useDispatch();

const send = (e) =>{
// console.log(e);

dispatch(ADD(e));
}
const clearCart=()=>{
  return dispatch({type: "CLEAR_CART"});
}

return (
  
    <div className='container mt-3'>
         <h2 className='text-center'>All Items</h2>
         <div className="row d-flex justify-content-center align-items-center">
         {
            data.map((element,id)=>{
                
                return(
                    <>
    <Card style={{ width: '22rem', border:'1px solid #000000', size:'24px'}} className="mx-2 mt-4 card_style">
      <Card.Img variant="top" src={element.thumbnail} style={{height:"16rem"}} className="mt-3" />
      <Card.Body>
      <Card.Title>{element.title}</Card.Title>
      
      <Card.Text>
      Price: ${element.price}
        </Card.Text>
        <div className="button_div d-flex justify-content-center">
       
        <Button variant="primary"  onClick={()=>send(element)} className='col-lg-12' id="addbtn">Add To Cart</Button>
        </div>
       
      </Card.Body>
    </Card>
                    </>
                )
            })
         }
       
    </div>
    </div>
  );
}
export default Cards