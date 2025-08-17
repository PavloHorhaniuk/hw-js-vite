//? Напиши цикл, який пропонує в prompt ввести число більше 100.
//? Якщо користувач ввів інше число
//? або не число – попросити ввести ще раз,
//? доти він не введе число, більше 100.


let myPromt
do {
  myPromt = prompt('Enter a number more that 100')
  console.log(myPromt)

   if (myPromt.trim == null){
    console.log('1. Please enter a number more that 100')
   continue
   }

   myPromt = myPromt.trim()

   if (myPromt === '') {
    console.log('2. Please enter a number more that 100')
   }

   myPromt = Number(myPromt)
   Number.isNaN(myPromt)

   if (Number.isNaN(myPromt) ) {
    console.log('3. Please enter a number more that 100')
    continue
   }



  //  console.log(Number.isNaN(myPromt))
} while(myPromt <= 100)

  alert('Good job!')
  console.log('Good job!')
  console.log('end of cycle')
