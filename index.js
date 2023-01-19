const navbar_oculta = document.getElementById("navbar-oculta")
const navbar_oculta_container = document.getElementById("navbar-oculta__container")

showCookiesDiv()


function onBodyScroll(){
    if(window.pageYOffset > window.innerHeight){
        navbar_oculta.classList.add("ativo")
    }
    else{
        navbar_oculta.classList.remove("ativo")
    }
}


function onClickBotaoVerPlanos(){
    const div_orcamento = document.getElementById("main__div-planos-servicos")
    // const offset = div_orcamento.getBoundingClientRect().top - document.body.getBoundingClientRect().top - navbar_oculta.offsetHeight
    const offset = div_orcamento.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 80 //esse 80 eh a altura da navbar, se deixar pra usar o .offsetHeight, o botao da capa nao vai funcionar pois na hora q ele for pressionado, a navbar terah altura 0
    
    window.scrollTo({top: offset, behavior: 'smooth'})
}


function onClickBotaoInicio(){
    window.scrollTo({top: 0, behavior: 'smooth'})
}


function onClickDivPergunta(_id){
    const div_pergunta = document.getElementById(_id)
    div_pergunta.classList.toggle("ativo")
}


function onClickBotaoWhatsApp(){
    gtag_report_conversion()
}

function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-379172488/aaIhCIGDhYgYEIjt5rQB',
        'event_callback': callback
    });
    return false;
}


function showCookiesDiv(){
    let cookiesLength = document.cookie.length
    if(cookiesLength === 0){
        document.getElementById("main__div-cookies").classList.add("ativo")
    }
    else{
        document.getElementById("main__div-cookies").classList.remove("ativo")
    }
}


function onClickBotaoCookiesVerConfig(){
    window.open("./pagina-politica-privacidade.html", '_blank');
}


function onClickBotaoCookiesAceito(){
    document.cookie = "permissaoCookies=permitido; path=/"
    document.getElementById("main__div-cookies").classList.remove("ativo")
}








