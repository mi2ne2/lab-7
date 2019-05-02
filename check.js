

$(document).ready(function () {
    $("#submitButton").on("click", function input() {
        var inputText = $("#inputText").val().trim();
        if(inputText !== ""){
            $("div#task").append("<p>" + inputText + "</p>");
        }
        else{
        alert("No input");
        return;
    }
        
    });
});