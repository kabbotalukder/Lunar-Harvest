import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, Entypo, FontAwesome } from '@expo/vector-icons';
// import RNPickerSelect from 'react-native-picker-select';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>LunarHarvest</Text>
        <Entypo name="menu" size={32} color="black" />
      </View>
      <View style={styles.grid}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RainPrediction')}>
          <MaterialCommunityIcons name="weather-rainy" size={40} color="black" />
          <Text style={styles.buttonText}>Rain</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('FEATURE UNDER DEVELOPMENT')}>
          <FontAwesome name="tint" size={40} color="black" />
          <Text style={styles.buttonText}>Water</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('FEATURE UNDER DEVELOPMENT')}>
          <MaterialCommunityIcons name="shovel" size={40} color="black" />
          <Text style={styles.buttonText}>Soil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('FEATURE UNDER DEVELOPMENT')}>
          <MaterialCommunityIcons name="sprout" size={40} color="black" />
          <Text style={styles.buttonText}>Farming</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('FEATURE UNDER DEVELOPMENT')}>
          <FontAwesome name="book" size={40} color="black" />
          <Text style={styles.buttonText}>Knowledge Center</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert('FEATURE UNDER DEVELOPMENT')}>
          <MaterialCommunityIcons name="account-group" size={40} color="black" />
          <Text style={styles.buttonText}>Social</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import rainfallDataFile from './assets/rainfall_predictions.json';

function RainfallPredictionScreen({ navigation }) {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const data = rainfallDataFile.rainfallData;
    setPredictions(data);
  }, []);

  return (
    <ScrollView contentContainerStyle={rainfall_styles.container}>

      <View style={rainfall_styles.header}>
        <Entypo name="chevron-left" size={32} color="black" onPress={() => navigation.goBack()} />
        <Text style={rainfall_styles.logo}>LunarHarvest</Text>
        <Entypo name="menu" size={32} color="black" />
      </View>

      <Text style={rainfall_styles.title}>Rainfall Prediction</Text>

      {/* Monthly cumulative prediction */}
      {/* <View style={rainfall_styles.cumulativeContainer}>
        <Text style={rainfall_styles.cumulativeText}>Predicted Monthly Cumulative (November)</Text>
        <Text style={rainfall_styles.cumulativeValue}>{totalRainfall.toFixed(2)}mm / 297.30mm</Text>
      </View> */}

        <View style={rainfall_styles.tableHeader}>
          <Text style={rainfall_styles.tableHeaderText}>Date</Text>
          <Text style={rainfall_styles.tableHeaderText}>Prediction (mm)</Text>
        </View>

        <ScrollView style={rainfall_styles.scrollRow}>
          <View style={rainfall_styles.table}>
            {predictions.map((item, index) => (
              <View key={index} style={rainfall_styles.tableRow}>
                <Text style={rainfall_styles.tableCell}>{item.date}</Text>
                <Text style={rainfall_styles.tableCell}>{item.predicted_rainfall}</Text>
              </View>
            ))}
          </View>
      </ScrollView>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RainPrediction" component={RainfallPredictionScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const rainfall_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6B8E23',
    marginBottom: 20,
  },
  cumulativeContainer: {
    backgroundColor: '#E0FFD6',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  cumulativeText: {
    fontSize: 16,
    color: '#6B8E23',
    fontWeight: 'bold',
  },
  cumulativeValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  table: {
    width: '90%',
    backgroundColor: '#f6ffc8',
    borderRadius: 10,
    padding: 10,
  },
  tableHeader: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E0FFD6',
    padding: 10,
    borderRadius: 5,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollRow: {
    width: '100%',
    marginLeft: 43
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tableCell: {
    fontSize: 16,
    color: '#333',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E8B57',
  },
  grid: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#efffdb',
    width: '40%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    elevation: 2,
  },
  buttonText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  alert: {
    color: 'red',
    fontSize: 16,
    marginBottom: 30,
  },
  dropdownContainer: {
    width: '80%',
    marginTop: 20,
  },
});
