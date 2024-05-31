

// function findfeb29(currentyear:number):number{
//     while (true){
//         if(currentyear % 4 === 0 && currentyear % 100 !==0 || currentyear % 400 === 0){
//             //leapyear found check if feb 29 exist
//             const isfeb29 = new Date(currentyear, 1, 29).getDate()===29;
//             if(isfeb29){
//                 return(currentyear);
//             }
//         }
//         currentyear++;
//     }
// }
// const feb29 = findfeb29(2025);
// console.log(feb29)

function findfeb29(currentyear:number):number{
    while(true){
        if(currentyear % 4 === 0 && currentyear % 100 !==0 || currentyear % 400 === 0 ){
            // leapyear check
            const isfeb29 = new Date(currentyear,1,29).getDate() === 29;
            if(isfeb29){
                return (currentyear);
            }
        }
        currentyear++;
    
    }
   
}
const feb29 = findfeb29(2026)
console.log(feb29)