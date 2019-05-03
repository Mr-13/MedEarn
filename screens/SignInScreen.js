import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    AsyncStorage
} from "react-native";

import InputBox from '../components/InputBox';

class SignInScreen extends Component {

    signIn = async() => {
        await AsyncStorage.setItem('userToken','token');
        this.props.navigation.navigate('App');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>MedEarn</Text>
                <InputBox placeholder="Phone number, email address or username" />
                <InputBox placeholder="Password" />
                <Button title="Log In"
                    onPress={this.signIn} />
            </View>
        );
    }
}
export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});