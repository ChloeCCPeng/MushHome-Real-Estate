import React from 'react'
import Footer from './Footer'
import Faq from 'react-faq-component';


const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
    }]
}

const styles = {
  bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  rowContentColor: 'grey',
  arrowColor: "red",
};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true
};

function SaleFAQ() {
  return (
    <>
      <h1>Frequent Asked Questions</h1>

      <Faq data={data} styles={styles} config={config}/>

    </>
  )
}

export default SaleFAQ