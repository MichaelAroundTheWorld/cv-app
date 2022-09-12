import { FC, PropsWithChildren } from 'react';
import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  const styles = StyleSheet.create({
    page: {
      width: 400,
    },
    viewer: {
      display: 'flex',
      flexDirection: 'column',
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });
  return (
    <Document>
      {/*render a single page*/}
      <Page size="A4" style={styles.page}>
        <View style={styles.viewer}>{children}</View>
      </Page>
    </Document>
  );
};
