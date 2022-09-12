import { FC } from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

interface WorkingExpirienceProps {
  text?: string;
}

export const WorkingExpirience: FC<WorkingExpirienceProps> = ({ text }) => {
  const styles = StyleSheet.create({
    h1: {
      color: '#87CEEB',
      marginLeft: '2%',
      marginTop: '1%',
      marginBottom: 10,
    },
    text: {
      marginLeft: '2%',
      width: '26%',
    },
  });
  return (
    <View>
      <Text style={styles.h1}>Employment History</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
