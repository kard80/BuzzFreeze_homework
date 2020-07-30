function attack(mySoldiers, hpB, attackB, numB) {
    let round = 0;
    let hp = numB * hpB
    while(mySoldiers > 0 && hp > 0) {
        hp -= mySoldiers
        numB = Math.ceil(hp / hpB)
        mySoldiers -= numB * attackB
        ++round
    }
    if(mySoldiers <= 0) return -1
    return round
}


attack(13, 2, 3, 8) //2
attack(10, 6, 8, 2) //2
attack(10, 6, 9, 2) //-1
attack(1, 1, 1, 1) //1
attack(10000, 10, 2, 2789) //10
attack(2, 1, 1, 3) //2
