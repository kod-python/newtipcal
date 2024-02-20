function calaculateTip(){
    const  billAmountInput = document.getElementById("billAmount")
    const  splitCountInput = document.getElementById("spliAcount")
    const  mealTypeSelect = document.getElementById("mealType")
    const  tipAmountOutput = document.getElementById("tipAmount")
    const  totalAmountOutput = document.getElementById("totalAmount")
    const  amountPerPersonOutput = document.getElementById("amountPerPerson")




    const billAmount = parseFloat(billAmountInput.value)
    const splitCount = parseFloat(splitCountInput.value)
    const mealType =  mealTypeSelect.value;


    let tip;



    // check if custom tip or service rating has been selected

    const customTipRadio = document.getElementById("customTip")
    const customTipInput = document.getElementById("customTipInput")
    const serviceRatingSelect = document.getElementById("serviceRatingSelect")


    if (customtTipRadio.checked){

        const customTipAmount = parseFloat(document.getElementById("customsTipAmount").value);
    }

    if  (isNaN(customTipAmount)){
        tipAmountOutput.textContent = "please enter a valid tip amount";
        totalAmountOutput.textContent = ""
        amountPerPersonOutput.textContent = ""
    }

    else{
        // get tip based on service rating

        const serviceRating =  parseFloat(serviceRatingSelect.value);
        if (isNaN(serviceRating)){
            tipAmountOutput.textContent = "please selece service rating"
            totalAmountOutput.textContent = ""
            amountPerPersonOutput = ""

            return
        }
    }
}