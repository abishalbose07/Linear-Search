function linearSearch() {

    let arr = [10, 20, 30, 40, 50];

    let target = Number(
        document.getElementById("searchValue").value
    );

    let found = false;
    let position = -1;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === target) {
            found = true;
            position = i;
            break;
        }
    }

    let result = document.getElementById("result");

    if (found) {
        result.innerHTML =
            target + " found at index " + position;
    } else {
        result.innerHTML =
            target + " not found in the array";
    }
}