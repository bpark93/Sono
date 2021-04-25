import React, {useState, useEffect} from 'react';
import {View, AsyncStorage, Platform, } from 'react-native'
import { Provider as PaperProvider, DefaultTheme, ActivityIndicator } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {LearnScreen,
  LearnModuleScreen,
  LearnDetailScreen,
  SearchScreen,
  SearchDetailScreen,
  SearchListScreen,
  BookmarkScreen,
  CasesDetailScreen,
  CasesListScreen,
  SettingsScreen,
  SettingsAuthScreen,
  SettingsHelpScreen,
  SettingsAboutScreen,
  SettingsCreditsScreen,
  LearnTestScreen,
  LearnTextScreen,
} from './screenIndex'
import Onboarding from './src/components/Onboarding'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import checkIfFirstLaunch from './src/components/checkIfFirstLaunch'
import {learnProgressInitialized} from './src/components/getLearnDatabase'
import {initializeBookmark} from './src/components/useBookmark'
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import {initializeRecentPages} from './src/components/RecentPages'


const Main = createMaterialBottomTabNavigator();
const Learn = createStackNavigator();
const Search = createStackNavigator();
const Bookmark = createStackNavigator();
const Settings = createStackNavigator();

function App() {

  // YellowBox.ignoreWarnings(['Setting a timer'])
  const [first, setFirst] = useState(null);
  useEffect(()=> {
    async function fetchData() {
      // await AsyncStorage.clear()
      const firstLaunch = await checkIfFirstLaunch();
      setFirst(firstLaunch);
    }
    fetchData();
  },[]);

  const [fontLoaded, setFontLoaded] = useState(false)
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Raleway-Regular': require('./assets/fonts/Raleway/Raleway-Regular.ttf'),
        'Raleway-Bold': require('./assets/fonts/Raleway/Raleway-Bold.ttf'),
        'Roboto-Black': require('./assets/fonts/Roboto/Roboto-Black.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
      })
      setFontLoaded(true);
    }
    loadFonts();
  },[]);

  const [assetsLoaded, setAssetsLoaded] = useState(false)
  useEffect(() => {
    async function loadAssets() {
      if (first) {
        await Asset.loadAsync([
          require('./assets/8535.jpg'),
          require('./assets/20945184.jpg'),
          require('./assets/6461.jpg'),
        ])
      }
      setAssetsLoaded(true)
    }
    loadAssets();
  })

  const [dataInitialized, setDataInitialized] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const learnDataInitialized = await learnProgressInitialized();
      if (learnDataInitialized) {
        setDataInitialized(true)
      } else{
        const tryAgain = await learnProgressInitialized();
        if (tryAgain) {setDataInitialized(true)};
      }      
    }
    fetchData();
  })

  const [bookmarkInitialized, setBookmarkInitialized] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const bookmarkReady = await initializeBookmark();
      if (bookmarkReady) {
        setBookmarkInitialized(true)
      } else{
        const tryAgain = await initializeBookmark();
        if (tryAgain) {setBookmarkInitialized(true)};
      }   
    }
    fetchData();
  })

  const [recentPagesInitialized, setRecentPagesInitialized] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const pagesReady = await initializeRecentPages();
      if (pagesReady){
        setRecentPagesInitialized(true)
      } else{
        const tryAgain = await initializeRecentPages();
        if (tryAgain) {setRecentPagesInitialized(true)}
      }
    }
    fetchData();
  })

  if (!fontLoaded || !dataInitialized || !bookmarkInitialized || !recentPagesInitialized || !assetsLoaded){
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}>
        <ActivityIndicator
          animating={true} 
          size='large'  
        />
      </View>
    )
  }
  
  if (first) {
    if (Platform.OS != "web"){
      return <Onboarding onDoneClick={(firstBool) => setFirst(firstBool)}/>
    } else {
      setFirst(false)
      return;
    }
  }

  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName='Library'
        backBehavior='initialRoute'
        style={{
          backgroundColor: '#ffffff',
        }}
        screenOptions={{
          headerShown: false,
          tabBarColor: '#FFFFFF'
        }}
        activeColor="#4f2683"
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
          name="Library"
          component={SearchNav} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="magnify" size={23} color={color}/>
            ),
          }}
        />
        <Main.Screen 
          name="Bookmarks" 
          component={BookmarkNav} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="bookmark-outline" color={color} size={23} />
            ),
          }}
        />
        <Main.Screen 
          name="More" 
          component={SettingsNav} 
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="dots-horizontal" color={color} size={23} />
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
        name="Modules" 
        component={LearnModuleScreen} 
        options={{
          headerShown: false
        }}
      />
      <Learn.Screen 
        name="LearnDetail" 
        component={LearnDetailScreen}
        options={{
          headerShown: false
        }}
      />
      <Learn.Screen 
        name="Test" 
        component={LearnTestScreen}
        options={{
          headerShown: false,
          gestureEnabled: false
        }}
      />
      <Learn.Screen 
        name="LearnText" 
        component={LearnTextScreen}
        options={{
          headerShown: false
        }}
      />
      <Learn.Screen 
        name="CasesDetail" 
        component={CasesDetailScreen}
        options={({route}) => ({title: route.params.id.title})}
      />
      <Learn.Screen 
        name="CasesList" 
        component={CasesListScreen}
        options={{
          title: "Cases",
          headerBackTitle:"Back"
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
          elevation:0
        },
        headerTitleStyle:{
          fontWeight:'bold',
        },
        headerBackTitle:"",
      }}
      initialRouteName="Search"
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
        options={{
          title:'',
        }}
      />
      <Search.Screen 
        name="TutorialList" 
        component={SearchListScreen} 
        options={{
          title:'',
        }}
      />
    </Search.Navigator>
  );
}

function BookmarkNav() {
  return (
    <Bookmark.Navigator
      screenOptions={{
        headerStyle:{
          shadowColor:'transparent',
          elevation:0
        },
        
      }}
    >
      <Bookmark.Screen 
        name="BookmarkMain" 
        component={BookmarkScreen}
        options={{
          title: 'Your Bookmarks'
        }}
      />
      
    </Bookmark.Navigator>
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
      }}
      initialRouteName="SettingsMain"
    >
      <Settings.Screen 
        name="SettingsMain" 
        component={SettingsScreen}
        options={{title: 'More'}}
      />
      <Settings.Screen 
        name="auth" 
        component={SettingsAuthScreen}
        options={{title: "Settings"}}
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
        options={{title: "About Sono"}}
      />
      <Settings.Screen 
        name="credits" 
        component={SettingsCreditsScreen}
        options={{title: "Meet our Team"}}
      />
    </Settings.Navigator>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 10,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4f2683',
    background: '#ffffff',
  },
  fonts:{
    regular: {
      fontFamily: Platform.OS === "android" ? "Roboto-Regular" : null
    },
    medium: {
      fontFamily: Platform.OS === "android" ? "Roboto-Medium" : null
    },
    light: {
      fontFamily: Platform.OS === "android" ? "Roboto-Light" : null
    },
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
