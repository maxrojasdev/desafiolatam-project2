import React from 'react'
import CharactersMap from '../../components/Characters/CharactersMap';
import NavBar from '../../components/common/NavBar';

class Characters extends React.Component {
    render() {
        return(
            <div>
                <NavBar/>
                <br/>
                <CharactersMap/>
            </div>
        )
    }
}

export default Characters;