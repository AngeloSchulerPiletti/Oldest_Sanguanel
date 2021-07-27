






function loadingUpDown(){
    const cabeçalho = document.getElementById("navegation");
    cabeçalho.innerHTML = '<img id="mobile_menu" src="./assets/images/cardapio.png"><div id="desktop_menu"><a class="menu" id="index" href="">Início</a><a class="menu" href="./html/produto.html">Produto</a><a class="menu" href="./html/empresa.html">Empresa</a><a class="menu" href="./html/contato.html">Contato</a></div><a href="https://www.instagram.com/sanguanel_hidromel/"><img id="instagram_icon" src="./assets/images/instagram1.png"></a>';
    
    const mobile_selector_screen = document.getElementById('mobile_selector_screen');
    mobile_selector_screen.innerHTML = '<div id="mobile_selector" data-menu="fromleft"><a class="menu_mobile" class="at_nav" href="">Início</a><hr class="menu_hr"><a class="menu_mobile" href="./html/produto.html">Produto</a><hr class="menu_hr"><a class="menu_mobile" href="./html/empresa.html">Empresa</a><hr class="menu_hr"><a class="menu_mobile" href="./html/contato.html">Contato</a><hr class="menu_hr"></div>';

    const rodapé = document.getElementById("footerer");
    rodapé.innerHTML = '<div id="footer_left"><h6>Contato</h6><a href="mailto:contato@sanguanel.com">contato@sanguanel.com</a><br><a href="https://web.whatsapp.com/send?phone=5551982505194">+55 51 98250-5194</a></div><hr class="divisor_hr"><div id="footer_right"><h6>Endereço</h6><span>Estrada Geral, Linha São José de Castro,<br>Boa Vista do Sul</span></div><hr class="divisor_hr"><span id="authoral">© Sanguanel Meadery 2021 - Todos os Direitos Reservados.</span>';
}
loadingUpDown();

// function loadingPage(){
//     let loader = document.getElementById("waiting_page");
//     loader.className="_non_visible_";
// }
// window.addEventListener('load', loadingPage());



// MENU DESKTOP
const instagram = document.getElementById('instagram_icon');
instagram.addEventListener("mouseover", function(){instagram.setAttribute("src", "./assets/images/instagram2.png")})
instagram.addEventListener("mouseout", function(){instagram.setAttribute("src", "./assets/images/instagram1.png")})



function menu_selector(){
    let atual = document.getElementById('index');
    atual.className = "at_nav";
}
menu_selector();









// ANIMAÇÃO
const target = document.querySelectorAll('[data-anime]'),
      animationClass = 'animate',
      tamanhoTela = window.innerHeight;

function animeScroll(){
    const windowTop = window.pageYOffset + ((tamanhoTela * 3) / 4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }
        else{
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

if(target.length){
window.addEventListener('scroll', function(){animeScroll();});
}




// MENU MOBILE

const mobile_menu = document.getElementById('mobile_menu'),
      mobile_selector = document.getElementById('mobile_selector');
var time = 2


function showIt(){
    if(time % 2 == 0){
    // mobile_selector_screen.className="showIt";
    mobile_selector_screen.classList.add(animationClass);
    mobile_selector.classList.add(animationClass);
    time++;
    }
    else if(time % 2 != 0){
    // mobile_selector_screen.className="noShow";
    mobile_selector_screen.classList.remove(animationClass);
    mobile_selector.classList.remove(animationClass);
    time++;
    }
    
}
mobile_menu.addEventListener('click', function(){showIt()});