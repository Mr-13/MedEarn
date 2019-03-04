import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import {
    Card,
    CardItem,
    Thumbnail,
    Body,
    Left,
    Right,
    Button,
} from 'native-base';

import CardIcon from './CardIcon';

export default class CardComponent extends Component {
    render() {
    
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source= {{uri:'http://lorempixel.com/400/200/people/'}}/>
                        <Body>
                            <Text>Dharmendra</Text>
                           <Text note>Feb. 03, 2019</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Image style={styles.image} source= {{ uri: 'http://lorempixel.com/400/200/'}}/>
                </CardItem>
                <CardItem >
                <Left>
                    <Button transparent>
                    <CardIcon name='favorite-border' />
                    </Button>
                    <Button transparent>
                    <CardIcon name='chat-bubble-outline' />
                    </Button>
                </Left>
                <Right>
                <Button transparent>
                    <CardIcon name='bookmark-border' />
                    </Button>
                </Right>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 200,
        width: null,
        flex: 1,
    }
});