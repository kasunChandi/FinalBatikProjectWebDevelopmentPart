import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Laptop extends Component{

    state ={

    };

    render(){
         return(
            <div className="card" style={{ width: "15rem" ,height: "25rem"}}>
                <Link className="btn btn-secondary" to={`/viewDetails/${this.props.laptops.id}`} style={{backgroundColor:"whitesmoke", border:"white"}}>
                <img src={this.props.laptops.imgUrl} className="card-img-top" alt="..." height="250px" width="10px" />
                </Link>
                <div className="card-body" >
                    <h5 className="card-title">{this.props.laptops.itemName}</h5>
                    <h6>{this.props.laptops.stock}</h6>
                    <p className="card-text" style={{color:"red"}}>
                        {this.props.laptops.itemPrice} {/*this.props.desktop.Currencytype*/}
                    </p>
                <div align="right">
                    <button style={{backgroundColor:"white", color:"hotpink", border:"2px solid white", fontSize:"30px"}} onClick={this.props.onLike}>♥</button>{" "}
                    {this.props.laptops.likeCount}
                </div>
                </div>    
            </div>

         );

    }


}

export default Laptop