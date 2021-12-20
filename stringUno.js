function checkEmptyString(str) {
    comp = str.length
    if(comp == 0){
    console.log("This string is empty");
    }else if(comp > 0){
    console.log(str.charAt(0));
    return;
    }
}
