"use client"

import React from 'react'
import { decrement } from '../Redux/cartSlice'
import {useDispatch, useSelector} from 'react-redux'


const Cartpage = () => {

    const dispatch=useDispatch();
    const cartitems= useSelector((state)=>state.cart)



    const handledecrement=(id)=>{
        dispatch(decrement(id))
    }
  return (
    <div>
        <h3>Cartpage</h3>
        <div className='cartcard'>
          {
            cartitems.map((item)=>(
                <div>
                    <img src={item.image} alt='img'/>
                    <h5>{item.title}</h5>
                    <h6>{item.price}</h6>
                    <button className='btn' onClick={()=>handledecrement(item)}>decrement</button>
                </div>
            ))
          }
        </div>

    </div>
  )
}

export default Cartpage