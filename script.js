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


    if (customTipRadio.checked){

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


        switch (serviceRating){
            case 1:
                tip  = billAmount * 0.5
                break;

            case 2:
                tip  = billAmount * 0.1
                break;

            case 3:
                 tip  = billAmount * 0.15
                 break;
            case 4:
                 tip  = billAmount * 0.2
                 break;


            default:
                tipAmountOutput.textContent = "invalid service rating"
                totalAmountOutput.textContent = ""
                amountPerPersonOutput.textContent = ""
                return;     
        }

        // adjust tip amount for type of meal

        if(mealType === "dinner"){
            tip +=5
        }
          
        // add others

        let totalAmount =  billAmount + tip
        let amountPerPerson =  totalAmount / splitCount


    // display results
    tipAmountOutput.textContent = `Tip Ghc ${tip.toFixed(2)}`;
    totalAmountOutput.textContent = `Total Amount: Ghc ${totalAmount.toFixed(2)}`;
    amountPerPersonOutput.textContent = `Amount per person: Ghc ${amountPerPerson.toFixed(2)}`;
 


    }
}

document.getElementById("calculateBtn").addEventListener("click", calculate);