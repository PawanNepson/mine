import React from "react";

export default function Movies({ movie1, price }) {
    console.log(movie1)
    console.log(price)
    return (
        <div>
            <p>
                {movie1}
                {price}
            </p>
        </div>
    )
}
