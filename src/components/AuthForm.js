import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';


const AuthForm = ({ title, onSubmit, submitLabel, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <Spacer>
                <Text h3> {title}</Text>
            </Spacer>
            <Input
                label="Email"
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={setEmail} />
            <Spacer />
            <Input
                secureTextEntry
                label="Password"
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={setPassword} />
            {{ errorMessage } ? (<Text style={styles.errorMessage}>{errorMessage}</Text>) : null}
            <Spacer>
                <Button title={submitLabel}
                    onPress={() => { onSubmit({ email, password }) }}
                />
            </Spacer>
        </View>
    );
};

const styles = StyleSheet.create({
    errorMessage: {
        margin: 15,
        fontSize: 16,
        color: "red"
    }
});


export default AuthForm;