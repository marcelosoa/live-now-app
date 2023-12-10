import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"

const firebaseConfig = {
  apiKey: "AIzaSyBtR94vNBCA9MEWnaPcbQjHBrguIM8dOl8",
  authDomain: "web-social-media-8af54.firebaseapp.com",
  projectId: "web-social-media-8af54",
  storageBucket: "web-social-media-8af54.appspot.com",
  messagingSenderId: "261089856759",
  appId: "1:261089856759:web:3a7abeaa8c39e68366d7f2"
};

const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})
export const auth = getAuth(app)