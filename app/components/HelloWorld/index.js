import React from 'react';

// images:
import reactLogoInline from '!raw!../../images/logos/react.svg';
import reactLogo from '../../images/logos/react.svg';

import Text from '../Text';
import styles from './styles.css';

const images = {
  logos: {
    react: reactLogo
  },
  inline: {
    logos: {
      react: reactLogoInline
    }
  }
};


const HelloWorld = () => (
  <div>
    <div className={styles.header}>
      <h1 className={styles.pulseAnimation}>Hello world!</h1>
    </div>

    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially unchanged.
      It was popularised in the 1960s with the release of Letraset sheets
      containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </Text>

    <Text>
      This is the image loaded directly from a file
      <img src={images.logos.react} alt="React Logo" width="200" />
    </Text>

    <Text>
      This SVG was written directly on the HTML and the background color was
      modified using CSS styles.
      <span
        className={styles.svgContainer}
        dangerouslySetInnerHTML={{ __html: images.inline.logos.react }}
      />
    </Text>

    <div className={styles.footer}>
      <p className={styles.pulseAnimation} style={{ textAlign: 'center' }}>
        Footer
      </p>
    </div>
  </div>
);

export default HelloWorld;
