function getToSetValueToPhnField(isplus){
    let totalPhone= totalProductValue("total-phn");
    if(isplus==true){
        totalPhone= plusAction(totalPhone,"total-phn");
    }
    else{
        totalPhone= minusAction(totalPhone,"total-phn");
    }
    const phnPrice=totalPhone*1219;
    // console.log(phnPrice);
    document.getElementById("phn-total-price").innerText=phnPrice;
}

document.getElementById("btn-plus-phn").addEventListener("click",function(){
    getToSetValueToPhnField(true);
})
document.getElementById("btn-minus-phn").addEventListener("click",function(){
    getToSetValueToPhnField(false);
})