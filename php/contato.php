<?php 

if(isset($_POST['email']) && !empty($_POST['email'])){

$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['message']);


$to = "contato@sanguanel.com";
$subject = addslashes($_POST['subject']);
$body = "Nome: ".$nome."\r\n".
        "Email: ".$email."\r\n".
        "Mensagem: ".$mensagem;
$header = "From:site@sanguanel.com"."\r\n".
          "Reply-To:".$email."\r\n".
          "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){

    echo('<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Está é a área do site de contato com o cliente, parceiros e todos aqueles que desejam contatar a empresa">
    <meta http-equiv="content-language" content="pt-br">
    <meta name="creator" content="Angelo Schuler Piletti">
    <meta name="keywords" content="Hidromel, Sanguanel, Contato, Email">
    <meta name="robots" content="follow">
    <meta name="rating" content="general">
    <link rel="icon" href="../assets/images/IconSite.png" type="image/png">
    <link rel="stylesheet" type="text/css" href="../css/geralstyle.css">
    <link rel="stylesheet" type="text/css" href="../css/contato.css">
    
    <title>Contato|Sanguanel Hidromel</title>
</head>

<body>
    <div id="waiting_page" class="_visible_">
      <div id="waiting_container">
        <img id="waiting_logo" src="../assets/images/Logo Sanguanel.png">
        <h6>Carregando...</h6>
      </div>
    </div>
    <script src="../js/pageload.js"></script>
    <nav id="navegation">
      
    </nav>


    <main>
      <section id="title_background">
        <h2>FALE CONOSCO</h2>
      </section>

    </main>
    <section id="message">
      <div id="title_div">
        <img src="../assets/images/contatoIcons/messages.png">
        <h6><specialh6>Ficaremos contentes em</specialh6><br>responder você</h6>
      </div>
      <span style="opacity:1;display:block;">Mensagem Enviada!</span>
      <form method="POST" action="../php/contato.php">
        <input type="text" name="name" placeholder="Nome" id="A1"><input type="email" name="email" placeholder="E-Mail" id="A2">
        <input type="text" name="subject" placeholder="Assunto" id="B">
        <textarea name="message" placeholder="Mensagem" id="C"></textarea>
        
        <input type="submit" value="enviar" id="D" autocomplete="off">
        
      </form>
      
    </section>

    <footer id="footerer">
      
    </footer>
    
    
</body>
<script src="../js/phpcontato.js"></script>
<script src="../js/contato.js"></script>');
}
else{
    echo("Mensagem Não Enviada...");
}


}
?>