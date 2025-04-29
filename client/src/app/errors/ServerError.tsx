import { Divider, Paper, Typography } from "@mui/material"
import { useLocation } from "react-router-dom";

function ServerError() {
  const { state } = useLocation();

  return (
    <Paper>
      {state.error ? (
        <>
          <Typography variant="h3" sx={{ px: 4, pt: 2 }} color="secondary" gutterBottom>
            {state.error.title}
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ p: 4 }}>
            {state.errorr.detail}
          </Typography>
        </>
      ) : (
        <Typography variant="h5">Server Error</Typography>
      )}
    </Paper>
  )
}
export default ServerError