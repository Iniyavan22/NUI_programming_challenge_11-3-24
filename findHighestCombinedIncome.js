import demographicData from './users-db.json';

function getCombinedHighestIncome(usersData) {

    if (usersData) {
        if (usersData.length > 0) {
            let demographyCollection = {};
            let netIncome = 0;
            for (let user of usersData) {
                if (typeof (user.country) === 'string') {
                    if (typeof (user.income) === 'number') {
                        if (user.country in demographyCollection) {
                            demographyCollection[user.country] += user.income;
                        }
                        else {
                            netIncome = user.income;
                            demographyCollection[user.country] = netIncome;
                        };
                    }
                    else{
                        console.log("income is not a numeric value");
                    };
                }
                else{
                    console.log("the country is not in alphabetic value");
                };
            };

            let highestCombinedIncome = 0;
            let highestIncomeDrawnCountry = "";
            for (let country in demographyCollection) {
                if (highestCombinedIncome < demographyCollection[country]) {
                    highestCombinedIncome = demographyCollection[country];
                    highestIncomeDrawnCountry = country;
                }
            };

            return highestIncomeDrawnCountry;
        }
        else {
            console.log("user data is empty");
        };
    }
    else {
        console.log("pass the arguments");
    };


};


console.log(getCombinedHighestIncome(demographicData));