import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import { ShopContext } from '../Context/ShopContext'

const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext)

  return (
    <div className="ShopCategory">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 to 12</span> out of 36 products.
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (item.category === props.category) {
            return (
              <Item key={i} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
            )
          } else {
          return null;
          }
        })}
      </div>
      <dic className="shopcategory-loadmore">
        Explore More
      </dic>
    </div>
  )
}

export default ShopCategory