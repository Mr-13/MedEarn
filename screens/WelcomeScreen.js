import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class WelcomeScreen extends Component {
    render() {
        Button
        return (
            <View style={styles.container}>
                <Text>MedEarn</Text>
                <Button style={styles.signupbutton} title="Create New Account"
                    onPress={() => this.props.navigation.navigate('SignUp')} />
                <Button title="Log In"
                    onPress={() => this.props.navigation.navigate('SignIn')} />
            </View>
        );
        Button
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupbutton: {
        flex: 1, 
    }
});