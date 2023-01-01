import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        padding: 24
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36, 
        marginBottom: 42
    },

    eventName: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 60
    },

    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFFFFF',
        padding: 16,
        marginRight: 12
    
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 24
    },
    listEmpty: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})