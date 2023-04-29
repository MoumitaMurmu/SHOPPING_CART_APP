import React, {useEffect, useState} from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT } from '../redux/actions/action';
import { getTableBodyUtilityClass } from '@mui/material';



const Header = () => {

const [price,setPrice] = useState(0);
// console.log(price);
const getdata = useSelector((state)=>state.cartreducer.carts);
// console.log(getdata);

const dispatch = useDispatch();
    
const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const dlt = (id) => {
    dispatch(DLT(id))
  }

  
  

const total = () =>{
    let price = 0;
    getdata.map((ele,k)=>{
        price = ele.price + price
    });
    setPrice(price);
};

useEffect(()=>{
total();
},[total])
    


  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <NavLink to="/" className="text-decoration-none text-light" >Shopping Cart</NavLink>
    </Container>
    <Nav className="me-auto">
        <NavLink to="/"  className="text-decoration-none text-light" id="homepage">Home Page</NavLink>
       
        <Nav.Link className="text-decoration-none text-light" 
         id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >Cart Page</Nav.Link>
    </Nav>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
      {
        getdata.length ?
        <div className='card_details'  style={{width:"24rem", padding:10}}>
<Table>
    <thead>
    <h3 style={{color:'white'}}>Checkout List</h3>
        <tr style={{color:'white'}}>
            
            <th>photo</th>
            <th>title</th>
            <th>price</th>
        </tr>
    </thead>
    <tbody>
        {
            getdata.map((e)=>{
                return (
                    <>
                    <tr>
                    <td>
                        <NavLink to={`/cart/${e.id}`}   onClick={handleClose}>
                        <img src={e.thumbnail} style={{width:"6rem",height:"5rem", border:"1px solid white"}} alt="" />
                        <p style={{color:"black", border:" 1px solid white", width:'6rem', backgroundColor:"white"}}><strong>see details</strong></p>
                        </NavLink>   
                        </td>
                        
                        <td style={{color:'white'}}>
                            <p>{e.title}</p>
                            </td>
                           <td style={{color:'white'}}>
                           <p>${e.price}</p>
                           </td>
                           {/* <button variant="primary"  onClick={()=>dlt(ele.id)} className='col-lg-12'><strong>Remove From Cart</strong></button>   */}
                    </tr>
                    </>
                )
            })
        }
        <br/>
        <p className='text-center' style={{color:'white'}} id="total">Total: ${price}</p>
    </tbody>
    <br/>
    
</Table>
<div>
        <button id="chckbtn">Click To Checkout</button>
    </div>
        </div>: 
        <div style={{height:"30px", padding:"5px"}}>Your Cart is empty</div>
      }
      
     
      </Menu>
    </Navbar>
    </>
  )
}

export default Header