var list = []
var OldResultat = 0

function addToList (a) {
    if ( a == '/' || a == '+' || a == '-' || a == '*' ) {
        list.push(` ${a} `)
    } else {
        list.push(a)
    }
    document.getElementById("result").innerHTML=list.join('')
}

function secureCal(){
    let regex = /^[\d\s()+\-*/.,*]+$/
    if(!regex.test(list.join(''))) {
        throw new Error ("la valeur de la liste incorrecte")
    }
    return OldResultat = eval(list.join(''))
}

function calc() {
    document.getElementById("calcul").innerHTML = list.join('')
    document.getElementById("result").innerHTML = secureCal()
    list =[]
    list.push(OldResultat)
    
}

function del() {
   list.pop()
    if(list.length == 0)
        document.getElementById("result").innerHTML=0
    else document.getElementById("result").innerHTML=list.join('') 
}

function delAll() {
    list =[]
    document.getElementById("result").innerHTML=0
}