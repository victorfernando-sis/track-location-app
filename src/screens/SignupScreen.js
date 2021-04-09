import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage,automaticSignin } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />

            <AuthForm
                title="Signup For Tracker"
                onSubmit={signup}
                submitLabel="Sign up"
                errorMessage={state.errorMessage}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
        </View>
    )
};

SignupScreen.navigationOptions = () => {
    return { headerShown: false }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 250
    }
});

export default SignupScreen;