function Login(){
    player1_name = document.getElementById("player1_input").value;
    player2_name = document.getElementById("player2_input").value;
  
      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);
  
      window.location = "quiz_page.html";
      player1.innerHTML = player1_name.value;
      player2.innerHTML = player2_name.value;
}
function Send(){
    number1 = document.getElementById("input_no1").value;
    number2 = document.getElementById("input_no2").value;
    actualanswer = parseInt(number1) * parseInt(number2);
    questionnumber = "<h4 id = 'part2'>" + number1 + " X " + number2 + "</h4>";
    input_box = "<label id = 'part1'>Answer : </label><input type='text' id='input_check_box'>";
    check_button = "<br><button class='btn btn-primary' onclick='Check()' style = 'font-size:20px'>Check</button>";
    row = questionnumber + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("input_no1").value = "";
    document.getElementById("input_no2").value = "";
}

function Check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actualanswer){
        if
    }
}