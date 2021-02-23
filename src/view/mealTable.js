/* eslint-disable import/no-anonymous-default-export */
import React from 'react'

export default props => {

    const rows = props.meals.map( meal => {
        return (
            <tr key={meal.id}>
                <td>{meal.name}</td>
                <td>{meal.category}</td>
                <td>{meal.instructions}</td>
                <td><img src={meal.thumbnail} alt=''/></td>
            </tr>
        )
    } )
   

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">name</th>
                    <th scope="col">category</th>
                    <th scope="col">instruction</th>
                    <th scope="col">thumbnail</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}