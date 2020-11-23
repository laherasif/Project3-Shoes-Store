import React from "react";
import ProductList from "./Products/ProductList";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
home: {
    
    marginTop:'3%'
},
logo:{
  width:'100%',
  display:'block',
  margin:'auto',
  marginTop:10
},
logo2:{
  width:'50%',
  height:'50%',
  display:'block',
 position:'absolute',
   top:120,
   right:20,

},



sectionMobile: {
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
},
sectionDextop: {
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
},
welcome:{
marginBottom:'2%'
},

}));

export default function Home() {
  const styles = useStyles();
  return (
    <div className={styles.home}>
   
<div clsssName="products">

       <h2 style={{display:'flex', justifyContent:'center' , fontSize:'10rem'}}>Nike Products </h2>
</div>


        <ProductList/>
    </div>
  );
}
