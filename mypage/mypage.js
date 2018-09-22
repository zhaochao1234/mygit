window.onload = function(){
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var animated = false;
    var interval = 5000;

    //图片转换的函数
    var animate = function(newIndex){
        animated = true;

        var time = 500;
        var interval = 10;
        var speed = (index - newIndex) * 1000 / (time / interval);

        //动画函数 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        var go = function(){
    
            if((index - newIndex)*(list.offsetLeft + newIndex*1000) < 0){
                lift.style.left = (list.offsetLeft + speed) + 'px';
                setTimeout(go,interval);
            }
        }

        //转换buttons
        buttons[index - 1].className = '';
        if(newIndex > 5){
            buttons[0].className = 'on';
        }else if(newIndex < 1){
            buttons[4].className = 'on';
        }else{
            buttons[newIndex - 1].className = 'on';
        }
        
        //执行动画
        go();

        list.style.left = newIndex * - 1000 + 'px';

        index = newIndex;
        animated = false;
    }

    //归位的函数
    var homing = function(){
        if(newIndex > 5){
            list.style.left = '-1000px';
            index = 1;
        }
        if(newIndex < 1){
            list.style.left = '-5000px';
            index = 5;
        }
    } 

    //自动播放和停止播放的函数  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    var play = function(){
        timer = setTimeout(() => {
            next.onclick;
            play;
        }, interval);
    }
    var stop = function(){
        clearTimeout(timer);
    }

    //执行
    prev.onclick = function(){
        if(animated)return;
        newIndex = index - 1;
        animate(newIndex);
        homing();
    }

    next.onclick =function(){
        if(animated)return;
        newIndex = index + 1;
        animate(newIndex);
        homing();
    }

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    for(var i = 0;i < buttons.length;i++){
        buttons[i].onclick = function(){
            if(animated)return;
            animate(i + 1);
        }
    }

    container.onmouseout = play;
    container.onmouseover = stop;

    play();
   
}