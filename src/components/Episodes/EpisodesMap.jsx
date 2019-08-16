import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Container, Col, Card, ListGroup, ListGroupItem, Button, Row} from 'react-bootstrap'
import {getEpisodesAction} from "../../store/episodes/actions";

const EpisodesMap = props => {

    const [favs, setFavs] = useState([2, 3, 6])

    useEffect(() => {
        props.getCharactersComponent('https://rickandmortyapi.com/api/episode/')
    }, []);

    const handlerOnClick = e => {
        const aux = parseInt(e.target.value)
        const n = favs.includes(aux)
        if (n) {
            console.log("El elemento ya está incluido en favoritos.")
        } else {
            setFavs([...favs, aux])
            console.log("Se agrego a favoritos el personaje: ", aux)
        }
    };

    const handlerOnClickDelete = e => {
        const filtered = favs.filter(function (value) {
            return value != e.target.value;
        });
        console.log("Se eliminó de favoritos el personaje.", e.target.value)
        setFavs(filtered)
    };

    console.log("props en episodes map: ", props);

    if (props.episodesLoading) {
        return <div>Cargando...</div>
    }
    if (props.episodesError) {
        return <div>Es un error...</div>
    }
    if (props.episodesLoading === false && props.episodesError === false) {
        return (
            <Container>
                <Row>
                    {
                        props.episodes.results.map((episode, index) => {
                            return (
                                <Col xl={4} md={6} sm={12} key={index} style={{padding: '5px'}}
                                     className='float-right'>
                                    <Card bg="success">
                                        <Card.Body>
                                            <Card.Title>Episodio: {episode.name}</Card.Title>
                                        </Card.Body>
                                        <ListGroup>
                                            <ListGroupItem>ID: {episode.id}</ListGroupItem>
                                            <ListGroupItem>Fecha Lanzamiento: {episode.air_date}</ListGroupItem>
                                            <ListGroupItem>Creado: {episode.created}</ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        );
    } else {
        return (
            <div>Cargando...</div>
        )
    }
};

const mapStateToProps = state => {
    console.log("state in episodes", state);
    return {
        episodes: state.episodes.episodes,
        episodesLoading: state.episodes.episodesLoading,
        episodesError: state.episodes.episodesError
    }
};

const mapDispatchToProps = dispatch => ({
    getCharactersComponent: payload => dispatch(getEpisodesAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesMap)