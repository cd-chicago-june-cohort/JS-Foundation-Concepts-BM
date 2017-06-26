var daysUntilMyBirthday = 60;

while (daysUntilMyBirthday >= 30) {
    console.log("There's " + daysUntilMyBirthday + " days until I'm old AF.");
    daysUntilMyBirthday -= 1;
}

while (daysUntilMyBirthday < 30 && daysUntilMyBirthday > 5) {
    console.log("Now there's " + daysUntilMyBirthday + " days until I'm another year closer to death.");
    daysUntilMyBirthday -= 1;
}

while (daysUntilMyBirthday <= 5 && daysUntilMyBirthday > 0) {
    console.log(daysUntilMyBirthday + " more days until it's all over.");
    daysUntilMyBirthday -= 1;
}

console.log("Now I'm old AF.  Happy Birthday, indeed.");