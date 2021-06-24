import { useHistory } from 'react-router-dom';

import {Wrapper, Aside, Main, Content, Form} from '../styles/auth'

import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'
import loginIcon from '../assets/images/login.svg'
import Button from '../components/Button'

import { useAuth } from '../contexts/AuthContext';

function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    async function handleCreateRoom(e: any) {
        e.preventDefault();
        if(!user) {
            await signInWithGoogle();
        }
        history.push('/rooms/new');
    }
    return (
        <Wrapper id="page-auth">
            <Aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong> Toda pergunta tem uma resposta. </strong>
                <p>Aprenda e compartilhe conhecimento com outras pessoas em tempo real</p>
            </Aside> 
            <Main>
                <Content>
                    <img src={logo} alt="Ilustração simbolizando perguntas e respostas" />
                    <Form>
                        <Button google marginTop={4} marginBottom={0} onClick={handleCreateRoom}>
                            <img src={googleIcon}></img>
                            Crie sua sala com o google
                        </Button>
                        <span>ou entre em uma sala</span>
                        <input placeholder="digite código da sua sala" />
                        <Button primary marginTop={2}>
                            <img src={loginIcon}></img>
                            Entrar na sala
                        </Button>
                    </Form>
                </Content>
            </Main>   
        </Wrapper>
    )
}

export default Home
