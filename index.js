function square(n) {
    return n * n;
}

let multiplied = square;

document.getElementById("result").innerHTML = square(5);