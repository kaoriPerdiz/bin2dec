function convertBinary(){
    var binary = $("#binaryNumber").val();
    var total = 0;
    var error = 0;
    if(binary == '')
    {
        error = 1;
    }
    for(var count = 0; count <= binary.length-1; count++){
        if(binary[count] != 1 && binary[count] != 0)
        {
            error = 2;
        }
    }
    if (error == 0){
        for(var i=1; i<=binary.length; i++){
            total = total + (binary[i-1]*Math.pow(2, i));
        }
        $("#errorText").text("");
        $("#decimalNumber").text("Decimal number: "+total);
    }else if(error = 1){
        $("#errorText").text("Error: insert a binary number.");
        $("#decimalNumber").text("");
    }else if(error = 2){
        $("#errorText").text("Error: insert only 0 and 1.");
        $("#decimalNumber").text("");
    }
}
