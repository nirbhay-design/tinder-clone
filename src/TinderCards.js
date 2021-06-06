import React,{useState,useEffect} from 'react'
import './tindercards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios.js'

export default function TinderCards() {
    const [people,setPeople] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
        }
        fetchData();
    },[])
    console.log(people)

    const swiped = (direction, name_delete) =>{
        console.log("removing",name_delete);
    }
    const outOfFrame = (name) =>{
        console.log(name+"left the screen");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardcontainer">
            {people.map((person)=>{
                return (
                    <>
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up','down']} onSwipe={(dir)=>swiped(dir,person.name)} onCardLeftScreen={()=>outOfFrame(person.name)}>
                    <div
                        style={{backgroundImage:`url(${person.url})`,
                                backgroundRepeat:"no-repeat"
                    }}
                        className="card"
                    >
                         <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
                    </>
                ) 
            })}
            </div>
            
        </div>
    )
}
