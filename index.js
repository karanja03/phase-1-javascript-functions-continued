function saturdayFun(task){
    if(task === undefined){
    return "This Saturday, I want to roller-skate!";
    }
    else {
        return `This Saturday, I want to ${task}!`
    }

}
saturdayFun();

 function mondayWork(task){
    if(task === undefined){
        return "This Monday, I will go to the office.";
    }
    else{
        return `This Monday, I will ${task}.`;
    }

 }
 mondayWork();
function wrapAdjective(flair = "*"){
    return function(adjective = "a hardworker"){
        return `You are ${flair}${adjective}${flair}!`;

    }
}
wrapAdjective();


function wrapAdjective(flair = "||"){
    return function(adjective = "a dedicated prgrammer"){
        return `You are ${flair}${adjective}${flair}!`;

    }
}
wrapAdjective();




