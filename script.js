function buttonClickHandler() {
    let value1 = document.getElementById("Input1").value;
    let value2 = document.getElementById("Input2").value;
    let result = 0;
    let result1 = "OK";
    if (!isNaN(parseFloat(value1)) && isFinite(value1) && !isNaN(parseFloat(value2)) && isFinite(value2))
    {
        switch (document.getElementById("select").value){
            case "1":
                result = parseFloat(value1) + parseFloat(value2);
                break;
        
            case "2":
                result = parseFloat(value1) - parseFloat(value2);
                break;
        
            case "3":
                result = parseFloat(value1) * parseFloat(value2);
                break;
        
            case "4":
                if (parseFloat(value2) != 0)
                {
                    result = parseFloat(value1) / parseFloat(value2);
                }
                else
                {
                    result1 = "Error";
                }
                break;
        
            default:
                break;
        }
    }

    else
    {
        result1 = "Error";
    }
    
    if (result1 == "OK")
    {
        document.getElementById("results").innerText = result;
    }
    else
    {
        document.getElementById("results").innerText = result1;
    }
}