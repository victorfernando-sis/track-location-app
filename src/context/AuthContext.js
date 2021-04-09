import AsyncStorage from "@react-native-community/async-storage";
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload }
        case "signin":
            return { token: action.payload, errorMessage: '' }
        case "clearErrorMessage":
            return { ...state, errorMessage: "" }
        case "signout":
            return { token: null, errorMessage: "" }
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => () => { dispatch({ type: "clearErrorMessage" }) };

const automaticSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: "signin", payload: token });
        navigate('TrackList');
    } else {

        navigate('Signin');
    }

};

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: "signin", payload: response.data.token })
        navigate('TrackList');

    } catch (err) {
        console.log(err);
        dispatch({ type: "add_error", payload: "Something went wrong with signup!" });
    }

};

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: "signin", payload: response.data.token });
        navigate("TrackList");
    } catch (err) {
        dispatch({ type: "add_error", payload: "Signin did not go through! Try again." })
    };
};

const signout = dispatch => {
    return async () => {
        await AsyncStorage.removeItem('token')
        dispatch({ type: "signout" })
        navigate("Signin")
    };
};

export const { Context, Provider } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, automaticSignin },
    { token: null, erroMessage: '' }
);