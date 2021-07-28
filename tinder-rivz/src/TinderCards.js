import React, { useEffect, useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios'

const TinderCards = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }

        fetchData()
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('Removing: ', nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name, ' left the screen!');
    }

    return (
        <div className='tinderCards'>
            <div className='tinderCards_cardContainer'>
                {people.map((item, index) => (
                    <TinderCard
                        className='swipe'
                        key={index}
                        preventSwipe={['up', 'down']}
                        onSwipe={dir => swiped(dir, item.name)}
                        onCardLeftScreen={() => outOfFrame(item.name)}
                    >
                        <div 
                            className='card'
                            style={{backgroundImage: `url(${item.imgUrl})`}} >
                                <h3>{item.name}</h3>
                        </div>
                        
                    </TinderCard>
                ))}
            </div>        
        </div>
    )
}

export default TinderCards
