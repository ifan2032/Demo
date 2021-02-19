import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem} from './redux/actions';

import "./index.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addText: "",
            wishList: [],
        }
    }

    handleInputChange = ( event ) => {
        /* Tracks the input text */
        const value = event.target.value;

        this.setState({
            addText: value
        });
        console.log(value);
    }

    submitWish = () => {
        /* Adds text input into wish list once add button is clicked */
        const inputText = this.state.addText;

        if (inputText === "" || this.state.wishList.includes(inputText)) {
            alert("Items cannot be blank strings nor duplicates")
            return
        }
        let new_wishList = this.state.wishList.slice();
        new_wishList = new_wishList.concat([inputText]);

        this.setState({
            addText: "",
            wishList: new_wishList.slice()
        });
    }

    submitList = () => {
        /* Submits entire wish list to Santa, resets state */
        if (this.state.wishList.length == 0) {
            return
        }
        this.setState({
            addText: "",
            wishList: []
        })
        alert("Wish List Submitted to Santa")
    }

    deleteWish = (index) => {
        /* Deletes wish once it is clicked. Passed down to child components */
        console.log("delete this");
        let new_wishList = this.state.wishList.slice();
        new_wishList.splice(index, 1);
        this.setState({wishList: new_wishList});
    }


    render() {


        return (
            <div className="form-box">
                <div className="title-box">
                    <h1>MY WISHLIST</h1>    
                </div> 

                <div className="entry-box"> 
                    {this.state.wishList.map((wish, index) => {
                        return <Item content={wish} deleteWish={() => this.deleteWish(index)} index={index}/>
                    })}
                </div>
            

            <div>
                <div class="input-text"> <input type="text" className="input-box" onChange={this.handleInputChange} value={this.state.addText} /> </div>
            </div>
            <div class="submit-button"> <input type="submit" value="Add" onClick={this.submitWish} className="green-button-1"/></div>
            <div class="submit-button"> <input type="submit" value="Submit" onClick={this.submitList} className="green-button-2"/></div>
            </div>
        );
    }
}

class Item extends Component {
    /* Item handles display of wish items */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h5 onClick={this.props.deleteWish}>{this.props.content} </h5>
        )
    }
}
export default App;