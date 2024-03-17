import React from 'react'

function Hero({Heroname}) {
    if(Heroname == "Joker") {
        throw new Error('not a hero!')
    }
    return (
        <div>
            {Heroname}
        </div>
    )
}

export default Hero
