import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const ExploreScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.ViewStyle}>
        <View style={styles.TextStyle}>
          <Text style={styles.Text}>
            Explore Screen
          </Text >
          <Button
            onPress={() => navigation.navigate('SettingScreen')}
            title="Go to Setting Screen"
          />
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Go to Home Screen"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ExploreScreen;
const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },
  ViewStyle: {
    flex: 1,
    padding: 18,
  },
  TextStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
  },
});
