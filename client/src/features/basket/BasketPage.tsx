import React from 'react'
import { useFetchBasketQuery } from './basketApi';
import { Typography } from '@mui/material';

export default function BasketPage() {
    const {data, isLoading} = useFetchBasketQuery();
    if(isLoading) return <div>Loading basket...</div>;
    if(!data) return <Typography variant='h3'>Your basket is empty</Typography>
  return (
    <div>{data.basketId}</div>
  )
}
