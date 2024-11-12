


function numberGreaterThanOrEqualSeventy(array){
    let result = array.filter((num)=> num >= 70);

    return result;
}
const add = (array)=>{
    let result = array.map((num)=> num + 5);
    return result
}

const Square = (array)=>{
    let result = array.map((num)=> num * num);
    return result
}
function getBook(){
let names = ["Emily","jack","Sophia","Daniel"]
    let listBooks = ["will power","automatic milloniare","The best sales man","48 laws of power"]
    let obj = {};

    names.forEach((element,index) =>{
        obj[element] = listBooks[index]
        return obj
    })
    return obj;
    }

    function numberOfAfternoonClass(){
    listOfClassTiming = ["9.00am","11.00am","1.00pm","3.00pm","5.00pm"]
    
     let result =  listOfClassTiming.filter(()=>{ time.includes("pm")

     });
    
    return result;
    }

    function getTotalExpenses(){
       let categories = {
            "groceries": 150,
            "dining out": 100,
            "transportation":50,
            "entertailment":80
        }
        let total = 0;
        for (const element in categories) {
                total += categories[element];           
        }return total;
    }
    function StudentGrade(array){
       
        let result = array.map((num)=>{
            if(num >= 90 && num <= 100)num = "A";
            if(num >= 80 && num <= 89)num = "B";
            if(num >= 70 && num <= 79)num = "C";
            if(num >= 60 && num <= 69)num = "D";
            if(num <= 60 )num = "F";
            
            return num;
    });

            return result;

    }

    function healthFood(array){
        let result = array.filter((num)=>{
            return num.isHealthy == true;
        });
        return result;
    };

module.exports = { numberGreaterThanOrEqualSeventy,add,Square,getBook,getTotalExpenses,StudentGrade,healthFood}

