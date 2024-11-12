const {numberGreaterThanOrEqualSeventy, add, Square, getBook, getTotalExpenses, StudentGrade,healthFood} = require("./ClassTask")

test("numberGreaterThanOrEqualSeventy",()=>{
    const arrayOfNumbers = [10,78,90,45,88,69,92,73,56,43];
    let result = numberGreaterThanOrEqualSeventy(arrayOfNumbers)
    let answer = [78,90,88,92,73];
    expect(result).toEqual(answer);

})

test("add five to every number in the array",()=>{
    const arrayOfNumbers = [85,92,78,95];
    let result = add(arrayOfNumbers)
    let answer = [90,97,83,100];
    expect(result).toEqual(answer);
})

test("Square every number in the array",()=>{
    const arrayOfNumbers = [2,4,6,8,10];
    let result = Square(arrayOfNumbers)
    let answer = [4,16,36,64,100];
    expect(result).toEqual(answer);
})

test("getBooks to each individual",()=>{
    const names = ["Emily","jack","Sophia","Daniel"];
    let result = getBook(names)


    let answer = {
                 Emily: "will power",
                 jack:  "automatic milloniare",
                 Sophia: "The best sales man",
                 Daniel: "48 laws of power"
             };

    expect(result).toEqual(answer);
})

test("getTotalExpenses",()=>{
    const categories = {
        "groceries": 150,
        "dining out": 100,
        "transportation":50,
        "entertailment":80
    }
    let result = getTotalExpenses(categories)
    let answer = 380;
    expect(result).toBe(answer);
})

test("StuedentGrade",()=>{
    const arrayOfNumbers = [95,78,85,60,45,92];

    let result = StudentGrade(arrayOfNumbers)
    let answer = ['A','C','B','D','F','A'];
    expect(result).toEqual(answer);
})

test("healthyFood",()=>{
    const shoppingList = [
     {name: 'Apples', category: 'Fruits', isHealthy: true },
     {name: 'Potato Chips', category: 'Snacks', isHealthy: false} ,
     {name: 'Carrots', category: 'Vegetables', isHealthy: true },
    {name: 'Chocolate Bars', category: 'Sweets', isHealthy: false} ,
    {name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
    {name: 'Soda', category: 'Beverages', isHealthy: false} 
    ];

    let result = healthFood(shoppingList)
    let answer = [
         {name: 'Apples', category: 'Fruits', isHealthy: true} ,
        { name: 'Carrots', category: 'Vegetables', isHealthy: true} ,
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true }

    ]

    expect(result).toEqual(answer);
})