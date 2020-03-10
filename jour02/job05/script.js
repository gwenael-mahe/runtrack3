window.addEventListener('scroll', () =>{
    var scroll = document.body.scrollHeight - innerHeight;
    var pourcentage = pageYOffset / scroll * 100;
    var scrollpercent = Math.round(pourcentage);
    document.getElementById('footer').style.backgroundColor = "rgb( "+scrollpercent+", "+scrollpercent+",0)";
})