import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { NavLink, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT } from '../redux/actions/action'
import { useNavigate } from 'react-router-dom'
import { ADD } from '../redux/actions/action'
import { REMOVE } from '../redux/actions/action'



const CardsDetails = () => {

    const[data,setData] = useState([]);
    // console.log(data);
    const {id} = useParams();
    
    const history = useNavigate();
    
    const dispatch = useDispatch();
    
    const getdata = useSelector((state)=>state.cartreducer.carts);
// console.log(getdata);


const compare = () =>{
    let comparedata = getdata.filter((e)=>{
        return e.id == id
    });
    setData( comparedata);
}
 

// add data
const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  }


// remove one
const remove = (item)=>{
    dispatch(REMOVE(item))
  }


useEffect(()=>{
compare();
},[id])
  return (
    <>
        <div className="container mt-2">
            <h2 className='text-center'>My Cart</h2>
                <section className='container mt-3'>
                  <div  className="iteamsdetails">
                  {
                    data.map((ele)=>{
                        return (
                            <>
                            <div className="items_img">
                     <img style={{cursor:"pointer"}} src={ele.thumbnail} alt='' />
                     </div>
                        <div className="details">
                           <Table id="table" style={{width:"20rem", height:"8px"}}>
                               <tr>
                                   <td>
                                        <p style={{cursor:"pointer"}}><strong>Title:</strong> {ele.title}</p>
                                        <p style={{cursor:"pointer"}}><strong>Price:</strong> ${ele.price}</p>
                                        {/* <p><strong>Total</strong>:${ele.price}</p> */}
                                        {/* <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                                            <span style={{fontSize:24}}  onClick={ele.qnty <=1 ? ()=>dlt(ele.id) : ()=>remove(ele)}>-</span>
                                            <span style={{fontSize:22}}>{ele.qnty}</span>
                                            <span style={{fontSize:24}} onClick={()=>send(ele)}>+</span>
                                        </div> */}
                                        </td>
                                
                                </tr>
                                <button variant="primary"  onClick={()=>dlt(ele.id)} className='col-lg-12' id="removecart"><strong>Remove From Cart</strong></button>
 
                            </Table>
                         </div>
                             </>
                         )             
                                            
                                   
                    })
                  }
                     
                  </div>
                </section>
        </div>
    </>
  )
}

export default CardsDetails


         
                    
                
         