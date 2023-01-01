import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Partipant';

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [participantName, setParticipantName] = useState<string>('');

    function handlePartipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Erro ao Cadastrar", "Já existe um participante com esse nome.")
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {


        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: "Sim",
                onPress: () => setParticipants(prevState => (prevState.filter(participant => participant !== name)))

            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>I'm Here</Text>


            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu texto"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={handlePartipantAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />


                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmpty}>Não foram encontrados participantes cadastrados.</Text>
                )}
            />

        </View>
    )
}