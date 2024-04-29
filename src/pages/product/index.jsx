import React from 'react'
import { useParams } from 'react-router-dom'
import { Primary } from '../../components';
import { porductLayout } from '../../constants';

const Product = () => {
    const {product}=useParams();
  return (
    <div>
        {porductLayout.map(({heading,picture,contentArray,link},index)=>(
            <>
            {link===product &&<><Primary heading={heading} picture={picture} contentArray={contentArray} /></>}
            </>
        ))}
    </div>
  )
}

export default Product
