import React from 'react';

import { TextInputMask } from 'react-native-masked-text';

import { TextInput } from '../index';

const MaskTextInput = (inputProps) => {
    return (
        <TextInput
            {...inputProps}
            render={(props) =>
            <TextInputMask {...props}/>
            }
        />
    );
}

export default MaskTextInput;