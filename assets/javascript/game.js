// the selfe invoking function
(function(){
    // please wait untill the page is loaded
    window.onload = function(){

        //
        // lets get a handle on some of the DOM
        //

        // buttons first
        let shootOneBt = document.querySelector("#teamone-shoot");
        let shootTwoBt = document.querySelector("#teamtwo-shoot");
        let resetBt = document.querySelector("#reset");

        // the output (spans)
        let nShotsOneSp = document.querySelector("#teamone-numshots");
        let nShotsTwoSp = document.querySelector("#teamtwo-numshots");

        let nGoalsOneSp = document.querySelector("#teamone-numhits");
        let nGoalsTwoSp = document.querySelector("#teamtwo-numhits");

        let nResetsSp = document.querySelector("#num-resets");

        //
        // End of getting a handle on the DOM
        //

        // some variables to use while we work
        let nOfResets = 0;
        let nOfShotsOne = 0;
        let nOfShotsTwo = 0;
        let nOfGoalsOne = 0;
        let nOfGoalsTwo = 0;



        // Event Listeners
        shootOneBt.addEventListener("click",function(){
            console.log("shootOneBt");
            // always increase the shots and update it's span
            nOfShotsOne = nOfShotsOne + 1;
            nShotsOneSp.innerHTML = nOfShotsOne;

            // for a randome change increase the goals
            if(Math.random() < 0.8){
                nOfGoalsOne = nOfGoalsOne + 1;
                nGoalsOneSp.innerHTML = nOfGoalsOne;
                console.log("goalOne");
            }
            else{
                console.log("missOne");
            }
        });

        // Event Listeners
        shootTwoBt.addEventListener("click",function(){
            console.log("shootTwoBt");
            // always increase the shots and update it's span
            nOfShotsTwo = nOfShotsTwo + 1;
            nShotsTwoSp.innerHTML = nOfShotsTwo;

            // for a randome change increase the goals
            if(Math.random() < 0.85){
                nOfGoalsTwo = nOfGoalsTwo + 1;
                nGoalsTwoSp.innerHTML = nOfGoalsTwo;
                console.log("goalTwo");
            }
            else{
                console.log("missTwo");
            }
        });

        // Event Listeners
        resetBt.addEventListener("click",function(){
            console.log("resetBt");
            // increase reset counter
            // note how it can never go down MUAHAHAAH!
            nOfResets = nOfResets + 1;
            nResetsSp.innerHTML = nOfResets;
            // set everything else back to zero
            nOfShotsOne = 0;
            nShotsOneSp.innerHTML = nOfShotsOne
            nOfShotsTwo = 0;
            nShotsTwoSp.innerHTML = nOfShotsTwo;
            nOfGoalsOne = 0;
            nGoalsOneSp.innerHTML = nOfGoalsOne
            nOfGoalsTwo = 0;
            nGoalsTwoSp.innerHTML = nOfGoalsTwo;
        });

        

    };
})();




