// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';

// export default function ProductCard({}) {

//     return (
//         <Card sx={{ width: 300, display: "inline-block", marginLeft: 2  }}>
//             <CardActionArea>
//                 <CardMedia

//                     component="img"
//                     height="140"
//                     image="https://gaming-cdn.com/images/products/2494/616x353/call-of-duty-modern-warfare-2-campaign-remastered-pc-juego-battle-net-cover.jpg?v=1701334132"
//                     alt="green iguana"
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         Lizard
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                         Lizards are a widespread group of squamate reptiles, with over 6,000
//                         species, ranging across all continents except Antarctica
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <Button 

//                 size="small" color="primary">
//                     Share
//                 </Button>
//             </CardActions>
//         </Card>
//     );
// }


// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';

// export default function ProductCard() {

//     // Podés hacer lo que quieras con isVisible

//     return <Card
//         sx={{ width: 300, display: 'inline-block', marginLeft: 2 }}
//     >
//         <CardActionArea>
//             <CardMedia
//                 component="img"
//                 height="140"
//                 image="https://gaming-cdn.com/images/products/2494/616x353/call-of-duty-modern-warfare-2-campaign-remastered-pc-juego-battle-net-cover.jpg?v=1701334132"
//                 alt="green iguana"
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     Lizard
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                     species, ranging across all continents except Antarctica
//                 </Typography>
//             </CardContent>
//         </CardActionArea>
//         <CardActions>
//             <Button size="small" color="primary">
//                 Share
//             </Button>
//         </CardActions>
//     </Card>
// }

// import { useEffect } from 'react';
// import { useInView } from './useInView';
// import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

// export default function ProductCard({ index, onVisible }) {
//   const [ref, isVisible] = useInView({ threshold: 0.6 });

//   useEffect(() => {
//     if (isVisible) {
//       onVisible(index);
//     }
//   }, [isVisible, index, onVisible]);

//   return (
//     <Card
//       ref={ref}
//     sx={{ width: 300, display: 'inline-block', marginLeft: 2 , userSelect: 'none'}}
//     >
//       <CardMedia
//         component="img"
//         height="140"
//         image="https://gaming-cdn.com/images/products/2494/616x353/call-of-duty-modern-warfare-2-campaign-remastered-pc-juego-battle-net-cover.jpg?v=1701334132"
//         alt="game cover"
//       />
//       <CardContent>
//         <Typography variant="h5">Lizard</Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000 species.
//         </Typography>
//         <Button size="small">Share</Button>
//       </CardContent>
//     </Card>
//   );
// }


//SIN LAZY

// import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

// export default function ProductCard() {
//   return (
//      <Card sx={{ width: 300, display: "inline-block", marginLeft: 2  }}>
//       <CardMedia
//         component="img"
//         height="140"
//         image="https://gaming-cdn.com/images/products/2494/616x353/call-of-duty-modern-warfare-2-campaign-remastered-pc-juego-battle-net-cover.jpg?v=1701334132"
//         alt="game cover"
//       />
//       <CardContent>
//         <Typography variant="h5">Lizard</Typography>
//         <Typography variant="body2" color="text.secondary">
//           Lizards are a widespread group of squamate reptiles, with over 6,000 species.
//         </Typography>
//         <Button size="small">Share</Button>
//       </CardContent>
//     </Card>
//   );
// }


//CON LAZY

// import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

// export default function ProductCard() {
//   return <Card sx={{ width: 300, display: 'inline-block', marginLeft: 2, userSelect: 'none' }}>
//     {/* Imagen con lazy loading */}
//     <CardMedia
//       component="img"
//       height="140"
//       image="https://gaming-cdn.com/images/products/2494/616x353/call-of-duty-modern-warfare-2-campaign-remastered-pc-juego-battle-net-cover.jpg?v=1701334132"
//       alt="game cover"
//       className="swiper-lazy"
//     />
//     {/* Loader opcional */}
//     <div className="swiper-lazy-preloader"></div>

//     <CardContent>
//       <Typography variant="h5">Lizard</Typography>
//       <Typography variant="body2" color="text.secondary">
//         Lizards are a widespread group of squamate reptiles, with over 6,000 species.
//       </Typography>
//       <Button size="small">Share</Button>
//     </CardContent>
//   </Card>

// }




import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function ProductCard() {
  return (
    <Card sx={{ width: 300, display: 'inline-block', marginLeft: 2, userSelect: 'none' }}>
      <CardMedia
        component="img"
        loading="lazy" // Lazy loading nativo
        height="140"
        image="https://gaming-cdn.com/images/products/2494/616x353/call-of-duty-modern-warfare-2-campaign-remastered-pc-juego-battle-net-cover.jpg?v=1701334132"
        alt="game cover"
      />

      <CardContent>
        <Typography variant="h5">Lizard</Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species.
        </Typography>
        <Button size="small">Share</Button>
      </CardContent>
    </Card>
  );
}
