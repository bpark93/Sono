import { AsyncStorage } from "react-native";

const BOOKMARK = "bookmark_list";
const LIBRARYBOOKMARKS = "library_bookmark_list";

const setBookmark = async (pageId, source) => {
  if (source === "learn") {
    try {
      const current = await AsyncStorage.getItem(BOOKMARK);
      const oldListArray = current.split(",");
      oldListArray.unshift(pageId);
      const newListString = oldListArray.toString();
      await AsyncStorage.setItem(BOOKMARK, newListString);
    } catch {
      return;
    }
  } else if (source === "lib") {
    try {
      const current = await AsyncStorage.getItem(LIBRARYBOOKMARKS);
      if (current === null) {
        const newListString = [...pageId].toString();
        await AsyncStorage.setItem(LIBRARYBOOKMARKS, newListString);
      } else {
        const oldListArray = current.split(",");
        oldListArray.unshift(pageId);
        const newListString = oldListArray.toString();
        await AsyncStorage.setItem(LIBRARYBOOKMARKS, newListString);
      }
    } catch (e) {
      return;
    }
  }
};

const removeBookmark = async (pageId, source) => {
  if (source === "learn") {
    try {
      const current = await AsyncStorage.getItem(BOOKMARK);
      const oldListArray = current.split(",");
      const newArray = oldListArray.filter((item) => item != pageId);
      const newListString = newArray.toString();
      await AsyncStorage.setItem(BOOKMARK, newListString);
    } catch {
      return;
    }
  } else if (source === "lib") {
    try {
      const current = await AsyncStorage.getItem(LIBRARYBOOKMARKS);
      const oldListArray = current.split(",");
      const newArray = oldListArray.filter((item) => item != pageId);
      const newListString = newArray.toString();
      await AsyncStorage.setItem(LIBRARYBOOKMARKS, newListString);
    } catch {
      return;
    }
  }
};

const getBookmark = async (source) => {
  if (source === "learn") {
    try {
      const bookmarkList = await AsyncStorage.getItem(BOOKMARK);
      if (bookmarkList === "empty") {
        return [];
      }
      const listArray = bookmarkList.split(",");
      return listArray;
    } catch (error) {
      return;
    }
  } else if (source === "lib") {
    try {
      const bookmarkList = await AsyncStorage.getItem(LIBRARYBOOKMARKS);
      if (bookmarkList === null) {
        return [];
      }
      const listArray = bookmarkList.split(",");
      return listArray;
    } catch (error) {
      return;
    }
  }
};

const initializeBookmark = async () => {
  try {
    const initialized = await AsyncStorage.getItem(BOOKMARK);
    const initializedLib = await AsyncStorage.getItem(LIBRARYBOOKMARKS);

    if (initialized === null) {
      await AsyncStorage.setItem(BOOKMARK, "empty");
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};

export { setBookmark, getBookmark, initializeBookmark, removeBookmark };
