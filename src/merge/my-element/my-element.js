import React from 'react';
import PropTypes from 'prop-types';

// Import the LitElement component
import { MyElement as MyElementM } from '../../../my-element';
// import useCustomElement to bridge web components to React
import useCustomElement from 'use-custom-element';

function MyElement(props) {
  const [customElementProps, ref] = useCustomElement(props);
  // Return the web component
  return <my-element {...customElementProps} ref={ref}><p>This is child content</p></my-element>;
}

MyElement.propTypes = {
   label: PropTypes.string
}

export default MyElement;
