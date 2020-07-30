function buyFood(openAt, closeAt, walkTime) {
    let count = 0;
    let oneRoundValue = openAt.length * walkTime;
    for (let i = 0; i < openAt.length; i++) {
        let startValue = i * walkTime;
        let times = Math.ceil(closeAt[i] / oneRoundValue);
        for(let j =0; j <= times; j++) {
            if(startValue + (oneRoundValue * j) <= closeAt[i] && startValue + (oneRoundValue * (j -1) >= openAt[i])) {
                 ++count
                 break
            }
        }
    }
    return count
}

buyFood([0, 0, 0], [100, 100, 100], 3) //return 3
buyFood([45, 45, 0], [50, 50, 20], 15) //return 1
buyFood([1000, 1000], [1010, 1010], 1) //return 2
buyFood([999999, 2, 4], [1000000, 22, 44], 2) //return 2