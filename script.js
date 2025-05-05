const listArticle = {};
let slideIndex = 0;

showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("fade");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change d'image toutes les 3 secondes
}

function addCard(Produit){

qt = document.getElementById("quantite");

  quantite = parseInt(qt.innerHTML);
  qt.innerHTML = quantite + 1;

  const contenuPanier = document.getElementById("contenu-panier");
  contenuPanier.innerHTML = '';

  if(listArticle[Produit]){
    listArticle[Produit] = listArticle[Produit] + 1;
  }else {
    listArticle[Produit] = 1;
  } 
 
  if(Object.keys(listArticle).length == 0){
    contenuPanier.innerHTML = 'Panier vide';
  }else {
    const titre = document.createElement('h3');
    titre.innerHTML = 'Les produits choisis!'
    contenuPanier.appendChild(titre);
    titre.style = "color:black; text-align: center; font-weight:bolder;";

    for(let produit in listArticle){
      const ligne = document.createElement('div');
      ligne.innerHTML = `${produit} : ${listArticle[produit]}`;
      ligne.style.padding = "8px";
      contenuPanier.appendChild(ligne);
    }


  }
  
  //alert(Produit +" a été ajouté au panier");
}

