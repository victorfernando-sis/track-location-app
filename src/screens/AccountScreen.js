import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from "../components/Spacer";
import { Context } from '../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';


const AccountScreen = () => {
    const { signout } = useContext(Context);
    return <SafeAreaView forceInset={{top:'always'}}>

        <Text style={{ fontSize: 48 }}> AccountScreen</Text>
        <Spacer>
            <Button title=" Signout"
                onPress={signout} />
        </Spacer>
    </SafeAreaView>
};

AccountScreen.navigationOptions = {
    title:"Account",
    tabBarIcon: <FontAwesome name="gear" size={20}/>
}

const styles = StyleSheet.create({});

export default AccountScreen;