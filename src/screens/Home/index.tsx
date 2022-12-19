import * as React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import { styles } from './styles';

export default function Home() {

    function handlePartipantAdd() {
        console.log("Você clicou!")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Hello</Text>


            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Insira seu texto"
                placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity 
                style={styles.button} 
                onPress={handlePartipantAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}