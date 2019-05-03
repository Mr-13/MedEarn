import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    AsyncStorage
} from "react-native";

class SettingsScreen extends Component {

    logOut = async() => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('AuthLoading');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>SettingsScreen</Text>
                <Button title='Log Out' onPress={this.logOut}/>
            </View>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});