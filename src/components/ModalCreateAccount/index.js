import React, { createRef } from 'react';

import { Modalize } from 'react-native-modalize';
import { Box, Title, Spacer, Button, TextInput } from '../index';

import MaskTextInput from '../MaskTextInput';


export const modalRef = createRef();


const ModalCreateAccount = () => {
    return (
        <Modalize ref={modalRef} adjustToContentHeight>
            <Box 
            hasPadding 
            background="background_dark"
            >
                <Title color="light">
                    Crie sua conta
                </Title>
                <Spacer />
                <TextInput 
                placeholder="Nome" 
                />
                <Spacer />
                <TextInput 
                placeholder="Seu e-mail" 
                />
                <Spacer />
                <MaskTextInput
                placeholder="Data de nascimento"
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY',
                }} 
                />
                <Spacer />
                <MaskTextInput 
                placeholder="Telefone" 
                type={'cel-phone'}
                opstion={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                }}
                />
                <Spacer />
                <TextInput 
                placeholder="Crie uma senha"
                secureTextEntry
                />
                <Spacer />
                <TextInput 
                placeholder="Confirme sua senha"
                secureTextEntry
                />
                <Spacer />
                <Button
                block
                mode="contained"
                >
                    Criar conta
                </Button>
            </Box>
        </Modalize>
    );
}

export default ModalCreateAccount;