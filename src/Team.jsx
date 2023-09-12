import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)
    const teamstyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    }

    const handleAdd = () =>{
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const handleRove = () => {
        setTeam(team-1)
    }
    return(                                                                                                   
        <div style={teamstyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRove}>Reduce</button>
        </div>
    )
}