import React, {useState, useEffect} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import axios from 'axios'
import {Redirect, Link} from "react-router-dom"


const LocalidadForm = props => {

    const [email, setEmail] = useState("");
    const [access, setAccess] = useState();
    const [userList, setUserList] = useState("");


    const handleOnChange = event => {
        setEmail(event.target.value);
        //setPass(...pass, [event.target.id]: event.target.value};
        console.log("target.id: ", event.target.id)
        console.log("target.value: ", event.target.value)
    };

    useEffect(() => {
      axios.get('http://localhost:3000/users').then(response => 
      {
        console.log(response.data) 
        setUserList(response.data)
      }).catch(() => 
      {
        console.log('Ha ocurrido un error.')
      })
    }, [])

    useEffect(() => {
      console.log("Access dentro de useffect: ", access)
    }, [access])

    const handlerOnClick = (e) => {
        e.preventDefault();
        console.log("El email del form es: ", email)
        userList.filter((item) => {
          console.log("hooks, user list", userList)
          console.log("item.mail=: ", item.email)
          if(item.email === email)
          {
            console.log("Si entró!!!")
            setAccess(email)
            also(item)
          }
          else{console.log("No entró!!!!")}
        })
        console.log("el valor de ACCESS: ", access)
        if(access){
          console.log("Acceso permitido a: ", access)
        }
        else{
          console.log("Acceso denegado")
      }
    };

    function also(item){
      localStorage.setItem('userID', JSON.stringify(item.favoriteCharacters))
    }

    if(access) {
      axios.get('http://localhost:3000/login').then(response => 
      {
      localStorage.setItem('token', JSON.stringify(response.data))
      console.log("abemus token") 
      }).catch(() => 
      {
        console.log('Ha ocurrido un error.')
      })
      return(
        <Redirect to={'/characters'}/>
    )
    }
    else{
    return (
        <Container>
            <Form onSubmit={handlerOnClick}>
                <Form.Group>
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" onChange={handleOnChange} placeholder="Ingresa tu correo aquí" required/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="********" required/>
                </Form.Group>

                <Button type={'submit'} variant={'success'}>Login</Button>
            </Form>
        </Container>
    );
    }
};

export default LocalidadForm;