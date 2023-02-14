// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:


let stockPrices = [2, 3, 10, 6, 4, 8, 1]

const best = (array) => { 
    let maxDiff = 0;
    let min = array[0];

    for(let i = 0; i < array.length; i++) {
        if(array[i] > min && maxDiff < array[i] - min) {
            maxDiff = array[i] - min
        }

        if(array[i] < min) {
            min = array[i]
        }
    }
    console.log(maxDiff)
}


best(stockPrices)

best([1, 2, 3, 4, 5])
best([2, 3, 10, 6, 4, 8, 1])
best([7, 9, 5, 6, 3, 2])
best([0, 100])
best([5, 4 , 3, 2, 1])
best([100])
best([100, 0])