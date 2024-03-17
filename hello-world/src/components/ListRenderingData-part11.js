import React from 'react'

function ListRenderingData({person}) {
    return (
        <h1>Hi my name is {person.name}, Im {person.age} and my skill is {person.skill}</h1>
    )
}

export default ListRenderingData
