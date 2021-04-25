import { AsyncStorage } from 'react-native';

const HAS_LAUNCHED = 'hasLaunched';

const setAppLaunched = async () => {
    try{
        await AsyncStorage.setItem(HAS_LAUNCHED,'true')
    }catch(e){
        return;
    }
}

export default async function checkIfFirstLaunch(){
    try{
        const hasLaunched = await AsyncStorage.getItem(HAS_LAUNCHED);
        if (hasLaunched === null) {
            setAppLaunched();
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
}