import React from 'react';

import { Box, Banner, Text, Spacer, Button } from '../../components';

import ModalLogin, 
{ modalRef as modalLoginRef } 
from '../../components/ModalLogin/index';

import ModalCreateAccount, 
{ modalRef as modalCreateAccountRef } 
from '../../components/ModalCreateAccount/index';

import logo from '../../images/logoname.png';


const Login = () => {
    return (
        <>
        <ModalLogin />
        <ModalCreateAccount />
        <Box
        background="dark"
        hasPadding
        align="center"
        justify="center"
        >
        <Banner
        source={logo}
        width="80%"
        height="200px"
        />
        <Spacer size="150px" />
        <Button 
        block
        mode="contained"
        onPress={() => modalLoginRef.current?.open()}
        >
            Entrar
        </Button>
        <Spacer />
        <Button 
        block
        mode="text"
        onPress={() => modalCreateAccountRef.current?.open()}
        >
            Não tenho conta
        </Button>
        <Spacer size="50px" />
        <Text
        undeline
        small
        align="center"
        >
        Ao fazer login você concorda com nossos {'\n'}
        Termos e Condições e Política de Privacidade.
        </Text>
        </Box>
        </>
    );
}

export default Login;