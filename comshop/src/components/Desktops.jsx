import React, { Component } from "react";
import DesktopCollection from './Items/Desktop';
import axios from 'axios';

class Desktops extends Component {
    state = {
      allDesktops: [],
      result: []
    };
  
    render() {
      return (
          <div className="container"  >
            <div className="row" >
              {this.state.allDesktops.map((desktops) => (
                <div className="col" key={desktops.id}>
                  <DesktopCollection 
                    key={desktops.id} 
                    desktops={desktops}
                    onLike={() => this.likeBook(desktops)}
                  />
                </div>
              ))}
            </div>
          </div>
      );
    }
  
    async likeBook(desktops){
      
      await axios.put(`http://localhost:5000/api/desktopPC/${desktops.id}`, {
        likeCount: desktops.likeCount + 1,
      });
  
      let allDesktops = [...this.state.allDesktops];
      let index = allDesktops.indexOf(desktops);
      allDesktops[index] = {...desktops };
      allDesktops[index].likeCount++;
      this.setState({allDesktops : allDesktops});
      
    }
  
    async componentDidMount() {
      const { data } = await axios.get("http://localhost:5000/api/desktopPC");
      console.log(data);
  
      let desktops = data.map((Desktop) => {
        return {
          id: Desktop._id,
          imgUrl: Desktop.imgUrl,
          itemCode: Desktop.itemCode,
          itemName: Desktop.itemName,
          stock: Desktop.stock,
          itemDescription: Desktop.itemDescription,
          itemQty: Desktop.itemQty,
          warranty: Desktop.warranty,
          itemPrice: Desktop.itemPrice,
          likeCount: Desktop.likeCount,
        };
      });
      this.setState({ allDesktops: desktops });
    }
  }
  
  export default Desktops;
  