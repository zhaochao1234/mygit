window.onload = function(){
    var display = document.getElementById('display').innerHTML;
    var buttons = document.getElementsByTagName('button');
    var calculate =function(value){

        if(display==='0')display='';

        if(value === 'c'){
            var max = Math.max(display.lastIndexOf('+'),display.lastIndexOf('-'),display.lastIndexOf('*'),display.lastIndexOf('/'))+1;
            display = display.substring(0,max);
        }else if(value==='ce'){
            display = '0';
        }else if(value==='b'){
            display = display.replace(display[display.length-1],'');
        }else if(value==='=' ){
            display = eval(display);
        }else if(value === '+/-'){
            var max = Math.max(display.lastIndexOf('+'),display.lastIndexOf('-'),display.lastIndexOf('*'),display.lastIndexOf('/'))+1;
            display = display.substring(0,max) + '(-' + display.substring(max,display.length)+')';

        }else{
            display += value;
        }
        if(display==='')display='0';

        document.getElementById('display').innerHTML = display;
    }

    for(i=0;i<buttons.length;i++){
        buttons[i].onclick = function(){
            calculate(this.value);
        }
    }
}
