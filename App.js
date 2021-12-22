import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
  const handlePress = () => {console.log("Pressed")}
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>Hey Bud</Text>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300",
      }} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
