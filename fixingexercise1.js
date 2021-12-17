function someFunction(list) {

    list = [2];
    if (list.length === 0) {
    return 0;
    }else{
        console.log("No cero");
    }
    
    return list.length;
}

someFunction();