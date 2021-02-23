import React, {useEffect, useState} from "react";
import MealService from '../app/service/mealService'
import MealTable from '../view/mealTable'

class Main extends React.Component {

    state = {
        meals : [],
        name : ''

    }
    constructor(props){
        super(props);
        this.service = new MealService();
    }

    componentDidMount(){
        this.buscar();
    }

    buscar = () =>{
        console.log("nome", this.props.name)
        this.service
            .findByName(this.state.name)
            .then( response =>{ 
                const data = response.data
                this.setState({meals : data.meals})

        }).catch(error =>{
            console.log(error)
        })
    }

    render(){

        return(
        <div className="App">
            <form className="search-form">
                <input className="search-form" type="text" value={this.state.name} onChange={e => this.setState({name : e.target.value})} 
                        placeholder="Find a delicious Meal!"/>
            <button type="button" className="btn btn-success" onClick={this.buscar}>
                <i className="pi pi-search"/>Search</button></form>
            <MealTable 
            meals={this.state.meals} >

            </MealTable>
        </div>
        );
    }
  }
  
  export default Main;
  