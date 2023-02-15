function totalProductValue(id){
   let totalProduct= document.getElementById(id).value;
   totalProduct=parseInt(totalProduct);
   return totalProduct;
}
function plusAction(totalProduct,id){
     totalProduct=totalProduct+1;
    document.getElementById(id).value=totalProduct;
    return totalProduct;
}
function minusAction(totalProduct,id){
   if(totalProduct>0){
      totalProduct=totalProduct-1;
      document.getElementById(id).value=totalProduct;
      return totalProduct;
   }
   else{
      alert("cant be negative ");
      return totalProduct;
   }
    
}