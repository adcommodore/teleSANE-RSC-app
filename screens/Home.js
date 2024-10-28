import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
        <LinearGradient
            colors={['#005994', '#032e53']}
            style={styles.background}
        />
        <Image style={{maxHeight: 300, maxWidth: 300}} source={require('../assets/dphlogo.png')}/>
        <Text style={styles.h1}>TeleSANE</Text>
        <Text style={styles.h2}>Remote Site Clinician</Text>
        <Text style={styles.h2}>Portal</Text>
        <Button 
            title='Sign In'
            onPress={() => navigation.navigate('Menu')}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: height,
    },
    h1: {
        fontSize: 44, 
        color: 'white'
    },
    h2: {
        fontSize: 34, 
        color: 'white'
    }
});

