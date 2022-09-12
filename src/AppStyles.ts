import { StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
    pdf: {
      width: 1200,
      border: 0,
    },
    page: {
      width: 400,
    },
    viewer: {
      display: "flex",
      flexDirection: "column",
      width: window.innerWidth, //the pdf viewer will take up all of the width and height
      height: window.innerHeight,
    },
  });

  export default styles;