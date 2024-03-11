import demographicData from './users-db.json';




function getUserMailEndsWithGov(usersData) {
    

    if(usersData){ 
        if(usersData.length>0) {
            let govDomain = [];
            for (let user of usersData) {
                if(typeof(user.email)==='string'){
                    if (user.email.substr(-4) === ".gov") {
                        govDomain.push(user);
                    }
                }
            };
            return govDomain;
        }
        else{
            console.log("user data is empty")
        }
    }
    else{
        console.log("pass the arguments")
    }

    


};


console.log(getUserMailEndsWithGov(demographicData));