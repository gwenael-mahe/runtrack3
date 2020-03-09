function isPrime(n) 
{
    if (n<2){
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(n); i++){
        if (n % i == 0){
            return false;
        } 
    } 
    return true;
}
function sommenombrespremiers(nombreun, nombredeux){
    if(isPrime(nombreun) == true && isPrime(nombredeux) == true){
        return nombreun + nombredeux;
    }
    else{
        return false;
    }
}