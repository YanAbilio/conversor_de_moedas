import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        color: colors.textSecondary,
        marginBottom: 8,
        fontSize: 14,
    },
    input: {
        backgroundColor: colors.inputBackground,
        borderRadius: 8,
        padding: 16,
        fontSize: 24,
        color: colors.text,
        fontWeight: 'bold',
    },
});