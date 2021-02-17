var text_selector;

function con() {
    var one = document.getElementsByClassName("input_number");
    for (var i = 0; i < one.length; i++)
        one[i].onclick = function() {
            document.getElementById(text_selector).value += this.value;
        }
}

function calc_text_selector(el) {
    text_selector = el.id;
    console.log(text_selector);
}


function operations() {
    var one = document.getElementsByClassName("op");
    for (var i = 0; i < one.length; i++)
        one[i].onclick = function() {
            let temp1 = Number(document.getElementById("val1").value);
            let temp2 = Number(document.getElementById("val2").value);
            console.log(temp1);
            if (this.value == "pow") {
                var temp3 = Math.pow(temp1, temp2);
                document.getElementById('val3').value = temp3;
            } else if (this.value == "+") {
                var temp3 = temp1 + temp2;
                document.getElementById('val3').value = temp3;
            } else if (this.value == "-") {
                var temp3 = temp1 - temp2;
                document.getElementById('val3').value = temp3;
            } else if (this.value == "*") {
                var temp3 = temp1 * temp2;
                document.getElementById('val3').value = temp3;
            } else if (this.value == "/") {
                var temp3 = temp1 / temp2;
                document.getElementById('val3').value = temp3;
            } else if (this.value == "√") {
                var temp3 = Math.sqrt(temp1);
                document.getElementById('val3').value = temp3;
            }
        }
}

function cl() {
    document.getElementById('val1').value = "";
    document.getElementById('val2').value = "";
    document.getElementById('val3').value = "";
}