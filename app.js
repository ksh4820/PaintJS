const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext("2d");
const color = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const ModeBtn = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);


ctx.strokeStyle = "#INITIAL_COLOR";
ctx.fillStyle = "INITIAL_COLOR";
ctx.lineWidth = 2.5;

// ctx.fillStyle = "green";
// ctx.fillRect(0, 0, 700, 600);

// 마우스 클릭 시 painting 값은 true
let painting = false;

let filling = false;

function startPainting(){
    painting = true;
}

// 모든 마우스의 움직임을 감지하여 라인 생성
function onMouseMove(event){
    // offset 값은 canvas에서의 좌표 값
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        // path 생성
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function handleCanvasClick(){
    if(filling)
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function handleRightClick(event){
    // console.log(event);
    event.preventDefault();
}

if(canvas){
    // 마우스의 움직임이 있을 때 함수 호출
    canvas.addEventListener("mousemove" , onMouseMove);
    // 마우스 클릭 시 함수 호출
    canvas.addEventListener("mousedown", startPainting);
    // 마우스 클릭 끝났을때 함수 호출
    canvas.addEventListener("mouseup", stopPainting);
    // 마우스가 컨버스를 벗어나면 함수 호출
    canvas.addEventListener("mouseleave", stopPainting);
    // 마우스 컨버스 클릭 시 
    canvas.addEventListener("click", handleCanvasClick);

    canvas.addEventListener("contextmenu", handleRightClick)
}

//Color
function handleColorClick(event){
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
// console.log(Array.from(color));
Array.from(color).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

//Range
function handleRangeChange(event){
    // console.log(event.target.value);
    const lineSize = event.target.value;
    ctx.lineWidth = lineSize;
}

if(range){
    //range이벤트는 input에 반응합니다.
    range.addEventListener("input", handleRangeChange);
}

//FillBtn

function handleModeClick(){
    if(filling){
        filling = false;
        ModeBtn.innerText = "FILL";
    }
    else{
        filling = true;
        ModeBtn.innerText = "PAINT";
    }
}

if(ModeBtn){
    ModeBtn.addEventListener("click", handleModeClick);
}

//save
function handleSaveClick(){
    //  canvas의 데이터를 image로 받아오기
    // const image = canvas.toDataURL("image/jpeg");
    // default 값은 .png
    const image = canvas.toDataURL();
    // console.log(image);
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[😀]";
    link.click();
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}