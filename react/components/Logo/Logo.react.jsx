import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <span>U</span>
        <span dangerouslySetInnerHTML={{__html: '<svg viewBox="0 0 108 171" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"><g id="Logo" sketch:type="MSArtboardGroup" transform="translate(-106.000000, -24.000000)"><g sketch:type="MSLayerGroup" transform="translate(122.000000, 40.000000)"><path d="M0.0906912001,35 C-1.08676757,9 9.09069316,8.43508121e-08 37.0906912,0 C65.0906892,-8.4350809e-08 75.0906906,12 75.0906912,35 C75.0906918,58 37.0906906,75 37.0906906,75 L38.0906906,116" id="Path-1" stroke="#FDFCFE" stroke-width="32" sketch:type="MSShapeGroup"></path><polygon id="Triangle-1" fill="#FDFCFE" sketch:type="MSShapeGroup" transform="translate(38.500000, 140.000000) scale(1, -1) translate(-38.500000, -140.000000) " points="38.5 125 76 155 1 155 "></polygon></g></g></g></svg>'}} />
      </div>
    )
  }
}

export default Logo;
