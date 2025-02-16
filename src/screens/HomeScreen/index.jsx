import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao MeuApp!</Text>
      <Button title="Clique Aqui" onPress={() => alert('Botão pressionado!')} />
    </View>
  );
};

export default HomeScreen;
