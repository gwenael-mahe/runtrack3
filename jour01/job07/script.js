function jourtravaille(date){
    var feries = ["2020-01-01","2020-04-13","2020-05-01","2020-05-08","2020-05-21","2020-06-01","2020-07-14","2020-08-15","2020-11-01","2020-11-11","2020-12-25"];
    n = feries.includes(date);
    const options = { weekday: 'long',day: 'numeric', year: 'numeric', month: 'long'};
    var array = new Array();
    date = date.toLocaleString('fr-FR', options)
    array = date.split('-');
    var newDate = (array[2] + " " + array[1] + " " + array[0]);
    if(n == true){
        var myDate = new Date();
        myDate.setFullYear(array[0]);
        myDate.setMonth(array[1]);
        myDate.setDate(array[2]);
        if(myDate.getDay() == 6 || myDate.getDay() == 0){
            console.log("Non, " + newDate + " est un week-end");
        }
        else{
            console.log("Le " + newDate + " est un jour férié");
        }
    }
    else{
        console.log("Oui " + newDate + " est un jour travaillé");
    }
}