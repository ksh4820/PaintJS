const canvas = document.getElementById('jsCanvas');

// 마우스 클릭 시 painting 값은 true
let painting = false;

function onMouseMove(event){
    // offset 값은 canvas에서의 좌표 값
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x,y)
}

function onMouseDown(event){
    painting = true;
    console.log("마우스 클릭 : " ,painting)
}

function StopPainting(){
    painting = false;
    console.log("마우스 클릭 : " ,painting)
}

function onMouseUp(event){
    StopPainting();
}

if(canvas){
    // 마우스의 움직임이 있을 때 함수 호출
    canvas.addEventListener("mousemove" , onMouseMove);
    // 마우스 클릭 시 함수 호출
    canvas.addEventListener("mousedown", onMouseDown);
    // 마우스 클릭 끝났을때 함수 호출
    canvas.addEventListener("mouseup", onMouseUp);
    // 마우스가 컨버스를 벗어나면 함수 호출
    canvas.addEventListener("mouseleave", StopPainting);
}

if(canvas){
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", StopPainting);
}