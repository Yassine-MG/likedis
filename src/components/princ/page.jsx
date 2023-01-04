import React, {useState } from "react";
import "./page.css";
import img from "../../img/pexels-frans-van-heerden-624015.jpg";
import useLocalStorage from 'use-local-storage';
class Page extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {
            number: 0,
            like : 0
        }
       }
        handleClick = event => {
        if (event.detail === 2) {
            let value = this.state.like;
            this.setState({like : value + 1})
        }
      };
       like(){
            let value = this.state.like;
            this.setState({like : value + 1})
       }
       Dislike(){
            let value = this.state.number;
            this.setState({number : value + 1})
       }
    render(){
            const {like} = this.state;
            const {number} = this.state;
            
        return <section>
                <i class="fa-solid fa-sun"></i>
                <div className="container">  
                    <div className="img-container">
                        <img onClick={this.handleClick} src={img} alt="" />
                    </div>
                    <div className="reactions">
                        <div className="like">
                            <i onClick={()=>{
                                this.like()
                            }} class="fa-solid fa-heart"></i>
                            <p>{like}</p>
                        </div>
                        <div className="dislike">
                            <i onClick={()=>{
                                this.Dislike()
                            }} class="fa-regular fa-thumbs-down"></i>
                            <p>{number}</p>
                        </div>   
                    </div>
                </div>
        </section>
    }
}
export default Page;