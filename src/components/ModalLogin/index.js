import React, { createRef } from 'react';

import { Modalize } from 'react-native-modalize';
import { Box, Title, Spacer, Button, TextInput } from '../index';

export const modalRef = createRef();


const ModalLogin = () => {
    return (
        <Modalize ref={modalRef} adjustToContentHeight>
            <Box 
            hasPadding 
            background="background_dark"
            >
                <Title color="light">
                    Entre na sua conta
                </Title>
                <Spacer />
                <TextInput 
                placeholder="Seu e-mail" 
                />
                <Spacer />
                <TextInput 
                placeholder="Sua senha" 
                secureTextEntry
                />
                <Spacer />
                <Button
                block
                mode="contained"
                >
                    Fazer login
                </Button>
            </Box>
        </Modalize>
    );
}

export default ModalLogin;