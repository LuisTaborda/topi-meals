import React from "react";
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
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="text" value={this.state.name} onChange={e => this.setState({name : e.target.value})} 
                        placeholder="Find a delicious Meal!"/>
            <button type="button" className="btn btn-warning" onClick={this.buscar}>
                <i className="pi pi-search"/>Search</button></form>
            <p>The API Original is from <a href="#">TheMealDB.com</a></p>
            <MealTable 
            meals={this.state.meals} >

            </MealTable>
            <footer >© 2021 - Luis Gustavo Santos Taborda</footer>
        </div>
        );
    }
  }
  
  export default Main;
  