import { Button, ButtonGroup, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import {  decrement, increment } from "./couterReducer"
import { useAppSelector } from "../../app/store/store"

export default function ContactPage() {
  const {data} = useAppSelector(state => state.counter)
  const dispatch  = useDispatch()
  return (
    <>
    <Typography variant="h2">
      Contact Page
    </Typography>
    <Typography variant="body1">
      The data is: {data}
    </Typography>
    <ButtonGroup>
      <Button onClick={()=> dispatch(decrement(1))} color="error">Decrement</Button>
      <Button onClick={()=> dispatch(increment(1))} color="secondary">Increment</Button>
      <Button onClick={()=> dispatch(increment(10))} color="secondary">Increment 10</Button>

    </ButtonGroup>
    </>
  )
}