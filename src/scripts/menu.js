verificarMenu();

function verificarMenu() {
    var menu = document.getElementById('menu');

    if (menu) {
        criarMenu();
    }
}


function criarMenu(){
    var header = document.createElement('header');
    var nav = document.createElement('nav');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var a = document.createElement('a');
    var div = document.createElement('div');
    var img = document.createElement('img');     

    // Configurar atributos e conteúdo do elemento img
  // img.setAttribute('src', 'caminho_para_imagem'); // Defina o caminho para a imagem desejada
  // img.setAttribute('alt', 'Descrição da imagem'); // Defina uma descrição para acessibilidade

  // Adicionar o elemento img à div
  div.appendChild(img);

  // Configurar atributos e conteúdo do elemento a
  a.setAttribute('href', '#'); // Defina o link desejado
  a.textContent = 'Página 1'; // Defina o texto do link

  // Adicionar o elemento a à li
  li.appendChild(a);

  // Adicionar a li ao ul
  ul.appendChild(li);

  // Repita o processo para adicionar mais itens de menu (li) ao ul

  // Adicionar o ul à nav
  nav.appendChild(ul);

  // Adicionar a div e a nav ao header
  header.appendChild(div);
  header.appendChild(nav);

  // Adicionar o header ao elemento desejado na página
  var container = document.getElementById('menu'); // Substitua 'menu-container' pelo ID do elemento onde deseja inserir o menu
  container.appendChild(header);

}