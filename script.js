var div5 = document.createElement("div");
div5.setAttribute("class","calculator");

div5.innerHTML=`<input type="text" placeholder="0" id="result">
<button id ="clear" onclick="Clear()">C</button>
<button id="delete" onclick="del()"><-</button>
<button id="modu"onclick="display('%')">%</button>
<button id="divi"onclick="display('/')">/</button>
<button id="7"onclick="display('7')">7</button>
<button id="8"onclick="display('8')">8</button>
<button id="9"onclick="display('9')">9</button>
<button id="multiple"onclick="display('*')">*</button>
<button id="4"onclick="display('4')">4</button>
<button id="5"onclick="display('5')">5</button>
<button id="6"onclick="display('6')">6</button>
<button id="subtract"onclick="display('-')">-</button>
<button id="1"onclick="display('1')">1</button>
<button id="2"onclick="display('2')">2</button>
<button id="3"onclick="display('3')">3</button>
<button id="add"onclick="display('+')">+</button>
<button onclick="display('.')">.</button>
<button id="0"onclick="display('0')">0</button>
<button id="equal" onclick="Calculate()" class="equal">=</button>  `;
document.getElementById("div3").append(div5);

let output= document.getElementById("result");

function display(num){

    output.value += num;
}
function Calculate(){
    try{
        output.value =eval (output.value);
    }
    catch(err){
        alert("Only numbers are allowed");
    }
}
function Clear(){
    output.value="";
}
function del(){
    output.value=output.value.slice(0,-1);
}
