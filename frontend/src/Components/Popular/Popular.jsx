import React from 'react'
import './Popular.css'
import data_products from '../Assets/data.js'
import Item from '../Item/Item.jsx'

const Popular = () => {
  return (
    <div className="popular">
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {data_products.map((item, i) => {
                return <Item key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular