// A.
// 1.

let inputArray = ["cuong", "minh", "quyen", "huyen", "tan"]
function allLongestStrings(inputArray) {
    let max = getMaxLengthInArray(inputArray);
    let output = [];
    inputArray.forEach(function (input) {
        var strLength =  input.split("").length;
        if (strLength == max) {
            output.push(input);
       }
    })
    console.log(output);
}

function getMaxLengthInArray (inputArray) {
    let max = 0;
    inputArray.forEach(function (input) {
        var strLength =  input.split("").length;
        if (strLength > max) {
           max = strLength;
       }
    })
    
    return max;
}

allLongestStrings(inputArray)
// 2

let team = [12, 23, 33, 3, 34, 43, 43, 34,91, 03, 81];

function alternatingSums(input) {
    let team1 = [];
    let team2 = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            team1.push(input[i]);
        } else {
            team2.push(input[i]);
        }
    }
    
    // let sumTeam1 =  team1.reduce(function (start, val) {
    //     return start +val;
    // }, 0);

    // let sumTeam2 = team2.reduce(function (start, val) {
    //     return start +val;
    // }, 0);

    let sumTeam1 = sumArray(team1);
    let sumTeam2 = sumArray(team2);
    console.log([sumTeam1, sumTeam2]);
    return [sumTeam1, sumTeam2];
}

function sumArray(ArrayInput) {
    let sum = 0;
    ArrayInput.forEach(function(val) {
        sum += val;
    })

    return sum;
}

alternatingSums(team)

// B 


