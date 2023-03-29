import  React, {useState} from 'react';
import { StatusBar} from 'expo-status-bar';
import { StyleSheet, 
        ImageBackground,
        View, 
        TouchableWithoutFeedback, 
        Keyboard,  
} from 'react-native';

import  RegistrationScreen from './src/Screens/RegistrationScreen';
import  LoginScreen from './src/Screens/LoginScreen';

export default function App() {
  const [activeScreen, setActiveScreen] = useState(0);
  
  const changeScreen = (value) => {
    setActiveScreen(value);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <ImageBackground source={require("./assets/bg-image.jpg")} style={styles.image}>
      {activeScreen === 0 ? (<LoginScreen changeScreen={changeScreen}/>) : (<RegistrationScreen changeScreen={changeScreen}/>)}
      </ImageBackground>
     <StatusBar style="auto"/>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: "flex-end",
    width: "100%",
  },
});