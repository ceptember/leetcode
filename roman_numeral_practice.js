function toRoman(x){

    let newNum = x
    let roman = ""

    while (newNum >= 1000){
        roman = roman + "M"
        newNum = newNum - 1000;  
    }

    if (newNum >= 900){
        roman = roman + "CM"
        newNum = newNum - 900;  
    }

    if (newNum >= 500){
        roman = roman + "D"
        newNum = newNum - 500;  
    }

    if (newNum >= 400){
        roman = roman + "CD"
        newNum = newNum - 400;  
    }

    while (newNum >= 100){
        roman = roman + "C"
        newNum = newNum - 100;  
    }

    if (newNum >= 90){
        roman = roman + "XC"
        newNum = newNum - 90;  
    }

    if (newNum >= 50){
        roman = roman + "L"
        newNum = newNum - 50;  
    }

    if (newNum >= 40){
        roman = roman + "XL"
        newNum = newNum - 40;  
    }

    while (newNum >= 10){
        roman = roman + "X"
        newNum = newNum - 10;  
    }

    if (newNum >= 9){
        roman = roman + "IX"
        newNum = newNum - 9;  
    }

    if (newNum >= 5){
        roman = roman + "V"
        newNum = newNum - 5;  
    }

    if (newNum >= 4){
        roman = roman + "IV"
        newNum = newNum - 4;  
    }

    while (newNum >= 1){
        roman = roman + "I"
        newNum = newNum - 1;  
    }

    console.log(roman)  
    return roman
}

function fromRoman(num){
    let result = 0

    for (let i = 0; i < num.length; i ++){
        switch (num[i]){
            case "M":
                result += 1000
                break
            
            case "D":
                result += 500
                break    
            
            case "C":
                num[i+1] == "M" || num[i+1] == "D" ?  result-= 100 : result+= 100
                break

            case "L":
                result += 50
                break
            
            case "X":
                num[i+1] == "C" || num[i+1] == "L" ? result-=10 : result+= 10
                break

            case "V":
                result += 5
                break
            
            case "I":
                num[i+1] == "V" || num[i+1] == "X" ? result -=1 : result += 1
                break

            default:
                console.log("no")
        }
    }

    console.log(result)
}

//toRoman(2449) 
fromRoman("MMCDXLIX")


