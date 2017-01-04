import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// eslint-disable-next-line
import reactLogoInline from '!raw-loader!../../images/logos/react.svg';
import styles from './styles.css';
import Text from '../../components/Text';
import reactLogo from '../../images/logos/react.svg';

const urlSvg = (
  <Text>
    This is the image loaded directly from a file.
    <img src={reactLogo} alt="React Logo" width="600" />
  </Text>
);

const inlineSvg = (
  <Text>
      This SVG was written directly on the HTML and the background color was
      modified using CSS styles.
      <span
        className={styles.svgContainer}
        dangerouslySetInnerHTML={{ __html: reactLogoInline }}
      />
  </Text>
);

const renderContent = (type) => {
  switch (type) {
    case 'inline':
      return inlineSvg;
    default:
      return urlSvg;
  }
};


const Images = ({ params }) => (
  <div>
    <h1>Images</h1>
    <Link to="/images/file">File</Link>
    {' | '}
    <Link to="/images/inline">Inline</Link>
    {renderContent(params.type)}
  </div>
);

Images.propTypes = {
  params: PropTypes.shape({
    type: PropTypes.string
  })
};

export default Images;
