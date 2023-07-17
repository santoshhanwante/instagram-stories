import React from 'react'
import { View } from 'react-native';
import Btn from './Button';
import { darkGreen, green } from './Constant';

const Home = (props) => {
    return (
        <View style={{margin: 20}}>
            <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
            <Btn bgColor='white' textColor={darkGreen} btnLabel="SignUp" Press={() => props.navigation.navigate("SignUp")} />
        </View>
    )
}

export default Home