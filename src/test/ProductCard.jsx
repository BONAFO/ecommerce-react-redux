import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function ProductCard({}) {

    return (
        <Card sx={{ width: 300, display: "inline-block", marginLeft: 2  }}>
            <CardActionArea>
                <CardMedia

                    component="img"
                    height="140"
                    image="https://gaming-cdn.com/images/products/2494/616x353/call-of-duty-modern-warfare-2-campaign-remastered-pc-juego-battle-net-cover.jpg?v=1701334132"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button 
        
                size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}
