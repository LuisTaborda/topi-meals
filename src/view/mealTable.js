/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {

    const rows = props.meals.map( meal => {
        return (
            <div className="meal">
                <div className="meal-header">
                    <img src={meal.thumbnail} alt=''/>
                </div>
                <div className="meal-body">
                    <h3>{meal.name}</h3>
                    <h5>{meal.category}</h5>
                    <p>{meal.instructions}</p>
                </div>
            </div>
        )
    } )
   

    return (
        <table className="table table-hover">
            <div className="container">
              <div className="container meals">
                    {rows}
                </div>
            </div>

        </table>
    )
}