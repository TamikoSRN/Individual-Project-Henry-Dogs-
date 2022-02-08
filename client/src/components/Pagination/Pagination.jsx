import React from "react";
import "./Pagination.css"

export default function Pagination ({dogsPerPage, allDogs, pagination }){
    const pageNumbers = []

    for (let i = 1; i <=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }
    return(
        <nav>
            <ul className="Pagination__ul">
                { pageNumbers && pageNumbers.map(number => (
                    <button onClick={() => pagination(number)} className="Pagination__Button">{number}</button>
                ))}
            </ul>
        </nav>
    )
}