import React, {useState, useEffect} from 'react';
import {View} from 'react-native'
import { Provider as PaperProvider, DefaultTheme, ActivityIndicator } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {LearnScreen,
  LearnModuleScreen,
  LearnDetailScreen,
  SearchScreen,
  SearchDetailScreen,
  CasesScreen,
  CasesDetailScreen,
  SettingsScreen,
  SettingsAuthScreen,
  SettingsHelpScreen,
  SettingsAboutScreen,
} from './screenIndex'
import Onboarding from './src/components/Onboarding'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import checkIfFirstLaunch from './src/components/checkIfFirstLaunch'
import * as Font from 'expo-font';

const Main = createMaterialBottomTabNavigator();
const Learn = createStackNavigator();
const Search = createStackNavigator();
const Cases = createStackNavigator();
const Settings = createStackNavigator();

function App() {

  const [first, setFirst] = useState(null);
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(()=> {
    async function fetchData() {
      const firstLaunch = await checkIfFirstLaunch();
      setFirst(firstLaunch);
    }
    fetchData();
  },[]);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Raleway-Regular': require('./assets/fonts/Raleway/Raleway-Regular.ttf'),
        'Raleway-Medium': require('./assets/fonts/Raleway/Raleway-Medium.ttf'),
        'Raleway-Thin': require('./assets/fonts/Raleway/Raleway-Thin.ttf'),
        'Raleway-Light': require('./assets/fonts/Raleway/Raleway-Light.ttf'),
        'Raleway-Bold': require('./assets/fonts/Raleway/Raleway-Bold.ttf'),
      })
      setFontLoaded(true);
    }
    loadFonts();
  },[]);

  if (!fontLoaded){
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <ActivityIndicator
          animating={true} 
          size='large'  
        />
      </View>
    )
  }
  
  if (first) { // FIX BACK TO FIRST WHEN DONE DEVLOPING
    return <Onboarding onDoneClick={(firstBool) => setFirst(firstBool)}/>
  }

  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName='Learn'
        backBehavior='initialRoute'
        // tabBarPosition='bottom'
        style={{
          backgroundColor: '#ffffff',
        }}
        screenOptions={{
          headerShown: false,
          tabBarColor: '#FFFFFF'
        }}
        activeColor="#7b1fa2"
        inactiveColor="#8e8e93"
      >
        <Main.Screen 
          name="Learn" 
          component={LearnNav}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="lightbulb-on-outline" color={color} size={23} />
            ),
          }} 
        />
        <Main.Screen 
          name="Library" //CHANGED FROM SEARCH
          component={SearchNav} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="magnify" color={color} size={23} />
            ),
          }}
        />
        <Main.Screen 
          name="Cases" 
          component={CasesNav} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="stethoscope" color={color} size={23} />
            ),
          }}
        />
        <Main.Screen 
          name="Settings" 
          component={SettingsNav} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="settings" color={color} size={23} />
            ),
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  )
}

function LearnNav() {
  return (
    <Learn.Navigator
      screenOptions={{
        headerStyle:{
          shadowColor:'transparent',
          elevation:0
        },
        headerTitleStyle:{
          fontFamily:'Raleway-Medium'
        }
      }}
    >
      <Learn.Screen 
        name="LearnMain" 
        component={LearnScreen} 
        options={{
          headerShown: false
        }}
      />
      <Learn.Screen 
        name="LearnModule" 
        component={LearnModuleScreen} 
        options={
          ({route}) => ({title: route.params.id.title})}
      />
      <Learn.Screen 
        name="LearnDetail" 
        component={LearnDetailScreen}
        options={{
          title:'',
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
        }}
      />
    </Learn.Navigator>
  );
}

function SearchNav() {
  return (
    <Search.Navigator
      screenOptions={{
        headerStyle:{
          shadowColor:'transparent',
          elevation:0
        },
        headerTitleStyle:{
          fontFamily:'Raleway-Medium'
        }
      }}
    >
      <Search.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          headerShown: false
        }}
      />
      <Search.Screen 
        name="SearchDetail" 
        component={SearchDetailScreen} 
        options={({route}) => ({title: route.params.id.title})}
      />
    </Search.Navigator>
  );
}

function CasesNav() {
  return (
    <Cases.Navigator
      screenOptions={{
        headerStyle:{
          shadowColor:'transparent',
          elevation:0
        },
        headerTitleStyle:{
          fontFamily:'Raleway-Medium'
        }
      }}
    >
      <Cases.Screen 
        name="CasesMain" 
        component={CasesScreen}
        options={{
          title: 'Case of the Week'
        }}
      />
      <Cases.Screen 
        name="CasesDetail" 
        component={CasesDetailScreen}
        options={({route}) => ({title: route.params.id.title.rendered})}
      />
    </Cases.Navigator>
  );
}

function SettingsNav() {
  return (
    <Settings.Navigator
      screenOptions={{
        headerStyle:{
          shadowColor:'transparent',
          elevation:0
        },
        headerTitleStyle:{
          fontFamily:'Raleway-Medium'
        }
      }}
    >
      <Settings.Screen 
        name="SettingsMain" 
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
      <Settings.Screen 
        name="auth" 
        component={SettingsAuthScreen}
        options={{title: "Sign In / Sign Up"}}
      />
      <Settings.Screen 
        name="help" 
        component={SettingsHelpScreen}
        options={{
          title: "Help",
        }}
      />
      <Settings.Screen 
        name="about" 
        component={SettingsAboutScreen}
        options={{title: "About Application"}}
      />
    </Settings.Navigator>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7b1fa2',
    background: '#ffffff',
  },
  fonts: {
    regular: {
      fontFamily: 'Raleway-Regular',
    }
  }
};

export default () => {
  return (
    <PaperProvider 
      theme={theme}
    >
      <App />
    </PaperProvider>
  )
}
