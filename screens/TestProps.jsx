import React from "react";
import {View, Text,Button} from 'react-native';
import {sumTwoNumber, truTwoNumber} from '../utilities/Calculator'


function DuyScreen(props) {
    return (
        <View>
            <Text>This is Intro</Text>
            <Text>{props.x} + {props.y}</Text>
            <Text>{props.fruit.name} + {props.fruit.quality}</Text>

            <Text>Tổng của {props.x} và {props.y} là = {sumTwoNumber(props.x, props.y)}</Text>
        </View>
    );
}

export default DuyScreen;