import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import { Box, ScrollBox, GradientView, Banner, Text, Title, Spacer, ProgressCircle, Touchable, ActivityIndicator, Button, FlatList, Badge } from '../../components';

import { colors } from '../../global/styles/theme.json';

const Home = () => {
     return (
        <ScrollBox  
        background="background_dark"
        >
            <GradientView
            hasPadding
            colors={[colors.primary, colors.primary_variation]}
            justify="center"
            align="center"
            >
                <Box
                spacing="20px 0 0"
                justify="center"
                align="center"
                >
                <Box
                spacing="20px 0 0"
                justify="center"
                align="center"
                >
                    <ProgressCircle progress={0.5} />
                    <Banner 
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/55986782?v=4'
                    }}
                    rounded="100px"
                    />
                </Box>    
                    <Spacer
                    size="30"
                    />
                    <Title color="light">
                        Hosana Barcelos
                    </Title>
                    <Spacer />
                    <Text color="light">
                        email@example.com.br
                    </Text>

                    <Touchable
                    radius="8px" 
                    spacing="20px 0 0"
                    background="green"
                    hasPadding
                    >
                        <Text 
                        color="dark"
                        small
                        >
                        Saldo conquistado</Text>
                        <Spacer />
                        <Title color="light">R$ 20,00</Title>
                    </Touchable>
                </Box>
                <Spacer size="25px"/>
            </GradientView>

        {/* Buscando informações */}
        <Box hasPadding spacing="-50px 0 0">
            {/* <Box
            background="dark"
            hasPadding
            radius="5px"
            align="center"
            justify="center"
            >
            <Spacer size="15px"/>
                <ActivityIndicator size="large" />
            <Spacer size="15px"/>
                <Title color="light" small>Buscando informações</Title>
                <Text small>Aguarde...</Text>
            </Box> */}

            {/* Usuário não possui desafios */}
            {/* <Box
            background="dark"
            hasPadding
            radius="5px"
            align="center"
            justify="center"
            >
                <Title 
                color="light" 
                small>Nada encontrado.</Title>
                <Spacer />
                <Text small>Você não possui desafios.</Text>
                <Spacer size="25px"/>
                <Button
                block 
                mode="contained">
                    Recarregar
                </Button>
            </Box> */}

            {/* Desafios disponíveis para o usuário começar a participar */}
            {/* <Box
            background="dark"
            hasPadding
            radius="5px"
            >
                <Title 
                color="light" 
                small>Correr 3Km todos os dias as 6Am, durante 15 dias.</Title>
                <Spacer />
                <Text small>Mantenha-se focado(a) para criar um novo hábito. O Desafio termina em 30/09/2021.</Text>
                <Spacer size="25px"/>
                <Button
                block 
                mode="contained">
                    Aceitar
                </Button>
            </Box> 
        <Spacer />
            <Box
            background="dark"
            hasPadding
            radius="5px"
            >
                <Title 
                color="light" 
                small>Vai encarar?</Title>
                <Spacer />
                <YoutubePlayer
                height={180}
                width="100%"
                videoId="VnOYF6Dw62Q"
                />
            </Box> */}

            {/* Resultados diários dos desafios */}
            {/* <Box
            background="dark"
            hasPadding
            radius="5px"
            >
                <Text small>Quarta-feira, 17/11/2021.</Text>
                <Spacer />
                <Title 
                color="light" 
                small>Resultados de hoje</Title>
                <Spacer size="20px"/>
                <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                ListEmptyComponent={() => (
                    <Box  
                    align="center"
                    spacing="20px 0 0">
                        <Text color="light">Ainda não há resultados disponíveis. ❌</Text>
                        <Spacer size="25px"/>
                        <Button
                        block 
                        mode="contained">
                            Recarregar
                        </Button>
                    </Box>
                )}
                renderItem={({ item }) => (
                    <Box
                    row
                    width="100%"
                    height="50px"
                    align="center"
                    >
                        <Box 
                        row
                        align="center"
                        >
                            <Banner 
                            mode="cover"
                            width="30px" 
                            height="30px" 
                            rounded="20px"
                            spacing="0 8px 0 0"
                            source = {{
                                uri: 'https://avatars.githubusercontent.com/u/55986782?v=4'
                            }}
                            />
                            <Text color="light">Hosana Barcelos</Text>
                            <Box>
                                <Badge>+ R$ 10,00</Badge>
                            </Box>
                        </Box>
                    </Box>
                )}
                />
            </Box> */}

            {/* Hora do desafio */}
            <Box
            background="dark"
            hasPadding
            radius="5px"
            align="center"
            >
                <Badge big>+ R$ 10,00</Badge>
                <Spacer size="20px"/>
                <Text small>Quarta-feira, 17/11/2021.</Text>
                <Spacer/>
                <Title 
                color="light" 
                small>Inicie seu compromisso.</Title>
                <Spacer />
                <Title color="light" big>30:00</Title>
                <Spacer />
                <Button
                block 
                mode="contained"
                >
                    Iniciar
                </Button>
            </Box>
        </Box>
        </ScrollBox>
     );
}

export default Home;