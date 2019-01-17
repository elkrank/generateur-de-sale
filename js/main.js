let citation = ["Mon p'tit bonhomme de cro-mignon, je me sens tellement vicieux Quand j'imagine ton oignon frêle mais frais et délicieux : mon précieux !","Bas les masques, enculé, après c'battle, tu te feras discretJ'serai le masculin sacré, et toi l'émasculé secret Mais t'inquiète, je porterai, après t'avoir castré à vif Ta paire de couilles en boucles d'oreille et ta bite en pendentif","Arrête de jouer les véner, moi je sais que t’es un bon gars La première fois qu’on s’est vus tes yeux brillaient comme les mangas.","T’es un putain de geek Ca se voit à ta frimousse Le mec a pris un compte Dofus, il se prend pour un Anonymous.","Là j'dois parler profondeur, là j'dois parler de sucette Là j'dois parler de ta soeur car c'est l'jeu ma pauvre Lucette Et moi, j'aime trop les sucres d'orge de ta salope de frangine J'lui défonce tellement la gorge qu'elle croit qu'j'suis une angine","Là il faut qu'j'te doigte de-spee', désolé si ça fait mal Mais la chatte de ton inspi', faute de sécrétion vaginale Est aussi sèche que les caisses de l'éducation nationale"];

let generateur = document.getElementById("generateur");
document.getElementById("btn").addEventListener("click",sale);

function sale(){
    generateur.innerHTML = random_item(citation);
}

function random_item(citation)
{
  
return citation[Math.floor(Math.random()*citation.length)];
     
}
