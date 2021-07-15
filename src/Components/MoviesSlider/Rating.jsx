import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import { useEffect } from 'react';
const Ratingcompo=({rating})=>
{
    const[rate,setrate]= useState(()=>{
        return (
            parseFloat(rating)/2
            
        )
    });
   


    return (
      <>
        <Rating
          name='half-rating-read'
          defaultValue={rate}
          precision={0.1}
          readOnly
          className="Rating_Stars"
          font-size="xx-small"
        />
      </>
    );
}

export default Ratingcompo;