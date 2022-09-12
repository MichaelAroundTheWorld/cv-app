import { FC } from 'react';
import { View, StyleSheet, Image, Text } from '@react-pdf/renderer';
import avatar from '../../assets/avatar.jpg';

interface HeadingProps {
  name: string;
  surname?: string;
  jobTitle?: string;
}

export const Heading: FC<HeadingProps> = ({ name, surname, jobTitle }) => {
  const styles = StyleSheet.create({
    header: {
      height: '20%',
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#6495ED',
      alignItems: 'center',
    },
    img: {
      margin: 10,
      width: 150,
      height: 150,
      objectFit: 'cover',
    },

    data: {
      display: 'flex',
      flexDirection: 'column',
      color: '#191970',
    },

    text: {
      marginTop: '1%',
    },
    jobTitle: {
      color: '#87CEEB',
    },
  });
  return (
    <View style={styles.header}>
      <Image src={avatar} style={styles.img} />
      <View style={styles.data}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>{surname}</Text>
        <Text style={styles.jobTitle}>{jobTitle}</Text>
      </View>
    </View>
  );
};
