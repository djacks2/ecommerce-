import React from 'react';
import Data from '../data/products.json';
import ProductsBody from '../ProductBody/ProductBody'

export default class Products extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Type:'default',
      Cost:'default'
    }
  }


handlePriceDropdownSelect = (event) => {
  this.setState({
    Cost:event.target.value,
      Type:event.target.value
  })
}


    render(){
      const {Type, Cost} = this.state;
        return(

              
                    <div className="product-container">
                      <label>Type</label>
                      <select value={Type} onChange={this.handlePriceDropdownSelect}>
                        <option value="default">All</option>
                        <option value="upbeat">upbeat</option>
                        <option value="mellow"> mellow</option>
                      </select>

                       <label>Cost</label>
                      <select value={Cost} onChange={this.handlePriceDropdownSelect}>
                        <option value="default">All</option>
                        <option value="low">low</option>
                        <option value="medium"> medium</option> 
                      </select>

                    
                      {Data.map((item) =>  {
          if (Type === 'default' &&  Cost === 'default') {
            return <ProductsBody item={item}/>
          } else if (Type === item.Type && Cost === item.Cost) {
            return <ProductsBody item={item} />
          } else if (Type === item.Type || Cost === item.Cost) {
            return <ProductsBody item={item} />
          } else if (Type === 'default' ||  Cost === 'default') {
            return <ProductsBody item={item} />
          }
          })}

                    </div>
                  );
                };
              }

            