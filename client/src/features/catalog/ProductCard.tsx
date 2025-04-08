
import { Product } from '../../product'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { CardMedia } from '@mui/material'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
type Props = {
    product: Product
}
export default function ProductCard({ product }: Props) {
    return (
        <Card
            elevation={3}
            sx={{
                width: 280,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <CardMedia
                sx={{ height: 240, backgroundSize: 'cover' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    sx={{ textTransform: 'uppercase' }}
                    variant='subtitle2'
                >
                    {product.name}
                </Typography>
                <Typography
                    variant='h6'
                    sx={{ color: 'secondary.main' }}>
                    ${(product.price / 100).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ justifyContent: 'space-between' }}
            >
                <Button variant='contained'> Add to Cart </Button>
                <Button component={Link} to={`/catalog/${product.id}`}> View Details </Button>
            </CardActions>
        </Card>
    )
}
