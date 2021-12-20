function checkTwoStringsSame() {
    let str1 = prompt("Dame cadena uno");
    let str2 = prompt("Dame cadena dos");
    if(str1.toUpperCase() == str2.toUpperCase()){
    console.log("True");
    }else{
    console.log("False");
    return;
    }
}
checkTwoStringsSame();
