function getToSetValueToCaseField(isplus){
    let totalCase= totalProductValue("total-case");
    if(isplus==true){
        totalCase= plusAction(totalCase,"total-case");
    }
    else{
        totalCase= minusAction(totalCase,"total-case");
    }
    const casePrice=totalCase*59;
    document.getElementById("case-total-price").innerText=casePrice;
    return casePrice;
}

document.getElementById("btn-plus-case").addEventListener("click",function(){
   getToSetValueToCaseField(true);
   setSubTotalTaxTotal();
})
document.getElementById("btn-minus-case").addEventListener("click",function(){
    getToSetValueToCaseField(false);
    setSubTotalTaxTotal();
})

//calculalating the subtotal
// subTotal( caseTotalPrice);
// console.log(caseTotalPrice);
