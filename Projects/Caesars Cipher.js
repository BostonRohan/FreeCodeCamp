function rot13(str) {
var arr = str.split('');
var punc = '';
for(var i = 0; i < arr.length; i++){
    if(str.charCodeAt(i) == 32 || str.charCodeAt(i) == 46 || str.charCodeAt(i) == 33 || str.charCodeAt(i) == 63){
        arr[i] = arr[i];
    }
    else if(str.charCodeAt(i) > 77){
    arr[i] = str.charCodeAt(i) - 13;
}
else {
 arr[i] = str.charCodeAt(i) + 13;
}
}
if(arr[arr.length-1] == '!' || arr[arr.length-1] == '.' || arr[arr.length-1] == '?'){
     punc = arr[arr.length-1];
}
return arr.map(x => String.fromCharCode(x)).join('').replace(/\x00/g, ' ').trim() + punc;
}
  
  console.log(rot13("SERR PBQR PNZC"))