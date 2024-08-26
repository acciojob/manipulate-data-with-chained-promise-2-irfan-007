//your JS code here. If required.
function getArray(){
    return new Promise((res,rej)=>{
    setTimeout(()=>res([1,2,3,4]),3000);
    });
}

const output=document.getElementById("output");

getArray()
.then((arr)=>arr.filter(k=>k%2==0))
.then((arr)=>arr.map(k=>k*2))
.then((result)=>output.innerText=result);