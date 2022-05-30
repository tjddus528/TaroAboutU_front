import React from 'react';
import { TouchableOpacity, Text,} from 'react-native';

const MyButton = ({onPress}) => {
    
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: '(0,0,0,0.5)',
                margin: 10,
            }}
            
        >
            <Text style={{ color: 'white', fontSize: 30, textAlign:"center"}}>NEXT</Text>
        </TouchableOpacity>
    );
};

export default MyButton;