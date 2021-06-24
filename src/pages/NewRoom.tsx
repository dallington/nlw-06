import { Link } from 'react-router-dom'

import {Wrapper, Aside, Main, Content, Form} from '../styles/auth'

import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'
import Button from '../components/Button'
import { useAuth } from '../contexts/AuthContext';

function click(event: any) : void {
    alert('click');
}

function NewRoom() {
    const { user } = useAuth();
    return (
        <Wrapper id="page-newroom">
            <Aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong> Toda pergunta tem uma resposta. </strong>
                <p>Aprenda e compartilhe conhecimento com outras pessoas em tempo real</p>
            </Aside> 
            <Main>
                <Content>
                    <img src={logo} alt="Ilustração simbolizando perguntas e respostas" />
                    <h1> Criar uma nova sala {user?.name} </h1>
                    <Form>
                        <input placeholder="Nome da Sala" />
                        <Button primary marginTop={2} onClick={click}>
                           Criar Sala
                        </Button>
                    </Form>
                    <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
                </Content>
            </Main>   
        </Wrapper>
    )
}

export default NewRoom
