import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { styles } from './styles';
import { Ball } from './components/Ball';

let timer: number;

// https://wallpapercave.com/wp/wp6956942.png

export default function App() {
  // Valor da gravidade da terra
  const [gravity, setGravity] = useState(0.98);

  const [upForce, setUpForce] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [posY, setPosY] = useState(0);

  // Efeito colateral
  useEffect(() => {
    const applyGravity = () => {
      // decremento da gravidade
      let newUpForce = upForce - gravity;
      newUpForce = newUpForce < 0 ? 0 : newUpForce;
      setUpForce(newUpForce);

      // modificador da velocidade
      let newSpeed = speed + (gravity - newUpForce / 2);
      setSpeed(newSpeed);

      // calculo da posição da bolinha
      let newPosY = posY - newSpeed;

      if (newPosY < 0) {
        newPosY = 0;
        setSpeed(0);
      }
      setPosY(newPosY);
    };

    clearTimeout(timer);

    timer = setTimeout(applyGravity, 30);
  }, [gravity, upForce, speed, posY]);

  const handleForceButton = () => {
    setUpForce(7);
  };

  const fundo = { uri: 'https://wallpapercave.com/wp/wp6956942.png' };

  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.area}>
        <ImageBackground
        source={fundo}
        resizeMode="cover"
        style={styles.fundoImg}>
          <Ball posY={posY} />
          </ImageBackground>
        </View>

        <View style={styles.control}>
          <View>
            <Text style={styles.controlText}>
              UpForce: {upForce.toFixed(2)}
            </Text>
            <Text style={styles.controlText}>Speed: {speed.toFixed(2)}</Text>
            <Text style={styles.controlText}>PosY: {posY.toFixed(2)}</Text>
          </View>

          <TouchableOpacity
            style={styles.controlButton}
            onPress={handleForceButton}>
            <Text style={styles.controlText}>CLICK</Text>
          </TouchableOpacity>
        </View>
      
    </SafeAreaView>
  );
}
