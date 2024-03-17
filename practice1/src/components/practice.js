import React from 'react'

function Practice() {

    const arrayList = ['Superman', 'Batman', 'WonderWoman']
    const arrayData = arrayList.forEach(data => alert(data))
    return (
        <div>
            {
            arrayData
            }
        </div>
    )
}

export default Practice
