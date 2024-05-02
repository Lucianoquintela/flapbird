import { View, ImageBackground,  } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}

const flapbird = {uri:'https://i.postimg.cc/jjmxWfL1/flappy-bird-sprite-removebg-preview.png'};
export function Ball({ posY }: Props) {
  return (
    <View style={[styles.container, {bottom: posY}]}>

       <ImageBackground source={flapbird} resizeMode="cover" style={styles.img}>
       </ImageBackground>
      
    </View>
  )
}