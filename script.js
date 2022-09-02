function buttonClickHandler() {
    let value1 = document.getElementById("Input1").value;
    let value2 = document.getElementById("Input2").value;
    
    let result = parseFloat(value1) + parseFloat(value2);
        
    document.getElementById("results").innerText = result;
    console.log(result);
}