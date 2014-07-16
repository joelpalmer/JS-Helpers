
Number.prototype.isDivisibleBy = function(dividend){
    return this % dividend == 0;
}

function showDivisibles(start, end, threeText, fiveText)
{

    var msgEl = document.getElementById("errMessages");
    try {
        if (end < start)
        {
            throw "showDivisibles: The starting number must be lower than the ending number";
            return false;
        }
    }
    catch (err) {
        msgEl.innerHTML = err;

    }

    for (var i = start; end >= i; i++) {

        if (i.isDivisibleBy(3) && i.isDivisibleBy(3)) {
            document.write(threeText + " and " + fiveText + "<br />");
        }

        else if (i % 3 == 0) {
            document.write(threeText + "<br />");
        }
        else if (i % 5 == 0) { 
            document.write(fiveText + "<br />");
        }
        else {
            document.write(i + "<br />");
        }
    }
}

window.onload = function () {
    showDivisibles(1, 100, "divides by 3", "divides by 5");
}