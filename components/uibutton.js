import React, { useState } from "react"
import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';


function UIButton({ event, title, isSelected }) {
    return (
        <TouchableOpacity
            onPress={event}
            style={{
                width: 200,
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 10,
                flexDirection: 'row',
                marginHorizontal: 10,
                marginVertical: 10,
                backgroundColor: isSelected == true ? 'white' : null
            }}>
            {isSelected == true &&
                <Icon name="rocket" size={20} style={{
                    color: 'green',
                    marginRight: 10,

                }} />}

            <Text style={{
                color: isSelected == true ? 'green' : 'white',
                fontWeight: 'bold',

            }}>{title}</Text>

        </TouchableOpacity>
    )
};

export default UIButton