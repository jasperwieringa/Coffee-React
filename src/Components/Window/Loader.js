import React from 'react';

import Image from 'react-bootstrap/Image'
import alaminxyz from '../../images/alaminxyz.gif';

export default function Loader() {
  return (
    <Image className="w-100 h-100" src={alaminxyz}/>
  )
}