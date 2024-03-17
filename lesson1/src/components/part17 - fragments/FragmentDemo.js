import React from 'react'

function FragmentDemo() {
    return (
        // short hand for <React.Fragment> '<></>' empty but cannot pass key attribute
        // <React.Fragment>
        <>
        <h1>
            Fragment Demo
        </h1>
        <p>This describes the Fragement Demo Component</p>
        </>
        // </React.Fragment>
    )
}

export default FragmentDemo 
