var reward = .01;
var sum = .01;
var tenkday = 1;

for (var day = 2; day <= 30; day++) {
    reward = reward * 2;
    sum = sum + reward;
}

console.log(reward);