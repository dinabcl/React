import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Project from '../components/Project';
import StudentInfo from '../components/Project';

const ProfileScreen = () => {
    return(
        <View style={styles.screen}>
                <StudentInfo 
                fullname ="John Doe"
                jobPosition="UI/UX Designer"
                desc="We're passionete about creating beautiful design for startups & leading brands"
                image={require('../../assets/Avatar-4.jpg')}
                />
            <View style={styles.heading}>  
                <Text style={styles.text}>PROJeCTS</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}></Text>
                </TouchableOpacity>
            </View>
            <Project first={require('../../assets/project-1.jpg')} second={require('../../assests/project1-2.png')}></Project>
        </View>
    );
}

const styles = StyleSheet.create({
    heading:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center',
        marginTop: 15
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    },
    screen:{
        backgroundColor: 'white'
    },
    btnText: {
        fontWeight: 'bold',
        color: 'white'
    },
    btn: {
        backgroundColor: '#FFD700'
    }
})