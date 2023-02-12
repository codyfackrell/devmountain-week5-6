const hasMoreVowels = (word) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let vowelCount = 0;

    for(let i = 0; i < word.length; i++){
        for(let l = 0; l < vowels.length; l++) {
            if(word[i] === vowels[l]) {
                vowelCount++
            } 
        }
    }

    return vowelCount > word.length - vowelCount ? console.log(true)
          : vowelCount < word.length - vowelCount ? console.log(false)
          : console.log(false)
}

hasMoreVowels("vacation")
hasMoreVowels("moose")