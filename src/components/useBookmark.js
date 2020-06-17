import { AsyncStorage } from 'react-native';

const BOOKMARK = 'bookmark_list';

const setBookmark = async (pageId) => {
    try{
        const current = await AsyncStorage.getItem(BOOKMARK)
        const oldListArray = current.split(",")
        oldListArray.unshift(pageId)
        const newListString = oldListArray.toString();
        await AsyncStorage.setItem(BOOKMARK, newListString)
    }
    catch{
        console.log(e)
    }
}

const removeBookmark = async(pageId) => {
    try{
        const current = await AsyncStorage.getItem(BOOKMARK)
        const oldListArray = current.split(",")
        const newArray = oldListArray.filter(item => item != pageId)
        const newListString = newArray.toString();
        await AsyncStorage.setItem(BOOKMARK, newListString)
    }
    catch{
        console.log(e)
    }
}

const getBookmark = async () => {
    try{
        const bookmarkList = await AsyncStorage.getItem(BOOKMARK)
        if (bookmarkList==="empty"){
            return [];
        }
        const listArray = bookmarkList.split(",");
        return listArray;
    }
    catch(error){
        console.log(error)
    }
}

const initializeBookmark = async () => {
    try{
        const initialized = await AsyncStorage.getItem(BOOKMARK)
        if (initialized === null){
            await AsyncStorage.setItem(BOOKMARK,"empty")
            return false;
        }
        return true
    }catch(e){
        console.log(e);
        return false;
    }
}


export {setBookmark,getBookmark,initializeBookmark, removeBookmark};