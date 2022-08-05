let uppercaseHeader = document.getElementById('header').textContent.toUpperCase();
document.getElementById('header').innerHTML = uppercaseHeader;
let boxes = document.querySelector('.boxes').children;
for(let box of boxes){
  box.style.height = `${screen.width*0.87*0.2}px`;
}

let sec = 0;
let min = 0;
let hour = 0;
let day = 2;
let moving = false;
let start = document.querySelector('#start');
let reset = document.getElementById('reset');
let accelerate = 1;
let inputs = document.querySelector(".inputs").children
for (let i=0; i<inputs.length;i++){
  inputs[i].addEventListener("change",()=>{
    if(inputs[i].value <10){
    document.querySelector(".boxes").children[i].children[3].innerHTML = `0${inputs[i].value}`;
  }else{
    document.querySelector(".boxes").children[i].children[3].innerHTML = inputs[i].value;
  }
  })
}

reset.addEventListener('click', () =>{
  location.reload();
})
start.addEventListener('click', () => {
  accelerate = document.getElementById("accelerate").value
    if(moving){
      return;
    }else{
      if(document.getElementById('sec').value != ""){
      sec = document.getElementById('sec').value;
    }
    if(document.getElementById('min').value != ''){
      min = document.getElementById('min').value;
    }
    if(document.getElementById('hour').value != ""){
      hour = document.getElementById('hour').value;
    }
    if(document.getElementById('day').value != ''){
      day = document.getElementById('day').value;
    }
    
      
    setInterval(() => {
      document.querySelectorAll('.number')[3].style.animationName = "example";
  document.querySelectorAll('.number')[3].style.animationDuration = `${1/accelerate}s`;
      moving = true;
      
      if(sec == 0 && min ==0 && hour ==0 && day ==0){
        moving = false;
        document.querySelectorAll('.number')[3].style.animationName = "none";
        clearInterval();
        return;

      }
      if(sec == 0){
        sec = 59;
        if(min == 0){
          min = 59;
          document.querySelectorAll('.number')[2].style.animationName = "as";
          document.querySelectorAll('.number')[2].style.animationDuration = `${1/accelerate}s`;
          setTimeout(() => {
            document.querySelectorAll('.number')[2].style.animationName = "none";
          }, 1/accelerate*1000);
          if(hour == 0){
            hour = 23;
            document.querySelectorAll('.number')[1].style.animationName = "as";
          document.querySelectorAll('.number')[1].style.animationDuration = `${1/accelerate}s`;
          setTimeout(() => {
            document.querySelectorAll('.number')[1].style.animationName = "none";
          }, 1/accelerate*1000);
            if(day == 0){
              return;
            }else{
              day--;
              document.querySelectorAll('.number')[0].style.animationName = "as";
          document.querySelectorAll('.number')[0].style.animationDuration = `${1/accelerate}s`;
          setTimeout(() => {
            document.querySelectorAll('.number')[0].style.animationName = "none";
          }, 1/accelerate*1000);
            }
          }else{
            hour--;
            document.querySelectorAll('.number')[1].style.animationName = "as";
          document.querySelectorAll('.number')[1].style.animationDuration = `${1/accelerate}s`;
          setTimeout(() => {
            document.querySelectorAll('.number')[1].style.animationName = "none";
          }, 1/accelerate*1000);
          }
        }else{
          min--;
          document.querySelectorAll('.number')[2].style.animationName = "as";
          document.querySelectorAll('.number')[2].style.animationDuration = `${1/accelerate}s`;
  setTimeout(() => {
    document.querySelectorAll('.number')[2].style.animationName = "none";
  }, 1/accelerate*1000);
        }
      }else{
        
        sec --;
      }
      if(sec < 10){
        document.querySelector('.second').innerHTML = `0${sec}`;
      }else{
        document.querySelector('.second').innerHTML = sec;
      }
      if(min < 10){
        document.querySelector('.minute').innerHTML = `0${min}`;
      }else{
        document.querySelector('.minute').innerHTML = min;
      }
      if(hour < 10){
        document.querySelector('.hour').innerHTML = `0${hour}`;
      }else{
        document.querySelector('.hour').innerHTML = hour;
      }
      if(day < 10){
        document.querySelector('.day').innerHTML = `0${day}`;
      }else{
        document.querySelector('.day').innerHTML = day;
      }
    
    }, 1000/accelerate);
  }
})

for(let svg of document.querySelector('footer').children){
  svg.addEventListener('mouseover',() =>{
    svg.firstElementChild.style.display = 'none';
    svg.lastElementChild.style.display = 'inline'
  })
}
for(let svg of document.querySelector('footer').children){
  svg.addEventListener('mouseout',() =>{
    svg.lastElementChild.style.display = "none";
    svg.firstElementChild.style.display = 'inline';
  })
}