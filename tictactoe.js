(function() {
  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  const box4 = document.getElementById("box4");
  const box5 = document.getElementById("box5");
  const box6 = document.getElementById("box6");
  const box7 = document.getElementById("box7");
  const box8 = document.getElementById("box8");
  const box9 = document.getElementById("box9");
  document
    .getElementById("vitoria")
    .firstElementChild.querySelector("button")
    .addEventListener("click", function() {
      window.location.reload();
    });
  const btnTela1 = document.querySelector(".vamosJogar").querySelector("button");

  btnTela1.addEventListener("click", function () {
    document.getElementById("tela1").style.display = "none"
    document.getElementById("tela2").style.display = "flex"
  })

  const objTicTacToe = {
    boxes: [box1, box2, box3, box4, box5, box6, box7, box8, box9],
    vitoriasPossiveis: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ],
    end: false,
    atualizaBoxes: function() {
      for (let i = 0; i < objTicTacToe.boxes.length; i++) {
        if (objTicTacToe.boxes[i].innerHTML != "") {
          objTicTacToe.boxes.splice(i, 1);
        }
      }
    }
  };

  let cont = 1;
  let x = [];
  let o = [];

  let doisPlayers = document.getElementById("toggle1").checked;

  function criaXis() {
    let xir = document.createElement("p");
    xir.classList = "elementoResposta";
    xir.textContent = "X";
    xir.style.color = "#18314F"
    return xir;
  }
  function criaBolinha() {
    let bolinhas = document.createElement("p");
    bolinhas.classList = "elementoResposta";
    bolinhas.textContent = "O";
    bolinhas.style.color = "#ff206e";
    return bolinhas;
  }

  function verificaVitoria() {
    const idVitoria = document.getElementById("vitoria");
    const vitoria2 = document.querySelector(".posBG");
    const vitorias = objTicTacToe.vitoriasPossiveis;
    let containVictoryO;
    let containVictoryX;

    let paraWinX = document.createElement("p");
    paraWinX.textContent = "Vitória do X";
    let paraWinO = document.createElement("p");
    paraWinO.textContent = "Vitória do O";
    let paraDraw = document.createElement("p");
    paraDraw.textContent = "Deu velha!";

    for (let i = 0; i < vitorias.length; i++) {
      let vitoria = vitorias[i];

      containVictoryX = vitoria.every(element => {
        return x.includes(element);
      });
      containVictoryO = vitoria.every(element => {
        return o.includes(element);
      });

      if (containVictoryX) {
        objTicTacToe.end = true;
        vitoria2.append(paraWinX);
        idVitoria.style.display = "flex";
      } else if (containVictoryO) {
        objTicTacToe.end = true;
        vitoria2.append(paraWinO);
        idVitoria.style.display = "flex";
      }
    }
    if (cont == 10) {
      if (!objTicTacToe.end) {
        vitoria2.append(paraDraw);
        idVitoria.style.display = "flex";
        objTicTacToe.end = true
      }
    }
    return objTicTacToe.end
  }

  function geraValorCpu() {
    if (!doisPlayers && cont % 2 == 0 && !objTicTacToe.end) {
      objTicTacToe.atualizaBoxes();
      console.log(objTicTacToe.end)
      if (cont == 10 || objTicTacToe.end) return;
      const random = Math.floor(Math.random() * objTicTacToe.boxes.length);
      objTicTacToe.boxes[random].appendChild(criaBolinha());
      o.push(parseInt(objTicTacToe.boxes[random].getAttribute("id").charAt(3)));
      cont++;
    }
  }

  for (let i = 0; i < objTicTacToe.boxes.length; i++) {
    objTicTacToe.boxes[i].addEventListener("click", function(e) {
      doisPlayers = document.getElementById("toggle1").checked;
      cont % 2 == 0 ? (valorPlayer = criaBolinha()) : (valorPlayer = criaXis());
      this.innerHTML == `<p class="elementoResposta" style="color: rgb(24, 49, 79);">X</p>` ||
      this.innerHTML == `<p class="elementoResposta" style="color: rgb(255, 32, 110);">O</p>`
        ? console.log("Já tem um item aí")
        : this.appendChild(valorPlayer) && cont++;
      this.innerHTML == `<p class="elementoResposta" style="color: rgb(24, 49, 79);">X</p>`
        ? x.push(i + 1)
        : o.push(i + 1);
      // console.log(valorPlayer);
      objTicTacToe.atualizaBoxes();

      if (verificaVitoria()) return;
      geraValorCpu();
      verificaVitoria();
      
    });
  }
})();
