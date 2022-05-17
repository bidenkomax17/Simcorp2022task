function calculate() {
    let principal = document.loandata.principal.value;
    let interest = document.loandata.interest.value / 100 / 12;
    let payments = document.loandata.years.value * 12;

    let x = Math.pow(1 + interest, payments);
    let monthly = (principal*x*interest)/(x-1);

    if (!isNaN(monthly) &&
        (monthly != Number.POSITIVE_INFINITY) && (monthly != Number.NEGATIVE_INFINITY)) {

        document.loandata.payment.value = round(monthly);
        document.loandata.total.value = round(monthly * payments);
        document.loandata.totalinterest.value = round((monthly * payments) - principal);
    }
    else {
        document.loandata.payment.value = "";
        document.loandata.total.value = "";
        document.loandata.totalinterest.value = "";
    }
}
function round(x) {
    return Math.round(x*100)/100;
}