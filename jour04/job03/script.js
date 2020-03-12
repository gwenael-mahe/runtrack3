$(document).ready(async function(){
        const pokemon = await $.ajax({method: "GET", url: "pokemon.json"})
    $("#button").click(function(){
        var occurence = [];
        for(const {id , name: names, type: types} of pokemon){
            const select = {id, names, types};
            if(id == $("#id").val()){
                occurence.push(select);
                console.log(occurence);
            }
            if($("#name").val() !== null){
                for(const name of Object.values(names)){
                    if(name.indexOf($("#names").val()) > -1){
                        occurence.push(select);
                        console.log(occurence);
                    }
                }
            }
            if(types.includes($("#type").val())){
                occurence.push(select);
                console.log(occurence);
            }
            //console.log(pokemon);
        }
        occurence = $.uniqueSort(occurence);
        for(const select of occurence){
            $("body").append($(`<p>${select.id}</p>`));
            $("body").append($(`<p>${Object.values(select.names).join("<br/>")}</p>`));
            $("body").append($(`<p>${select.types.join("<br/>")}</p>`));
        }
    })
})