navbar = document.querySelector('.port-menu')
navbar.forEach(element => {
    element.addEventListener("click",function(){
        navbar.forEach(nav=>nav.classlist.remove("active"))
        this.classlist.add("active");
    });
});