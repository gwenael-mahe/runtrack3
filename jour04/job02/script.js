function jsonValueKey(ficher,key){
    var text = JSON.parse(ficher);
    console.log(text[key]);
}
jsonValueKey('{"name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation":"2019"}', "city");