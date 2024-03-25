import React, { useState } from "react"
import { Text, TouchableOpacity, Image } from 'react-native'
import { icons } from '../constants/manager'


function UIButton({ event, title }) {
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
            }}>       

            <Text style={{ color: 'white', fontWeight: 'bold', }}>
                {title}
            </Text>

        </TouchableOpacity>
    )
};

export default UIButton