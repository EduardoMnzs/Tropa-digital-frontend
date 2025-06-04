import React, { useState } from 'react';
import {
    LoginPageContainer,
    LoginCard,
    LoginFormSection,
    WelcomeTextContainer,
    WelcomeTitle,
    WelcomeSubtitle,
    StyledForm,
    FormFields,
    LoginImageSection,
    StyledLoginImage
} from './Login.styles';
import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import loginImage from '../../assets/images/login-image.png';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Senha:', password);
        navigate('/events');
    };

    return (
        <LoginPageContainer>
            <LoginCard>
                <LoginFormSection>
                    <Logo />
                    <WelcomeTextContainer>
                        <WelcomeTitle>Bem-vindo de volta</WelcomeTitle>
                        <WelcomeSubtitle>Entre com sua conta para acessar o painel.</WelcomeSubtitle>
                    </WelcomeTextContainer>
                    <StyledForm onSubmit={handleSubmit}>
                        <FormFields>
                            <Input
                                label="E-mail"
                                id="email"
                                type="email"
                                placeholder="seunome@seuservidor.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                label="Senha"
                                id="password"
                                type="password"
                                placeholder="Digite aqui"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormFields>
                        <Button type="submit">Enviar</Button>
                    </StyledForm>
                </LoginFormSection>
                <LoginImageSection>
                    <StyledLoginImage src={loginImage} alt="Imagem de Login" />
                </LoginImageSection>
            </LoginCard>
        </LoginPageContainer>
    );
};

export default Login;