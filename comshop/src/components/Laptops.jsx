import React, { Component } from "react";
import LaptopCollection from './Items/Laptop';
import axios from 'axios';

class Laptops extends Component {
    state = {
      allLaptops: [],
      result: []
    };
  
    render() {
      return (
          <div className="container"  >
            <div className="row" >
              {this.state.allLaptops.map((laptops) => (
                <div className="col" key={laptops.id}>
                  <LaptopCollection 
                    key={laptops.id} 
                    laptops={laptops}
                    onLike={() => this.likeBook(laptops)}
                  />
                </div>
              ))}
            </div>
          </div>
      );
    }
  
    /* async likeBook(desktops){
      
      await axios.put(`http://localhost:5000/api/desktopPC/${desktops.id}`, {
        likeCount: desktops.likeCount + 1,
      });
  
      let allDesktops = [...this.state.allDesktops];
      let index = allDesktops.indexOf(desktops);
      allDesktops[index] = {...desktops };
      allDesktops[index].likeCount++;
      this.setState({allDesktops : allDesktops});
      
    } */
  
    async componentDidMount() {
      const { data } = await axios.get("http://localhost:5000/api/laptopPC");
      console.log(data);
  
      let laptops = data.map((Laptop) => {
        return {
          id: Laptop._id,
          imgUrl: Laptop.imgUrl,
          itemCode: Laptop.itemCode,
          itemName: Laptop.itemName,
          stock: Laptop.stock,
          itemDescription: Laptop.itemDescription,
          itemQty: Laptop.itemQty,
          warranty: Laptop.warranty,
          itemPrice: Laptop.itemPrice,
          likeCount: Laptop.likeCount,
        };
      });
      this.setState({ allLaptops: laptops });
    }
  }
  
  export default Laptops;
  