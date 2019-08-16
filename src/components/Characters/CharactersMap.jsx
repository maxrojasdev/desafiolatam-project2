import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getCharatersAction} from '../../store/characters/actions';
import {Container, Col, Card, ListGroup, ListGroupItem, Button, Row} from 'react-bootstrap'

const Characters = props => {

    const [favs, setFavs] = useState([2,4])
    const [noLoop, setNoloop] = useState(true)
    const userID = localStorage.getItem('userID')

    useEffect(() => {
        props.getCharactersComponent('https://rickandmortyapi.com/api/character/')
    }, []);

    if(userID && noLoop){
        setNoloop(false)
        console.log("userid: ", userID)
        var favs2 = []
        for (var i=0,l=userID.length;i<l;i++) favs2.push(+userID[i]); // or parseInt(arr[i]) or Number(arr[i])

        setFavs(favs2)
        console.log("favs: ", favs2)
    }

    const handlerOnClick = e => {
        const aux = parseInt(e.target.value)
        const n = favs.includes(aux)
        if(n){
            console.log("El elemento ya está incluido en favoritos.")
        }
        else{
            setFavs([...favs, aux])
            console.log("Se agrego a favoritos el personaje: ", aux)
        }
    };

    const handlerOnClickDelete = e => {
        const filtered = favs.filter(function(value){
            return value != e.target.value;
        });
        console.log("Se eliminó de favoritos el personaje.", e.target.value)
        setFavs(filtered)
    };

    //console.log("props en character map: ", props);

    if (props.charactersLoading) {
        return <div>Cargando...</div>
    }
    if (props.charactersError) {
        return <div>Es un error...</div>
    }
    if (props.charactersLoading === false && props.charactersError === false) {
        return (
            <Container>
                <Row>
                    {
                        props.characters.results.map((character, index) => {
                            return (
                                <Col xl={4} md={6} sm={12} key={index} style={{padding: '5px'}}
                                     className='float-right'>
                                    {
                                        favs.filter(e => e === character.id) != "" ? (
                                            <Card bg="warning">
                                                <Card.Body>
                                                    <Card.Title>Nombre: {character.name}</Card.Title>
                                                    <Card.Title><img src={character.image}  alt={character.name}/></Card.Title>
                                                </Card.Body>
                                                <ListGroup>
                                                    <ListGroupItem>ID: {character.id}</ListGroupItem>
                                                    <ListGroupItem>Género: {character.gender}</ListGroupItem>
                                                    <ListGroupItem>Estado: {character.status}</ListGroupItem>
                                                    <ListGroupItem><Button value={character.id} onClick={handlerOnClickDelete} variant="danger">Eliminar de favoritos</Button></ListGroupItem>

                                                </ListGroup>
                                            </Card>
                                        ) : (
                                            <Card bg="default">
                                                <Card.Body>
                                                    <Card.Title>Nombre: {character.name}</Card.Title>
                                                    <Card.Title><img src={character.image}  alt={character.name}/></Card.Title>
                                                </Card.Body>
                                                <ListGroup>
                                                    <ListGroupItem>ID: {character.id}</ListGroupItem>
                                                    <ListGroupItem>Género: {character.gender}</ListGroupItem>
                                                    <ListGroupItem>Estado: {character.status}</ListGroupItem>
                                                    <ListGroupItem><Button value={character.id} onClick={handlerOnClick}>Agregar a favoritos</Button></ListGroupItem>

                                                </ListGroup>
                                            </Card>
                                        )
                                    }
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
    console.log("state in characters", state);
    return {
        characters: state.characters.characters,
        charactersLoading: state.characters.charactersLoading,
        charactersError: state.characters.charactersError
    }
};

const mapDispatchToProps = dispatch => ({
    getCharactersComponent: payload => dispatch(getCharatersAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters)