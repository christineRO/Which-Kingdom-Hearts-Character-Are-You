$(".character").hide();
$(".Sora").hide();
$(".Riku").hide();
$(".Kairi").hide();
$(".Namine").hide();

$("#submitAll").click(function(){
    var number = $("#number").val();
        console.log(parseInt(number));
    var keyblade = $("#keyblade").val();
    
    if(keyblade === "Kingdom Key" && (number < 10 && number > 0)){
            $(".Sora").show();
            $(".character").show();
            $(".allQuestions").hide();
            $(".character").css("background-color", "#ff2121");
            
        } else if(keyblade === "Oblivion" && (number < 10 && number > 0)){
            $(".Riku").show();
            $(".character").show();
            $(".allQuestions").hide();
            $(".character").css("background-color", "#ec60ff");
            
        } else if(keyblade === "Kingdom Key" && (number >= 10 && number <= 20)){
            $(".Kairi").show();
            $(".character").show();
            $(".allQuestions").hide();
            $(".character").css("background-color", "#ff3a44");
            
        } else if(keyblade === "Oblivion" && (number >= 10 && number <= 20)){
            $(".Namine").show();
            $(".character").show();
            $(".allQuestions").hide();
            $(".character").css("background-color", "#fcff56");
            
        } else {
            $("#uhOh").text("Seems like something went wrong, please check your answers before resubmitting!");  
            $(".allQuestions").css("background-color", "#ff0000");
        }
    });