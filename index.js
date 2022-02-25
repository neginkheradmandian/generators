function* generatId() {
    let id=1;
    while(true){
        const increment= yield id;
        if (increment) {
            id+=increment
        } else {
            id++;
        }
    }
}
const generator = generatId();
console.log(generator.next())
console.log(generator.next())
console.log(generator.next(6))
console.log(generator.return(10))
console.log(generator.throw('My Err'))


