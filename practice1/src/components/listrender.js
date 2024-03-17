import React from 'react'
import ListRenderData from './listRenderData';
function Listrender() {
    const nameList = [
        {
            name: 'Bruce',
            heroName: 'Batman'
        },
        {
            name: 'Clark',
            heroName: 'Superman'
        },
        {
            name: 'Diana',
            heroName: 'WonderWoman'
        }
    ];

    const nameData = nameList.map(person => 
    <ListRenderData person={person}
    />)
    return (
        <div>
            {nameData}
        </div>
    )
}

export default Listrender

