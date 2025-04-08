import { useEffect, useState } from "react";
import { Product } from "../../product";
import { useParams } from "react-router-dom";
import { Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    fetch(`https://localhost:5001/api/products/${id}`)
      .then(respone => respone.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error))
  }, [id]);
  if (!product) return <div>Loading...</div>
  const productDetails = [
    { label: 'Name', value: product.name },
    { label: 'Description', value: product.description },
    { label: 'Type', value: product.type },
    { label: 'Brand', value: product.brand },
    { label: 'Quantity in stock', value: product.quantityInStock },

  ]
  return (
    <div>
      <Grid2 container spacing={6} maxWidth='lg' sx={{ mx: 'auto' }}>
        <Grid2 size={6}>
          <img src={product?.pictureUrl} alt={product?.name} style={{ width: '100%' }} />
        </Grid2>
        <Grid2 size={6}>
          <Typography variant="h3">{product.name}</Typography>
          <Divider sx={{ mb: 2 }}></Divider>
          <Typography variant="h4" color="secondary">${(product.price / 100).toFixed(2)}</Typography>
          <TableContainer>
            <Table sx={{'& td':{fontSize:'1rem'}}}>
              <TableBody>
                {productDetails.map((detail, index) => (
                  <TableRow key={index}>
                <TableCell sx={{fontWeight: 'bold'}}>{detail.label}</TableCell>
                <TableCell>{detail.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Grid2 container spacing={2} marginTop={3}>
            <Grid2 size={6}>
              <TextField
                variant="outlined"
                type="number"
                label='Quantity in Stock'
                fullWidth
                defaultValue={1}
              />
            </Grid2>
            <Grid2 size={6}>
              <Button
              sx={{height: '55px'}} 
                color="primary"
                variant="contained"
                size="large"
                fullWidth>
                Add to cart
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  )
}