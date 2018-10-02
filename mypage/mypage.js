window.onload = function(){
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var animated = false;
    var interval = 5000;
    var timer;

    //图片转换的函数
    var animate = function(newIndex){
        animated = true;

        var time = 500;
        var interval = 10;
        var speed = (index - newIndex) * 1000 / (time / interval);

        for(i=0;i<5;i++){
            buttons[i].className = '';
        }
        if(newIndex > 5){
            buttons[0].className = 'on';
        }else if(newIndex < 1){
            buttons[4].className = 'on';
        }else{
            buttons[newIndex - 1].className = 'on';
        }

        //动画函数
        var go = function(){
    
            if((index - newIndex)*(list.offsetLeft + newIndex*1000) < 0){
                list.style.left = (list.offsetLeft + speed) + 'px';
                setTimeout(go,interval);
            }else{
                if(newIndex > 5){
                    list.style.left = '-1000px';
                    index = 1;
                }else if(newIndex < 1){
                    list.style.left = '-5000px';
                    index = 5;
                }else{
                    list.style.left = newIndex * - 1000 + 'px';
                    index = newIndex;
                }
                animated = false;
                console.log('index=' +index);
            }
        }
        
        go();
    }



    //点击事件
    prev.onclick = function(){
        if(animated)return;
        newIndex = index - 1;
        animate(newIndex);
    }

    next.onclick =function(){
        if(animated)return;
        newIndex = index + 1;
        animate(newIndex);
    }

    //用闭包解决循环定义函数的问题
    var buttonsClick = function(i){
        return function(){
            if(animated)return;
            animate(i+1);
        }
    }
    for(var i = 0;i < buttons.length;i++){
        buttons[i].onclick = buttonsClick(i);
    }

    //循环播放
    var play = function(){
        timer = setInterval(next.onclick,interval);
    }
    var stop = function(){
        clearInterval(timer);
    }

    container.onmouseout = play;
    container.onmouseover = stop;

    play();
   
}