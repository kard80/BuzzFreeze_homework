function getDoubleString(s) {
    for (let i = s.length - 1; i > 0; i--) {
        const base = s.slice(0, i)
        const target = s.slice(s.length - i , s.length)
        if(base.match(target)) {
            return s + s.slice(i, s.length)
        }
    }
    return s + s
}

getDoubleString('aba') //ababa
getDoubleString('xxxxx') //xxxxxx
getDoubleString('crie') //criecrie
getDoubleString('obrocodobro') //obrocodobrocodobro