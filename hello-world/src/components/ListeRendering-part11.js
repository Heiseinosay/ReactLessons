import React from 'react'
import ListRenderingData from './ListRenderingData-part11';
function ListeRendering() {
    // const names = ['Bruce', 'Diana', 'Clark']
    // return (
    //     <div>
    //         {
    //             names.map(name => <h2>{name}</h2>)
    //         }
    //     </div>
    // )

    // const names = ['Bruce', 'Diana', 'Clark']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>
    //         {
    //            nameList 
    //         }
    //     </div>
    // )

    const namesData = [
        {
            id: 1,
            name: 'Bruce',
            age: 34,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 36,
            skill: 'Angular'
        },
        { 
            id: 3,
            name: 'Diana',
            age: 200,
            skill: 'Vue'
        }
    ]

    const nameList =  namesData.map(person => <ListRenderingData key={person.id} person={person}/>)
    return (
        <div>
            {
               nameList
            }
        </div>
    )
}

export default ListeRendering
