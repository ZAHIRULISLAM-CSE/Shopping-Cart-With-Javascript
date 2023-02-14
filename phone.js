function getToSetValueToPhnField(isplus){
    let totalPhone= totalProductValue("total-phn");
    if(isplus==true){
        totalPhone= plusAction(totalPhone,"total-phn");
    }
    else{
        totalPhone= minusAction(totalPhone,"total-phn");
    }
    const phnPrice=totalPhone*1219;
    document.getElementById("phn-total-price").innerText=phnPrice;
    return phnPrice;
}
function getElementValue(id){
    let elementValue=document.getElementById(id).innerText;
    elementValue=parseInt(elementValue);
    return elementValue;
}
function setSubTotalTaxTotal(){
    let phnTotalPrice =getElementValue("phn-total-price");
    let caseTotalPrice =getElementValue("case-total-price");
    const subTotal=phnTotalPrice+caseTotalPrice;
    document.getElementById("sub-total").innerText=subTotal;
    const tax=(subTotal*0.1).toFixed(2);
    const total=subTotal+ parseFloat(tax);
    document.getElementById("tax").innerHTML=tax;
    document.getElementById("total").innerHTML=total; 
}

document.getElementById("btn-plus-phn").addEventListener("click",function(){
    getToSetValueToPhnField(true);
    setSubTotalTaxTotal();
})
document.getElementById("btn-minus-phn").addEventListener("click",function(){
     getToSetValueToPhnField(false);
     setSubTotalTaxTotal();
})
