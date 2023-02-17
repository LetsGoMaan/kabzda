import React from 'react';
import {UncontrolledRating} from "./UncontrolledRating";

export default {
  title: 'UncontrolledRating',
  component: UncontrolledRating,
};


export const EmptyRating = () =>  <UncontrolledRating />
// export const RatingChanging = () =>
// {
//   const [rating, setRating] = useState<RatingValueType>(3);
//
//   return <Rating value={rating} onClick={setRating}/>
// }




