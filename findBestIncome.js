
import demographicData from './users-db.json';




function getHighestIncome(usersData) {


    if (usersData) {
        if (usersData.length > 0) {
            let highestIncome = 0;
            let highestIncomeDrawingCountry = ""; 
            for (let user of usersData) {
                if (typeof (user.income) === 'number') {
                    if (typeof (user.country) === 'string' && user.country.trim()) {
                        if (highestIncome < user.income) {
                            highestIncome = user.income;
                            highestIncomeDrawingCountry = user.country;
                        }
                    }
                    else {
                        console.log("the country is not a valid")
                    }
                }
                else {
                    console.log("the income is not a numeric value");
                }
            };
            return highestIncomeDrawingCountry;
        }
        else {
            console.log("the length of the object is 0");
        }
    }
    else {
        console.log("please give the required parameter");
    }

};




console.log(getHighestIncome(demographicData));

