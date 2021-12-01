import styled from 'styled-components/native';

import { 
  Title as TitlePaper, 
  Text as TextPaper, 
  Button as ButtonPaper,
  TextInput as TextInputPaper, 
  ActivityIndicator as ActivityIndicatorPaper,
  Badge as BadgePaper
} from 'react-native-paper';

import { LinearGradient } from 'expo-linear-gradient';
import { ProgressCircle as ProgressCircleSVG } from 'react-native-svg-charts';

export const Box = styled.View`
  flex: 1;
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};

  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  max-height: ${(props) => props.height || 'auto'};

  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  padding-top: ${(props) =>
    props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${(props) =>
    props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};

  margin: ${(props) => props.spacing || 0};

  border-radius: ${(props) => (props.radius ? '5px' : '0px')};
  border: ${(props) => props.border || 'none'};
  
  background: ${(props) =>
    props.theme[props.background] || props.background || 'transparent'};
`;

export const ScrollBox = styled.ScrollView`
    width: 100%;
    background: ${(props) =>
      props.theme[props.background] || props.background || 'transparent'};

`;

export const Title = styled(TitlePaper)`
  color: ${(props) => props.theme[props.color || 'dark']};
  font-size: ${(props) => (props.small ? '22px' : props.big ? '35px' : '30px')};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  letter-spacing: -1px;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  line-height: ${(props) =>
    props.small ? '22px' : props.big ? '50px' : '30px'};
  text-align: ${(props) => props.align || 'left'};
  transform: ${(props) => (props.scale ? `scale(${props.scale})` : '')};
  font-family: 'Inter_700Bold';
`;

export const Spacer = styled.View`
  width: 100%;
  height: ${(props) => props.size || '10px'};
`;


export const Banner = styled.ImageBackground.attrs(props => ({
  resizeMode: props.mode || 'contain',
}))`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '100px'};
  margin: ${(props) => props.spacing || '0px'};
  border-radius: ${(props) => props.rounded || 0};
  overflow: hidden;
`;

export const Text = styled(TextPaper)`
  color: ${(props) => props.theme[props.color || 'text']};
  font-size: ${(props) => (props.small ? '12px' : '16px')};
  font-family: ${(props) =>
    props.bold ? 'Inter_700Bold' : 'Inter_300Light'};
  margin: ${(props) => props.spacing || 0};
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  line-height: ${(props) => (props.small ? '13px' : '20px')};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  opacity: ${(props) => (props.opacity || 0.7)};
  text-align: ${(props) => props.align || 'left'};
`;

export const Button = styled(ButtonPaper).attrs((props) => ({
  color:
    props.theme[props.background] || props.background || props.theme.primary,
  width: props.block ? '100%' : 'auto',
  padding: 8,
  uppercase: false,
  labelStyle: {
    color: props.theme[props.textColor || 'light'],
    letterSpacing: 0,
    fontFamily: 'Inter_300Light',
  },
}))``;

export const TextInput = styled(TextInputPaper).attrs(({theme}) => ({
  mode: 'outlined',
  outlineColor: theme.muted,
  underlineColor: theme.muted,
  selectionColor: theme.muted,
  theme: {
    colors: {
      background: theme.background_dark,
      placeholder: theme.muted,
      primary: theme.light,
      text: theme.light,
    }
  }
}))`
  height: 45px;
  width: 100%;
  font-size: 14px;
`;

export const GradientView = styled(LinearGradient)`
  flex: 1;
  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
`;

export const ProgressCircle = styled(ProgressCircleSVG).attrs(props => ({
  progressColor: props.theme[props.color] || props.theme.green,
  backgroundColor: props.theme[props.background] || props.theme.primary_variation,
}))`
  width: ${props =>props.size || '120px'};
  height: ${props =>props.size || '120px'};
  position: absolute;
`;

export const Touchable = styled.TouchableOpacity`
  flex: 1;
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};

  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  max-height: ${(props) => props.height || 'auto'};

  padding: ${(props) => (props.hasPadding ? '20px' : '0px')};
  padding-top: ${(props) =>
    props.removePaddingTop ? '0' : props.hasPadding ? '20px' : '0px'};
  padding-bottom: ${(props) =>
    props.removePaddingBottom ? '0' : props.hasPadding ? '20px' : '0px'};

  margin: ${(props) => props.spacing || 0};

  border-radius: ${(props) => (props.radius ? '5px' : '0px')};
  border: ${(props) => props.border || 'none'};
  
  background: ${(props) =>
    props.theme[props.background] || props.background || 'transparent'};
`;

export const ActivityIndicator = styled(ActivityIndicatorPaper).attrs(
  (props) => ({
    animating: true,
    color: props.theme[props.color || 'primary'],
})
)``;

export const FlatList = styled.FlatList`
  width: 100%;
`;

export const Badge = styled(BadgePaper)`
  align-self: ${(props) => props.align || 'center'};
  font-size: ${(props) => (props.big ? '18px': '12px')};
  padding: ${(props) => (props.big ? '2px 15px' : '0px 10px')};
  margin: ${(props) => (props.spacing || '0px')};
  color: ${(props) => props.theme [props.color || 'green']};
  background-color: ${(props) => props.theme [props.color || 'background_success']};
`;