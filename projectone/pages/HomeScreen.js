import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.ViewStyle}>
        <View style={styles.TextStyle}>
          <Text style={styles.Text}>
            Home Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('SettingScreenStack')}
            title="Go to Setting Screen"
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
export default HomeScreen;
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