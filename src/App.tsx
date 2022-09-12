import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import styles from './AppStyles';
import { Heading } from './components/Heading/Heading';
import { Wrapper } from './components/Wrapper/Wrapper';
import { Profile } from './components/Profile/Profile';
import { personInfo } from './data/data';
import { WorkingExpirience } from './components/WorkingExpirience/WorlingExpirience';

function App() {
  return (
    <div className="App">
      <PDFViewer style={styles.pdf}>
        <Wrapper>
          <Heading name="Michael" surname="Klishin" jobTitle="Front-end Developer" />
          <Profile text={personInfo.profile} />
          <WorkingExpirience text={personInfo.workHistory} />
        </Wrapper>
      </PDFViewer>
    </div>
  );
}

export default App;
