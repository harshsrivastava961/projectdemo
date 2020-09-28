import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const SettingScreen = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.ViewStyle}>
        <View style={styles.TextStyle}>
          <Text style={styles.Text}>
            Setting Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('HomeScreen')}
            title="Go to Home Screen"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="Go to Explore Screen"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SettingScreen;
const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },
  ViewStyle: {
    flex: 1,
    padding: 16,
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