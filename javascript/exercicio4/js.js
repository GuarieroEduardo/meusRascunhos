var painel = document.getElementById("menu");
var botao = document.getElementsByClassName("add")[0];
var cont = 1;

botao.addEventListener("click", function () {
    var entrada = document.getElementById("entrada");
    if (entrada.value !== "") {
        var item = document.createElement("li");

        var textoItem = document.createElement("span");

        textoItem.textContent = `item ${cont}: ${entrada.value} `;

        var botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.className = 'rmv';

        botaoRemover.addEventListener("click", function () {
            item.remove();
            ordenarItens();
        });

        item.appendChild(textoItem);
        item.appendChild(botaoRemover);

        var lista = painel.querySelector("ul");
        if (!lista) {
            lista = document.createElement("ul");
            painel.appendChild(lista);
        }

        lista.appendChild(item);

        cont += 1;
        entrada.value = "";
    }
});

function ordenarItens() {
    var itens = painel.querySelectorAll("li");
    cont = 1;

    for (var i = 0; i < itens.length; i++) {
        var item = itens[i];
        var textoItem = item.querySelector("span");

        var partes = textoItem.textContent.split(":");

        var nomeItem = partes[1].trim();

        textoItem.textContent = `item ${cont}: ${nomeItem}`;

        cont += 1;
    }
}
