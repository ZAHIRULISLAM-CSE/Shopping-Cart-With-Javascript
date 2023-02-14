function getToSetValueToCaseField(isplus){
    let totalCase= totalProductValue("total-case");
    if(isplus==true){
        totalCase= plusAction(totalCase,"total-case");
    }
    else{
        totalCase= minusAction(totalCase,"total-case");
    }
    const phnPrice=totalCase*59;
    document.getElementById("case-total-price").innerText=phnPrice;
}

document.getElementById("btn-plus-case").addEventListener("click",function(){
    getToSetValueToCaseField(true);
})
document.getElementById("btn-minus-case").addEventListener("click",function(){
    getToSetValueToCaseField(false);
})