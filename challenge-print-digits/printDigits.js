const printDigits = (num) => {
    while(num) {
        digit = num % 10  
        console.log(digit)
        num = (num - digit)/10 
    }  
}

printDigits(314)