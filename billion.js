var reward = .001;
var sum = .001;
var tenkday = 1;

for (var day = 2; day <= 30; day++) {
    reward = reward * 2;
    sum = sum + reward;
}

console.log(reward);