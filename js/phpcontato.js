





function loadingUpDown(){
    cabeçalho = document.getElementById("navegation");
    cabeçalho.innerHTML = '<a class="menu" id="index" href="../index.html">Início</a><a class="menu" id="produto" href="../html/produto.html">Produto</a><a class="menu" id="empresa" href="../html/empresa.html">Empresa</a><a class="menu" id="contato" href="../html/contato.html">Contato</a><a href="https://www.instagram.com/sanguanel_hidromel/"><img id="instagram_icon" src="../assets/images/instagram1.png"></a>'
    
    rodapé = document.getElementById("footerer");
    rodapé.innerHTML = '<div id="footer_left"><h6>Contato</h6><a href="mailto:contato@sanguanel.com">contato@sanguanel.com</a><br><a href="https://web.whatsapp.com/send?phone=5551982505194">+55 51 98250-5194</a></div><div id="footer_right"><h6>Endereço</h6><span>Estrada Geral, Linha São José de Castro,<br>Boa Vista do Sul</span></div><span id="authoral">© Sanguanel Meadery 2021 - Todos os Direitos Reservados.</span>'
}
loadingUpDown();

// function loadingPage(){
//     let loader = document.getElementById("waiting_page");
//     loader.className="_non_visible_";
// }
// window.addEventListener('load', loadingPage());


var instagram = document.getElementById('instagram_icon') 
instagram.addEventListener("mouseover", function(){instagram.setAttribute("src", "../assets/images/instagram2.png")})
instagram.addEventListener("mouseout", function(){instagram.setAttribute("src", "../assets/images/instagram1.png")})



// var actual_language = document.getElementById("actual_language");
// var language_selector = document.getElementById("language_selector");

// function change_selector(){
//     actual_language.className="_non_visible_";
//     language_selector.className="_visible_"
// }

// function choosed_language(country){
//     let language_icon = document.getElementById("language_icon")

//     if (country == "BRA"){
//         language_icon.setAttribute("src", "../assets/images/countryIcons/brasil.png")
//     }
//     else if (country == "ESP"){
//         language_icon.setAttribute("src", "../assets/images/countryIcons/espanha.png")
//     }
//     else if (country == "EUA"){
//         language_icon.setAttribute("src", "../assets/images/countryIcons/estados-unidos.png")
//     }

//     actual_language.className="_visible_";
//     language_selector.className="_non_visible_"
// }