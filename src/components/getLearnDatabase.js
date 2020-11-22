import { AsyncStorage } from 'react-native';
import { learnDatabase } from '../../database'

const LEARN_PROGRESS_SYNCED = 'learn_progress_synced';

const learnProgressInitialized = async () => {
    try{
        const hasSynced = await AsyncStorage.getItem(LEARN_PROGRESS_SYNCED)
        if (hasSynced === null){
            learnDatabase.forEach(item => {
                Object.entries(item.pages).forEach(section => { // ["name", [obj, obj...]]
                    section[1].forEach(page => {
                        AsyncStorage.setItem(`learn_progress_${page.id}`,"0")
                    })
                })
            });
            await AsyncStorage.setItem('learn_progress_synced',"true")
            return false;
        }
        return true
    }catch(e){
        console.log(e);
        return false;
    }
}

const setLearnProgress = async (id, number) => {
    try{
        await AsyncStorage.setItem(`learn_progress_${id}`,number)
    }catch(e){
        console.log(e);
    }
}

const getLearnProgress = async (id) => {
    try{
        const database = await AsyncStorage.getItem(`learn_progress_${id}`);
        if (database === null){
            setLearnProgress(id, "0")
            return "0"
        }
        return database;
    } catch (e) {
        console.log(e)
        return false;
    }
}

export {setLearnProgress, getLearnProgress, learnProgressInitialized};