function* fibonacci1(n) {
    let [a, b] = [0, 1];
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b]; 
    }
}

function* fibonacci2(max) {
    let [a, b] = [0, 1];
    while (a <= max) {
        yield a;
        [a, b] = [b, a + b]; 
    }
}

console.log("Output of fibonacci1(5):");
for (let num of fibonacci1(5)) {
    console.log(num);
}

console.log("Output of fibonacci2(10):");
for (let num of fibonacci2(10)) {
    console.log(num);
}

