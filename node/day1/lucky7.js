(() => {
    const inputBetSelector = "#input-bet";
    const buttonPlaySelector = "#button-play";
    const divResultsSelector = "#div-results";
    const tdStartingBetSelector = "#td-starting-bet";
    const tdTotalRollsSelector = "#td-total-rolls";
    const tdHighestSelector = "#td-highest";
    const tdHighestRollsSelector = "#td-highest-rolls";

    const inputBetElement = qs(inputBetSelector);
    const buttonPlayElement = qs(buttonPlaySelector);
    const divResultsElement = qs(divResultsSelector);
    const tdStartingBetElement = qs(tdStartingBetSelector);
    const tdTotalRollsElement = qs(tdTotalRollsSelector);
    const tdHighestElement = qs(tdHighestSelector);
    const tdHighestRollsElement = qs(tdHighestRollsSelector);

    const moneyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    const numberFormatter = new Intl.NumberFormat('en-US');
    
    function playGame(startingBet) {
        // const tempA = Number.isNaN(startingBet);
        // const tempB = startingBet <= 0;
        if(Number.isNaN(startingBet) || startingBet <= 0) {
            alert('Please enter a valid integer starting value.');
        }
        // Format the value in the results table
        tdStartingBetElement.replaceChildren(document.createTextNode(moneyFormatter.format(startingBet)));
        // tdStartingBetElement.value = moneyFormatter.format(startingBet);

        let maxBet = startingBet;
        let maxRolls = 0;
        let numRolls = 0;
        let currentBet = startingBet;
        while (currentBet > 0) {
            const diceValue = rollDice();
            if (diceValue === 7) {
                currentBet += 4;
            } else {
                currentBet -= 1;
            }
            numRolls += 1;
            if (currentBet > maxBet) {
                maxBet = currentBet;
                maxRolls = numRolls;
            }
        }
        
        // Fill out the rest of the results table
        tdTotalRollsElement.replaceChildren(document.createTextNode(numberFormatter.format(numRolls)));
        tdHighestElement.replaceChildren(document.createTextNode(moneyFormatter.format(maxBet)));
        tdHighestRollsElement.replaceChildren(document.createTextNode(numberFormatter.format(maxRolls)));
        // tdTotalRollsElement.innerHtml = numRolls;
        // tdHighestElement.innerHtml = maxBet;
        // tdHighestRollsElement.innerHtml = maxRolls;

        // Show the results
        if (divResultsElement.setAttribute('style', 'display:block'));
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function rollDice() {
        const die1 = Math.trunc(Math.random() * 7 + 1);
        const die2 = Math.trunc(Math.random() * 7 + 1);
        return die1 + die2;
    }

    // Set up event handlers
    buttonPlayElement.addEventListener('click', () => {
        const startingBet = Number.parseInt(inputBetElement.value); // This will truncate floats!
        playGame(startingBet);
    });
    inputBetElement.addEventListener('keyup', (key) => {
        if (key.keyCode === 13) {
            const startingBet = Number.parseInt(inputBetElement.value); // This will truncate floats!
            playGame(startingBet);
        }
    })
})();