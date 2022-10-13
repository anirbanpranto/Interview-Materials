//now wtf is spreading

const whatisthis = {
    name : "Anirban",
    email : "anirbanpranto@gmail.com",
    val : 0x00ffee,
    nullable: null
}

const whatisthis_2 = {
    mage : "Anirban",
    archer : "anirbanpranto@gmail.com"
}

const cpy = (stuff) => {
    return Object.assign({}, whatisthis, whatisthis_2);;
}

const cpy_spread = (stuff) => {
    return {...whatisthis, ...whatisthis_2}
}

const b = cpy(whatisthis);
const c = cpy_spread(whatisthis);

b.val = 0x11ddaa
c.val = 0x22eeff

console.log(whatisthis)
console.log(b)
console.log(c)
