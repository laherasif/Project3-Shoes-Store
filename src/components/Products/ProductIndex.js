import React from 'react'
import {
    CardActionArea,
    CardContent,
    CardActions,
    Button,
    CardMedia,
    Typography,
    Card,
  } from "@material-ui/core";
import {GlobalContext} from '../Context/GlobalContext'

function ProductIndex() {
    const {products} = useContext(GlobalContext)
    return (
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              className={styles.img}
              component="img"
              alt="Shoe Store"
              height="200"
              image={imgUrl}
              title="Shoe Store"
            />
            <CardContent>
              <Typography style={{marginTop:'10px'}} align='center' noWrap  variant="h5" component="h2">
                {name}
              </Typography>
              <Typography
                align="justify"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                
              </Typography>
            </CardContent>
            <CardContent className={styles.root}>
              <Typography variant={"h6"} align="center">
                PRICE
              </Typography>
              <Typography align="center">{price}&euro;</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={styles.action}>
              <Button
                onClick={addToCart}
                className={styles.btn}
                size="small"
                color="primary"
              >
                {btnText}
              </Button>
            </div>
          </CardActions>
        </Card>
    )
}

export default ProductIndex
