function buttonClickHandler() {
    document.getElementById("Input1").style.background = "lightgreen";
    document.getElementById("Input2").style.backgroundColor = "lightgreen";
    let value1 = document.getElementById("Input1").value;
    let value2 = document.getElementById("Input2").value;
    let result = 0; 
    let result1 = "OK";
    if (!isNaN(parseFloat(value1)) && isFinite(value1) && !isNaN(parseFloat(value2)) && isFinite(value2))
    {
        value1 = parseFloat(value1);
        value2 = parseFloat(value2);
        switch (document.getElementById("select").value){
            case "1":
                result = value1 + value2;
                break;
        
            case "2":
                result = value1 - value2;
                break;
        
            case "3":
                result = value1 * value2;
                break;
        
            case "4":
                if (Math.abs(value2) >= Number.EPSILON)
                {
                    result = value1 / value2;
                }
                else
                {
                    document.getElementById("Input2").style.backgroundColor = "yellow";
                    result1 = "Error. Second value is zero";
                }
                break;
        
            default:
                break;
        }
    }

    else
    {
        if (isNaN(parseFloat(value1)) || !isFinite(value1)){
            document.getElementById("Input1").style.backgroundColor = "yellow";
            result1 = "Error. First value is not a number";
        }
        else if (isNaN(parseFloat(value2)) || !isFinite(value2))
        {
            document.getElementById("Input2").style.backgroundColor = "yellow";
            result1 = "Error. Second value is not a number";
        }
    }
    
    if (result1 === "OK")
    {
        document.getElementById("results").value += result + "\n";
    }
    else
    {
        document.getElementById("results").value += result1 + "\n";
    }
}