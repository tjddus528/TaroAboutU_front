import React from 'react';
import { TouchableOpacity, Text,} from 'react-native';

const MyButton = () => {
    
    return (
        <TouchableOpacity
            style={{ 
            backgroundColor: '(0,0,0,0.5)',
            margin: 10,
            }}
            OnPress={() => navigation.navigate('ResultYesOrNo', {cardId: randomId})}
        >
            <Text style={{ color: 'white', fontSize: 28, textAlign:"center"}}>Next</Text>
        </TouchableOpacity>
    );
};

export default MyButton;