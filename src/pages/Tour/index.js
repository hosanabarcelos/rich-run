import React, { useState } from 'react';

import { Box, Title, Spacer, Banner, Text, Button } from '../../components';

import imgTour1 from '../../images/Tour/Tour1.png';
import imgTour2 from '../../images/Tour/Tour2.png';
import imgTour3 from '../../images/Tour/Tour3.png';


const Tour = () => {

    const tourData = [
    {
        bg: 'background_dark',
        button: 'primary',
        title: 'Cansado da \n rotina? \n Mude seus \n hábitos.',
        desc: 'Aqui você consegue mudar seus hábitos de maneira divertida com seus amigos.',
        pic: imgTour1,
    },
    {
        bg: 'background_dark',
        button: 'primary',
        title: 'Que tal um \n desafio?',
        desc: 'Desafie seus amigos à criarem hábitos. Se eles falharem, seu saldo será maior.',
        pic: imgTour2,
    },
    {
        bg: 'primary',
        button: 'dark',
        title: 'Ganhe dinheiro \n com seus amigos.',
        desc: 'Se mantenha empenhado para atingir suas metas ou perca seu dinheiro.',
        pic: imgTour3,
    },
];

    const [actualTour, setactualTour] = useState(0);


    return (
        <Box
        background={tourData[actualTour]?.bg}
        justify="center"
        hasPadding
        >
            <Spacer />
            <Title
            big
            color="light"
            >
                {tourData[actualTour]?.title}
            </Title>
            <Spacer size="20px" />
            <Banner 
            source={tourData[actualTour]?.pic}
            width="100%"
            height="300px"
            />
            <Spacer size="30px" />
            <Text 
            align="center"
            >
                {tourData[actualTour]?.desc}
            </Text>
            <Spacer size="40px" />
            <Button
            block
            background={tourData[actualTour]?.button}
            onPress={() => setactualTour(actualTour + 1)}
            >
                {actualTour === 2 ? 'Explorar' : 'Próximo'}
            </Button>
        </Box>
    );
}

export default Tour;