//income inputs
const incomeSalary=document.getElementById('income-salary'),
 incomeFreelance=document.getElementById('income-freelance'),
 incomeExtra1=document.getElementById('income-extra-1'),
 incomeExtra2=document.getElementById('income-extra-2');

//costs' inputs
const costsFlat=document.getElementById('costs-flat'),
    costsHouseServices=document.getElementById('costs-house-services'),
    costsTransport=document.getElementById('costs-transport'),
    costsCredit=document.getElementById('costs-credit');

//total inputs
const totalMonthInput=document.getElementById('total-month'),
    totalDayInput=document.getElementById('total-day'),
    totalYearInput=document.getElementById('total-year');


let totalDay,totalMonth,totalYear;

//money box

const moneyBoxRange=document.getElementById('money-box-range'),
      accumulationInput=document.getElementById('accumulation'),
      spend=document.getElementById('spend');

let accumulation,
    totalPercents=0;

const inputs=document.querySelectorAll('.input');
for (input of inputs){
    input.addEventListener('input',()=>{
        countingAvailableMoney();
        calculationPercents()

    })
}

const strToNum= str => str.value ? parseInt(str.value) : 0 ;

const countingAvailableMoney= () =>{
    const totalPerMonth=
   strToNum(incomeSalary)+strToNum(incomeFreelance) +strToNum(incomeExtra1)+strToNum(incomeExtra2);
    const totalCosts=
        strToNum(costsFlat)+strToNum(costsHouseServices) +strToNum(costsTransport)+strToNum(costsCredit);
    totalMonth = totalPerMonth-totalCosts;
    totalMonthInput.value = totalMonth;
    


}
moneyBoxRange.addEventListener('input',e=>{
    const totalPercentEl=document.getElementById('total-precents')
    totalPercents=e.target.value
    totalPercentEl.innerHTML=totalPercents
    calculationPercents()

})

const calculationPercents=()=>{
    accumulation=((totalMonth*totalPercents)/100).toFixed()
    accumulationInput.value=accumulation
    spend.value=totalMonth-accumulation

    totalDay=(spend.value/30).toFixed()
    totalDayInput.value=totalDay
    totalYear=accumulation*12
    totalYearInput.value=totalYear
}