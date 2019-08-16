import React from 'react'
import NavBar from '../../components/common/NavBar';
import EpisodesMap from "../../components/Episodes/EpisodesMap";

class Episodes extends React.Component {
    render() {
        return(
            <div>
                <NavBar/>
                <br/>
                <EpisodesMap/>
            </div>
        )
    }
}

export default Episodes;