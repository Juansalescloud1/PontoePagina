// =========================================================
// 1. DADOS INICIAIS DE TESTE
// =========================================================

// Função que cria os dados base quando o site abre pela primeira vez
function iniciarDadosDeTeste() {
  // Verifica se o banco de usuários já existe na sessão
  if (!sessionStorage.getItem('db_usuarios')) {
    var usuarioTeste = [{
      id: 'usr_1001', 
      nome: 'Cliente Teste', 
      email: 'cliente@teste.com', 
      senha: '123',
      telefone: '(11) 99999-9999', 
      foto: '', 
      tipo: 'cliente',
      endereco: { 
        rua: 'Rua das Letras', 
        numero: '123', 
        bairro: 'Centro', 
        cidade: 'São Paulo', 
        cep: '01000-000' 
      }
    }];
    // Salva transformando em texto (JSON)
    sessionStorage.setItem('db_usuarios', JSON.stringify(usuarioTeste));
  }
  
  // Cria a lista de pedidos vazia se não existir
  if (!sessionStorage.getItem('db_pedidos')) {
    sessionStorage.setItem('db_pedidos', JSON.stringify([]));
  }
}

// Chama a função logo de cara
iniciarDadosDeTeste();


// =========================================================
// 2. LISTAS DE PRODUTOS (SIMULANDO O BANCO DE DADOS)
// =========================================================

var papelaria = [
  {img: "img/caderno-oxford-elegante.jpg", t: "Caderno Espiral Preto e Dourado", a: "Notes", d: "Caderno elegante com capa preta.", p: 45.00, n: 5, categoria: "cadernos"},
  {img: "img/estojo-elegante.jpg", t: "Estojo Elegante", a: "Tris", d: "Estojo preto moderno.", p: 30.00, n: 5, categoria: "organizacao"},
  {img: "img/regua-metalica-faber.jpg", t: "Régua Metálica", a: "Faber", d: "Régua metálica moderna.", p: 15.00, n: 5, categoria: "desenho"},
  {img: "img/kit-borracha-apontador.jpg", t: "Kit Borracha e Apontador", a: "Premium", d: "Conjunto prático.", p: 12.00, n: 5, categoria: "desenho"},
  {img: "img/marcadores-texto-premium.jpg", t: "Marcadores de Texto", a: "Premium", d: "Marcadores suaves.", p: 25.00, n: 5, categoria: "marcadores"},
  {img: "img/bloco-notas-adesivo-dourado.jpg", t: "Bloco de Notas Adesivas", a: "Global", d: "Notas elegantes.", p: 18.00, n: 5, categoria: "organizacao"},
  {img: "img/caneta-esferografica.jpg", t: "Caneta Esferográfica", a: "Better_Plans", d: "Caneta preta e dourada.", p: 20.00, n: 5, categoria: "canetas"},
  {img: "img/kit-caderno-elegante.jpg", t: "Kit de Caderno Elegante", a: "Better_Plans", d: "Caderno e acessórios.", p: 60.00, n: 5, categoria: "cadernos"}
];

var livros = [
  {img: 'img/sapiens.jpg', t: 'Sapiens: Uma breve história da humanidade', a: 'Yuval Noah Harari', c: 'Ciência', p: 49.9, n: 4.9},
  {img: 'img/1984.jpg', t: '1984', a: 'George Orwell', c: 'Clássico', p: 39.9, n: 4.8},
  {img: 'img/habito.jpg', t: 'O Poder do Hábito', a: 'Charles Duhigg', c: 'Autoajuda', p: 44.9, n: 4.7},
  {img: 'img/assim.jpg', t: 'É Assim que Começa', a: 'Colleen Hoover', c: 'Romance', p: 46.9, n: 4.8},
  {img: 'img/harry.jpg', t: 'Harry Potter e a Pedra Filosofal', a: 'J.K. Rowling', c: 'Fantasia', p: 54.9, n: 4.9},
  {img: 'img/assimacaba.jpg', t: 'É Assim que Acaba', a: 'Colleen Hoover', c: 'Romance', p: 49.9, n: 4.9},
  {img: 'img/oladofeio.jpg', t: 'O Lado Feio do Amor', a: 'Colleen Hoover', c: 'Romance', p: 42.9, n: 4.6},
  {img: 'img/9.jpg', t: 'Novembro, 9', a: 'Colleen Hoover', c: 'Romance', p: 45.9, n: 4.7},
  {img: 'img/omilagre.jpg', t: 'O Milagre da Manhã', a: 'Hal Elrod', c: 'Autoajuda', p: 39.9, n: 4.8},
  {img: 'img/habitosatomicos.jpg', t: 'Hábitos Atômicos', a: 'James Clear', c: 'Autoajuda', p: 49.9, n: 4.9},
  {img: 'img/a-coragem-de-ser-imperfeito.jpg', t: 'A Coragem de Ser Imperfeito', a: 'Brené Brown', c: 'Autoajuda', p: 41.9, n: 4.7},
  {img: 'img/iluninado.jpg', t: 'O Iluminado', a: 'Stephen King', c: 'Suspense', p: 59.9, n: 4.9},
  {img: 'img/itacoisa.jpg', t: 'It: A Coisa', a: 'Stephen King', c: 'Suspense', p: 69.9, n: 4.8},
  {img: 'img/misery.jpg', t: 'Misery: Louca Obsessão', a: 'Stephen King', c: 'Suspense', p: 48.9, n: 4.7},
  {img: 'img/abmeianoite.jpg', t: 'A Biblioteca da Meia-Noite', a: 'Matt Haig', c: 'Ficção', p: 47.9, n: 4.8},
  {img: 'img/arevolucaodosbichos.jpg', t: 'A Revolução dos Bichos', a: 'George Orwell', c: 'Ficção', p: 29.9, n: 4.9},
  {img: 'img/codigolimpo.jpg', t: 'Código Limpo', a: 'Robert C. Martin', c: 'Ciência', p: 89.9, n: 4.9},
  {img: 'img/apsicologiafina.jpg', t: 'A psicologia financeira', a: 'Morgan Housel', c: 'Geral', p: 44.9, n: 4.8},
  {img: 'img/verity.jpg', t: 'Verity', a: 'Colleen Hoover', c: 'Geral', p: 49.9, n: 4.9},
  {img: 'img/ahoradaestrela.jpg', t: 'A hora da estrela', a: 'Clarisse Lispector', c: 'Geral', p: 34.9, n: 4.7},
  {img: 'img/cafcomdeuspai20.jpg', t: 'Café com Deus Pai 2026', a: 'Junior Rostirola', c: 'Geral', p: 59.9, n: 4.9},
  {img: 'img/acabeadosanto.jpg', t: 'A cabeça do santo', a: 'Socorro Acioli', c: 'Geral', p: 39.9, n: 4.6},
  {img: 'img/nuncaminta.jpg', t: 'Nunca minta', a: 'Freida McFadden', c: 'Geral', p: 44.9, n: 4.8},
  {img: 'img/omassacredafaml.jpg', t: 'O massacre da família Hope', a: 'Riley Sager', c: 'Geral', p: 52.9, n: 4.7},
  {img: 'img/murdoku.jpg', t: 'Murdoku', a: 'Manuel Garand', c: 'Geral', p: 39.9, n: 4.5},
  {img: 'img/melhorquenosfil.jpg', t: 'Melhor que nos filmes', a: 'Lynn Painter', c: 'Geral', p: 42.9, n: 4.8}
];

// Puxa os livros que o administrador cadastrou e coloca no TOPO da vitrine
var livrosVendedor = sessionStorage.getItem('livros_vendedor');
if (livrosVendedor != null) {
  var listaSalva = JSON.parse(livrosVendedor);
  for (var i = 0; i < listaSalva.length; i++) {
    livros.unshift(listaSalva[i]);
  }
}

// Faz a mesma coisa para os itens de papelaria cadastrados pelo admin
var papelariaVendedor = sessionStorage.getItem('papelaria_vendedor');
if (papelariaVendedor != null) {
  var listaPapelariaSalva = JSON.parse(papelariaVendedor);
  for (var k = 0; k < listaPapelariaSalva.length; k++) {
    papelaria.unshift(listaPapelariaSalva[k]);
  }
}


// =========================================================
// 3. VARIÁVEIS GLOBAIS E FUNÇÕES AUXILIARES
// =========================================================

var categoriaAtual = '';
var itensCarrinho = [];
var carrinho = 0;
var cuponsDisponiveis = {
  'PONTO10': 0.10,   // 10% de desconto
  'BEMVINDO': 0.15,  // 15% de desconto
  'LEITOR20': 0.20   // 20% de desconto
};
var descontoAtual = 0;
var cupomAplicado = '';

// Deixa o valor com cara de dinheiro (R$ 00,00)
function formatarPreco(valor) { 
  return 'R$ ' + valor.toFixed(2).replace('.', ','); 
}

// Mostra aquele aviso flutuante verde na tela
function mostrarAviso(mensagem) {
  var aviso = document.querySelector('.toast');
  if (aviso != null) { 
    aviso.textContent = mensagem; 
    aviso.classList.add('show'); 
    
    // Tira o aviso depois de quase 2 segundos
    setTimeout(function() { 
      aviso.classList.remove('show'); 
    }, 1800); 
  }
}


// =========================================================
// 4. LÓGICA DO CARRINHO DE COMPRAS
// =========================================================

// Salva o carrinho na sessão vinculando ao id do usuário
function salvarCarrinho() {
  var usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  
  // Define o nome da chave baseada em ter usuário logado ou não
  var chave = (usuarioLogado && usuarioLogado.id) ? 'itens_carrinho_' + usuarioLogado.id : 'itens_carrinho_geral';
  
  sessionStorage.setItem(chave, JSON.stringify(itensCarrinho));
  
  // Conta a quantidade de itens pra mostrar na bolinha do menu
  carrinho = 0;
  for (var i = 0; i < itensCarrinho.length; i++) {
    carrinho = carrinho + itensCarrinho[i].qtd;
  }
  
  var iconeCarrinho = document.getElementById('cart');
  if (iconeCarrinho != null) {
    iconeCarrinho.textContent = carrinho;
  }
}

// Carrega o carrinho quando o usuário entra na página
function carregarCarrinhoDoUtilizador() {
  var usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  var chave = (usuarioLogado && usuarioLogado.id) ? 'itens_carrinho_' + usuarioLogado.id : 'itens_carrinho_geral';
  
  var itensSalvos = sessionStorage.getItem(chave);
  if (itensSalvos != null) {
    itensCarrinho = JSON.parse(itensSalvos);
  } else {
    itensCarrinho = [];
  }
  
  salvarCarrinho(); // Chama para atualizar o número no ícone
}

// Descobre se estamos na página de livros ou papelaria
function listaDaPagina() { 
  var pagina = document.body.getAttribute('data-page');
  if (pagina == 'papelaria') {
    return papelaria;
  } else {
    return livros;
  }
}

// Coloca o produto no carrinho pelo nome (título)
function adicionar(titulo) {
  var pagina = document.body.getAttribute('data-page');
  var lista = (pagina == 'home') ? livros.concat(papelaria) : listaDaPagina();
  
  // Procura o produto na lista escolhida
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].t == titulo) {
      
      // Verifica se já está no carrinho
      var jaExiste = false;
      for (var j = 0; j < itensCarrinho.length; j++) { 
        if (itensCarrinho[j].t == titulo) { 
          itensCarrinho[j].qtd = itensCarrinho[j].qtd + 1; 
          jaExiste = true; 
          break; 
        } 
      }
      
      // Se for produto novo, adiciona
      if (jaExiste == false) {
        itensCarrinho.push({
          img: lista[i].img, 
          t: lista[i].t, 
          p: lista[i].p, 
          qtd: 1
        });
      }
      
      salvarCarrinho(); 
      mostrarAviso('Adicionado: ' + titulo); 
      break;
    }
  }
}

// Remove o item clicando na lixeira do carrinho
function removerDoCarrinho(index) { 
  itensCarrinho.splice(index, 1); 
  salvarCarrinho(); 
  renderizarCarrinho(); 
}

// Abre e fecha o popup modal do carrinho
function abrirCarrinho() { 
  var modal = document.getElementById('cartModal'); 
  if (modal != null) { 
    renderizarCarrinho(); 
    modal.style.display = 'block'; 
  } 
}
function fecharCarrinho() { 
  var modal = document.getElementById('cartModal'); 
  if (modal != null) {
    modal.style.display = 'none'; 
  }
}

// Aplica o cupom digitado pelo usuário
function aplicarCupom() {
  var inputCupom = document.getElementById('inputCupom');
  if (inputCupom == null) return;

  var codigo = inputCupom.value.trim().toUpperCase();

  if (cuponsDisponiveis[codigo] != null) {
    descontoAtual = cuponsDisponiveis[codigo];
    cupomAplicado = codigo;
    mostrarAviso('Cupom ' + codigo + ' aplicado (' + (descontoAtual * 100) + '% OFF)!');
    renderizarCarrinho();
  } else {
    descontoAtual = 0;
    cupomAplicado = '';
    mostrarAviso('Cupom inválido ou expirado.');
    renderizarCarrinho();
  }
}

// Copia o código fictício do PIX para a área de transferência
function copiarCodigoPix() {
  var inputPix = document.getElementById('codigoPixCopiaCola');
  if (inputPix != null) {
    navigator.clipboard.writeText(inputPix.value);
    mostrarAviso('Código PIX copiado!');
  }
}

// Alterna entre a exibição do QR Code (PIX) e os campos do Cartão
function toggleCamposCartao() {
  var formaPagamento = document.getElementById('formaPagamento');
  var divCartao = document.getElementById('camposCartao');
  var divPix = document.getElementById('camposPix');

  if (formaPagamento == null) return;

  if (formaPagamento.value == 'pix') {
    if (divPix != null) divPix.style.display = 'block';
    if (divCartao != null) divCartao.style.display = 'none';
  } else {
    if (divPix != null) divPix.style.display = 'none';
    if (divCartao != null) divCartao.style.display = 'block';
  }
}

// Monta todo o visual (HTML) de dentro do carrinho
function renderizarCarrinho() {
  var container = document.getElementById('cartItems'); 
  var totalTxt = document.getElementById('cartTotalValue'); 
  
  if (container == null) return;
  
  var usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  if (usuarioLogado == null) usuarioLogado = {};
  
  var endereco = usuarioLogado.endereco;
  if (endereco == null) endereco = {};
  
  var enderecoOk = (endereco.rua != null && endereco.numero != null);
  var textoEndereco = enderecoOk 
    ? endereco.rua + ', ' + endereco.numero + ' - ' + endereco.bairro + ', ' + endereco.cidade + ' CEP:' + endereco.cep
    : '<span style="color:#ff4757;">⚠️ Sem endereço! Cadastre no Perfil.</span>';
  
  if (itensCarrinho.length == 0) { 
    descontoAtual = 0;
    cupomAplicado = '';
    container.innerHTML = '<p class="muted" style="text-align:center;">Carrinho vazio.</p>'; 
    if (totalTxt != null) totalTxt.textContent = 'R$ 0,00'; 
    return; 
  }
  
  // Guarda a forma de pagamento selecionada antes de re-renderizar (padrão: pix)
  var selectAtual = document.getElementById('formaPagamento');
  var pagamentoSelecionado = (selectAtual != null) ? selectAtual.value : 'pix';

  var html = '';
  var subtotal = 0;
  
  for (var i = 0; i < itensCarrinho.length; i++) {
    var item = itensCarrinho[i]; 
    subtotal = subtotal + (item.p * item.qtd);
    
    html += '<div style="display:flex;gap:12px;padding:8px 0;border-bottom:1px solid var(--line);">';
    html += '<img src="' + item.img + '" style="width:40px;height:55px;border-radius:4px;object-fit:cover;">';
    html += '<div style="flex:1;"><strong>' + item.t + '</strong>';
    html += '<div style="color:var(--gold);">' + item.qtd + 'x ' + formatarPreco(item.p) + '</div></div>';
    html += '<button style="background:none;border:none;color:#ff7b6b;cursor:pointer;" onclick="removerDoCarrinho(' + i + ')">🗑️</button>';
    html += '</div>';
  }

  // Cálculo do desconto e total final
  var valorDesconto = subtotal * descontoAtual;
  var valorFinal = subtotal - valorDesconto;

  // Bloco do Cupom de Desconto
  html += '<div style="margin-top:15px;padding-bottom:12px;border-bottom:1px solid var(--line);">';
  html += '<label style="font-size:0.85rem;color:var(--gold);">🎟️ Cupom de Desconto</label>';
  html += '<div style="display:flex;gap:8px;margin-top:5px;">';
  html += '<input type="text" id="inputCupom" value="' + cupomAplicado + '" placeholder="Ex: PONTO10" style="flex:1;padding:8px;text-transform:uppercase;">';
  html += '<button type="button" onclick="aplicarCupom()" class="btn small outline">Aplicar</button>';
  html += '</div>';
  if (descontoAtual > 0) {
    html += '<small style="color:#2ecc71;display:block;margin-top:5px;">Desconto aplicado: -' + formatarPreco(valorDesconto) + ' (' + (descontoAtual * 100) + '%)</small>';
  }
  html += '</div>';
  
  // Opções de entrega e pagamento
  html += '<div style="margin-top:12px;font-size:0.85rem;">';
  html += '<p style="color:var(--gold);">📍 Entrega:</p><p>' + textoEndereco + '</p>';
  html += '<p style="color:var(--gold);margin-top:10px;">📦 Prazo: <span style="color:#2ecc71;">3 a 5 dias úteis</span></p>';
  
  html += '<label style="display:block;margin-top:10px;">Pagamento:</label>';
  html += '<select id="formaPagamento" style="width:100%;margin-bottom:10px;padding:8px;" onchange="toggleCamposCartao()">';
  html += '<option value="pix"' + (pagamentoSelecionado == 'pix' ? ' selected' : '') + '>PIX (Aprovação Imediata)</option>';
  html += '<option value="debito"' + (pagamentoSelecionado == 'debito' ? ' selected' : '') + '>Cartão de Débito</option>';
  html += '<option value="credito"' + (pagamentoSelecionado == 'credito' ? ' selected' : '') + '>Cartão de Crédito</option>';
  html += '</select>';

  // Bloco do PIX com QR Code Fictício dinâmico
  var displayPix = (pagamentoSelecionado == 'pix') ? 'block' : 'none';
  var payloadPix = '00020126580014BR.GOV.BCB.PIX0136pontoepagina@livraria.com.br520400005303986540' + valorFinal.toFixed(2) + '5802BR5913PONTO E PAGINA6009SAO PAULO62070503***6304ABCD';
  var urlQrCode = 'https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=' + encodeURIComponent(payloadPix);

  html += '<div id="camposPix" style="display:' + displayPix + ';background:rgba(255,255,255,0.03);padding:12px;border-radius:6px;text-align:center;border:1px dashed var(--gold);">';
  html += '<p style="margin-bottom:8px;color:var(--gold);font-weight:600;">Escaneie o QR Code para pagar ' + formatarPreco(valorFinal) + '</p>';
  html += '<img src="' + urlQrCode + '" alt="QR Code PIX" style="width:140px;height:140px;border-radius:6px;background:#fff;padding:6px;margin:0 auto 10px auto;display:block;">';
  html += '<div style="display:flex;gap:6px;">';
  html += '<input type="text" id="codigoPixCopiaCola" value="' + payloadPix + '" readonly style="flex:1;font-size:0.75rem;padding:6px;">';
  html += '<button type="button" onclick="copiarCodigoPix()" class="btn small">Copiar</button>';
  html += '</div></div>';
  
  // Campos ocultos do cartão
  var displayCartao = (pagamentoSelecionado != 'pix') ? 'block' : 'none';
  html += '<div id="camposCartao" style="display:' + displayCartao + ';background:rgba(255,255,255,0.03);padding:10px;border-radius:6px;">';
  html += '<input type="text" id="numCartao" placeholder="Número do Cartão" style="width:100%;margin-bottom:8px;padding:8px;">';
  html += '<div style="display:flex;gap:8px;">';
  html += '<input type="text" id="ValidadeCartao" placeholder="MM/AA" style="width:50%;padding:8px;">';
  html += '<input type="password" id="cvvCartao" placeholder="CVV" maxlength="4" style="width:50%;padding:8px;">';
  html += '</div></div></div>';
  
  container.innerHTML = html; 
  if (totalTxt != null) {
    totalTxt.textContent = formatarPreco(valorFinal);
  }
}

// Transforma o carrinho num Pedido e salva (já considerando o desconto)
function finalizarCompra() {
  if (itensCarrinho.length == 0) {
    mostrarAviso('Carrinho vazio!');
    return;
  }
  
  var usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  if (usuarioLogado == null) { 
    alert('Faça login primeiro.'); 
    window.location.href = 'login.html';
    return; 
  }
  
  if (usuarioLogado.endereco == null || usuarioLogado.endereco.rua == null || usuarioLogado.endereco.rua == '') { 
    alert('Cadastre o endereço de entrega no seu Perfil antes de finalizar!'); 
    window.location.href = 'perfil.html';
    return; 
  }
  
  var selectPg = document.getElementById('formaPagamento');
  var formaPg = (selectPg != null) ? selectPg.value : 'pix';
  
  var subtotal = 0;
  var listaCopia = [];
  for (var i = 0; i < itensCarrinho.length; i++) { 
    subtotal = subtotal + (itensCarrinho[i].p * itensCarrinho[i].qtd); 
    listaCopia.push(itensCarrinho[i]); 
  }

  var valorFinal = subtotal - (subtotal * descontoAtual);
  var numPedidoAleatorio = Math.floor(100000 + Math.random() * 900000);
  
  var novoPedido = { 
    usuarioId: usuarioLogado.id, 
    nomeCliente: usuarioLogado.nome, 
    idPedido: 'PED-' + numPedidoAleatorio, 
    data: new Date().toLocaleDateString('pt-BR'), 
    itens: listaCopia, 
    total: valorFinal, 
    status: formaPg == 'pix' ? 'Pago via PIX' : 'Em Separação', 
    pagamento: formaPg.toUpperCase(), 
    enderecoEntrega: usuarioLogado.endereco 
  };
  
  var pedidosSalvos = JSON.parse(sessionStorage.getItem('db_pedidos'));
  if (pedidosSalvos == null) pedidosSalvos = [];
  
  pedidosSalvos.push(novoPedido); 
  sessionStorage.setItem('db_pedidos', JSON.stringify(pedidosSalvos));
  
  mostrarAviso('Pedido realizado com sucesso!'); 
  
  // Limpa o carrinho e o cupom depois da compra
  itensCarrinho = []; 
  descontoAtual = 0;
  cupomAplicado = '';
  salvarCarrinho(); 
  fecharCarrinho();
  
  setTimeout(function() { 
    window.location.href = 'pedidos.html'; 
  }, 1500);
}


// =========================================================
// 5. PÁGINA DE MEUS PEDIDOS E SEUS COMPONENTES
// =========================================================

// Cria as cores das tags de status
function obterTagStatus(statusStr) {
  var statusLinha = '';
  if (statusStr != null) statusLinha = statusStr.toLowerCase();
  
  var cor = '#3498db'; // Azul padrão
  if (statusLinha.indexOf('pendente') != -1) cor = '#ffa500';
  if (statusLinha.indexOf('pago') != -1) cor = '#2ecc71';
  if (statusLinha.indexOf('enviado') != -1) cor = '#9b59b6';
  if (statusLinha.indexOf('entregue') != -1) cor = '#27ae60';
  if (statusLinha.indexOf('cancelado') != -1) cor = '#ff4757';
  
  var tagVisual = '<span style="background:rgba(255,255,255,0.1);color:' + cor + ';border:1px solid ' + cor + ';padding:4px 10px;border-radius:12px;font-size:0.8rem;">' + statusStr + '</span>';
  return tagVisual;
}

// Filtra e exibe na tela apenas os pedidos do usuário atual
function carregarMeusPedidos() {
  var container = document.getElementById('listaPedidos'); 
  if (container == null) return;
  
  var usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  if (usuarioLogado == null) return;
  
  var todosOsPedidos = JSON.parse(sessionStorage.getItem('db_pedidos'));
  if (todosOsPedidos == null) todosOsPedidos = [];
  
  var meusPedidos = [];
  for (var k = 0; k < todosOsPedidos.length; k++) {
    if (todosOsPedidos[k].usuarioId == usuarioLogado.id) {
      meusPedidos.push(todosOsPedidos[k]);
    }
  }
  
  if (meusPedidos.length == 0) {
    container.innerHTML = '<p class="muted">Nenhum pedido realizado.</p>';
    return;
  }
  
  var html = '';
  // Loop invertido para mostrar do mais recente para o mais antigo
  for (var i = meusPedidos.length - 1; i >= 0; i--) {
    var ped = meusPedidos[i];
    var statusSalvo = ped.status;
    if (statusSalvo == null) statusSalvo = 'Em Separação';
    
    html += '<div style="border:1px solid var(--line);border-radius:8px;padding:20px;margin-bottom:15px;">';
    html += '<div style="display:flex;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:10px;">';
    html += '<div><strong>' + ped.idPedido + '</strong><small style="display:block;">' + ped.data + '</small></div>';
    html += '<div>' + obterTagStatus(statusSalvo) + '</div></div>';
    html += '<div style="padding:10px 0;">';
    
    for (var j = 0; j < ped.itens.length; j++) { 
      var it = ped.itens[j];
      html += '<div style="display:flex;justify-content:space-between;">';
      html += '<span>• ' + it.qtd + 'x ' + it.t + '</span>';
      html += '<span>' + formatarPreco(it.p * it.qtd) + '</span>';
      html += '</div>';
    }
    
    html += '</div><div style="display:flex;justify-content:space-between;border-top:1px dashed var(--line);padding-top:10px;">';
    html += '<small>Pagamento: ' + (ped.pagamento || 'PIX') + '</small>';
    html += '<div style="font-size:1.1rem;color:var(--gold);">Total: ' + formatarPreco(ped.total) + '</div>';
    html += '</div></div>';
  }
  container.innerHTML = html;
}


// =========================================================
// 6. EXIBIÇÃO DA VITRINE E FILTROS
// =========================================================

function abrirZoom(srcImagem) { 
  var modal = document.getElementById("imageModal"); 
  var fotoAmpliada = document.getElementById("imgExpanded"); 
  
  if (modal != null && fotoAmpliada != null) { 
    modal.style.display = "block"; 
    fotoAmpliada.src = srcImagem; 
  } 
}

// Cria o pedaço de código HTML do produto individual
function gerarCard(item) {
  var categoria = item.c;
  if (categoria == null) categoria = item.categoria;
  if (categoria == null) categoria = '';
  
  var autor = item.a;
  if (autor == null) autor = '';
  
  var nota = 'Novo';
  if (item.n != null) nota = '★ ' + item.n;
  
  var cardHTML = '<article class="card">';
  cardHTML += '<div class="cover"><img src="' + item.img + '" onclick="abrirZoom(\'' + item.img + '\')"></div>';
  cardHTML += '<div class="info">';
  cardHTML += '<small>' + categoria + '</small>';
  cardHTML += '<h3>' + item.t + '</h3>';
  cardHTML += '<small>' + autor + '</small><br>';
  cardHTML += '<small>' + nota + '</small>';
  cardHTML += '<div class="row">' + formatarPreco(item.p);
  cardHTML += '<button class="add" onclick="adicionar(\'' + item.t + '\')">🛒</button>';
  cardHTML += '</div></div></article>';
  
  return cardHTML;
}

// Atualiza a lista na vitrine dependendo de onde o usuário está e o que buscou
function atualizarLista() {
  var pagina = document.body.getAttribute('data-page');
  var campoBusca = document.querySelector('.search');
  var textoBuscado = '';
  
  if (campoBusca != null) {
    textoBuscado = campoBusca.value.toLowerCase();
  }
  
  // Tratamento específico se for a Home (carrega pedaço de livros e pedaço de papelaria)
  if (pagina == 'home' || document.getElementById('listaMaisVendidos') != null) {
    var divLivrosHome = document.getElementById('listaMaisVendidos');
    var divPapelariaHome = document.getElementById('listaPapelariaDestaque');
    
    if (divLivrosHome != null) { 
      var blocosLivros = ''; 
      // Limita aos primeiros 5
      for (var i = 0; i < 5 && i < livros.length; i++) {
        var textoLivro = (livros[i].t + ' ' + (livros[i].a || '')).toLowerCase();
        if (textoBuscado == '' || textoLivro.indexOf(textoBuscado) != -1) {
          blocosLivros += gerarCard(livros[i]); 
        }
      } 
      divLivrosHome.innerHTML = blocosLivros || '<p class="muted">Nenhum livro encontrado.</p>'; 
    }
    
    if (divPapelariaHome != null) { 
      var blocosPapelaria = ''; 
      for (var j = 0; j < 5 && j < papelaria.length; j++) {
        var textoPap = (papelaria[j].t + ' ' + (papelaria[j].a || '')).toLowerCase();
        if (textoBuscado == '' || textoPap.indexOf(textoBuscado) != -1) {
          blocosPapelaria += gerarCard(papelaria[j]); 
        }
      } 
      divPapelariaHome.innerHTML = blocosPapelaria || '<p class="muted">Nenhum item encontrado.</p>'; 
    }
    return;
  }
  
  // Lógica para quando está na página dedicada a Livros ou Papelaria inteira
  var areaProdutos = document.getElementById('lista'); 
  if (areaProdutos == null) return;
  
  var listaCompleta = listaDaPagina(); 
  
  var selectCategoria = document.getElementById('filtroCategoria');
  var categSelecionada = 'todos';
  if (selectCategoria != null) categSelecionada = selectCategoria.value.toLowerCase();
  
  var inputPreco = document.getElementById('filtroPreco');
  var precoMaximo = 9999;
  if (inputPreco != null) precoMaximo = parseFloat(inputPreco.value);
  
  var divValorPreco = document.getElementById('valorPreco');
  if (divValorPreco != null) {
    divValorPreco.textContent = precoMaximo.toFixed(2).replace('.', ',');
  }
  
  var todosCardsHTML = '';
  
  // Loop para filtrar item por item
  for (var k = 0; k < listaCompleta.length; k++) {
    var it = listaCompleta[k];
    var textoItem = (it.t + ' ' + (it.a || '')).toLowerCase();
    var categItem = (it.categoria || it.c || '').toLowerCase();
    
    // Verifica regras de busca
    if (textoBuscado != '' && textoItem.indexOf(textoBuscado) == -1) continue;
    if (categoriaAtual != '' && categoriaAtual != 'Todas' && it.c != categoriaAtual) continue;
    if (categSelecionada != 'todos' && categItem != categSelecionada) continue;
    if (it.p > precoMaximo) continue;
    
    todosCardsHTML += gerarCard(it);
  }
  
  areaProdutos.innerHTML = todosCardsHTML || '<p class="muted">Nenhum resultado.</p>';
}

// Botões redondos de filtro na parte superior da página de livros
function filtrarCategoria(nomeDaCategoria, botaoClicado) {
  var botoes = document.getElementsByClassName('cat');
  for (var i = 0; i < botoes.length; i++) { 
    botoes[i].classList.remove('on'); 
    botoes[i].classList.remove('active'); 
  }
  
  // Liga ou desliga o filtro se for o mesmo botão
  if (categoriaAtual == nomeDaCategoria) {
    categoriaAtual = '';
  } else {
    categoriaAtual = nomeDaCategoria;
  }
  
  if (categoriaAtual != '' && botaoClicado != null) { 
    botaoClicado.classList.add('on'); 
    botaoClicado.classList.add('active'); 
  }
  
  atualizarLista();
}


// =========================================================
// 7. EVENTOS CARREGADOS AO ABRIR O SITE
// =========================================================

document.addEventListener("DOMContentLoaded", function() {
  
  // Inicialização básica
  carregarCarrinhoDoUtilizador(); 
  atualizarLista();
  
  var usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));
  var paginaAtiva = document.body.getAttribute('data-page');
  
  // Se estiver logado, troca os botões no cabeçalho pelo perfil
  if (usuarioLogado != null) {
    var authDiv = document.getElementById('authButtons');
    if (authDiv != null) authDiv.style.display = 'none';
    
    var profileDiv = document.getElementById('userProfile');
    if (profileDiv != null) profileDiv.style.display = 'flex';
    
    var spanNome = document.getElementById('userName');
    if (spanNome != null) {
      var primeiroNome = usuarioLogado.nome.split(' ')[0];
      spanNome.innerHTML = '<a href="perfil.html" style="color:var(--gold);text-decoration:none;">Olá, ' + primeiroNome + ' 👤</a>';
    }
    
    var imgHeader = document.getElementById('userAvatarHeader');
    if (imgHeader != null && usuarioLogado.foto != null && usuarioLogado.foto != '') {
      imgHeader.src = usuarioLogado.foto;
    }
  }

  // Se tentar acessar pedidos sem login, chuta pro login
  if (paginaAtiva == 'pedidos') { 
    if (usuarioLogado == null) {
      window.location.href = 'login.html'; 
      return;
    }
    carregarMeusPedidos(); 
  }
  
  // Preenche dados da tela de Perfil e salva as edições
  if (paginaAtiva == 'perfil') {
    if (usuarioLogado == null) {
      window.location.href = 'login.html'; 
      return;
    }
    
    // Joga os valores salvos nos inputs da tela
    document.getElementById('perfilNome').value = usuarioLogado.nome || ''; 
    document.getElementById('perfilTelefone').value = usuarioLogado.telefone || '';
    
    if (usuarioLogado.foto != null && usuarioLogado.foto != '') {
      document.getElementById('previewFoto').src = usuarioLogado.foto;
    }
    
    if (usuarioLogado.endereco != null) { 
      document.getElementById('endRua').value = usuarioLogado.endereco.rua || ''; 
      document.getElementById('endNumero').value = usuarioLogado.endereco.numero || ''; 
      document.getElementById('endBairro').value = usuarioLogado.endereco.bairro || ''; 
      document.getElementById('endCidade').value = usuarioLogado.endereco.cidade || ''; 
      document.getElementById('endCep').value = usuarioLogado.endereco.cep || ''; 
    }
    
    // Leitor da imagem de upload local
    var arquivoFoto = document.getElementById('inputFoto');
    if (arquivoFoto != null) {
      arquivoFoto.addEventListener('change', function(e) { 
        if (e.target.files[0] != null) { 
          var leitor = new FileReader(); 
          leitor.onload = function(evento) { 
            document.getElementById('previewFoto').src = evento.target.result; 
          }; 
          leitor.readAsDataURL(e.target.files[0]); 
        } 
      });
    }
    
    // Quando aperta "Salvar Perfil"
    var formPerfil = document.getElementById('formPerfil');
    if (formPerfil != null) {
      formPerfil.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        usuarioLogado.nome = document.getElementById('perfilNome').value; 
        usuarioLogado.telefone = document.getElementById('perfilTelefone').value; 
        usuarioLogado.foto = document.getElementById('previewFoto').src;
        
        usuarioLogado.endereco = { 
          rua: document.getElementById('endRua').value, 
          numero: document.getElementById('endNumero').value, 
          bairro: document.getElementById('endBairro').value, 
          cidade: document.getElementById('endCidade').value, 
          cep: document.getElementById('endCep').value 
        };
        
        var senhaNova = document.getElementById('novaSenha').value;
        if (senhaNova.trim() != '') {
          usuarioLogado.senha = senhaNova;
        }
        
        // Substitui os dados atualizados no banco de dados geral
        var listaUsuarios = JSON.parse(sessionStorage.getItem('db_usuarios'));
        if (listaUsuarios == null) listaUsuarios = [];
        
        for (var i = 0; i < listaUsuarios.length; i++) { 
          if (listaUsuarios[i].id == usuarioLogado.id) { 
            listaUsuarios[i] = usuarioLogado; 
            break; 
          } 
        }
        
        sessionStorage.setItem('db_usuarios', JSON.stringify(listaUsuarios)); 
        sessionStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
        
        mostrarAviso('Perfil atualizado com sucesso!'); 
        setTimeout(function() { location.reload(); }, 1200);
      });
    }
  }

  // Sistema que fecha a tela de Zoom da foto e do Carrinho clicando fora
  var janelaZoom = document.getElementById("imageModal"); 
  var botaoFecharZoom = document.querySelector(".close-modal"); 
  var janelaCarrinho = document.getElementById("cartModal");
  
  if (botaoFecharZoom != null) {
    botaoFecharZoom.onclick = function() { 
      if (janelaZoom != null) janelaZoom.style.display = "none"; 
    };
  }
  
  window.onclick = function(e) { 
    if (e.target == janelaZoom) janelaZoom.style.display = "none"; 
    if (e.target == janelaCarrinho) janelaCarrinho.style.display = "none"; 
  };

  // Processo de Cadastro
  var formCad = document.getElementById('cadastro') || document.getElementById('cadastroForm') || document.getElementById('formCadastro');
  if (formCad != null) {
    formCad.addEventListener('submit', function(e) {
      e.preventDefault(); 
      
      var n = document.getElementById('nome').value;
      var em = document.getElementById('email').value;
      var s = document.getElementById('senha').value;
      
      var cxConf = document.getElementById('conf');
      var c = (cxConf != null) ? cxConf.value : s;
      
      var cxTermos = document.getElementById('termos');
      var t = (cxTermos != null) ? cxTermos.checked : true;
      
      if (n.length < 3 || em.indexOf('@') == -1 || s.length < 6 || c != s || t == false) {
        alert('Verifique os dados preenchidos. Senha no mínimo 6 caracteres.');
        return;
      }
      
      var listaCadastros = JSON.parse(sessionStorage.getItem('db_usuarios'));
      if (listaCadastros == null) listaCadastros = [];
      
      for (var i = 0; i < listaCadastros.length; i++) { 
        if (listaCadastros[i].email.toLowerCase() == em.toLowerCase()) {
          alert('Este e-mail já está registrado.');
          return;
        }
      }
      
      var selectTipo = document.getElementById('tipo');
      var tipoEscolh = (selectTipo != null) ? selectTipo.value : 'cliente';
      
      var novoUser = { 
        id: 'usr_' + Date.now(), 
        nome: n, 
        email: em, 
        senha: s, 
        tipo: tipoEscolh 
      };
      
      listaCadastros.push(novoUser);
      sessionStorage.setItem('db_usuarios', JSON.stringify(listaCadastros)); 
      
      mostrarAviso('Conta criada com sucesso!'); 
      setTimeout(function() { window.location.href = 'login.html'; }, 1500);
    });
  }

  // Processo de Login
  var formLogin = document.getElementById('login') || document.getElementById('loginForm');
  // Ajuste para não bugar com outros forms genéricos em outras páginas
  if (formLogin == null && paginaAtiva == 'login') {
    formLogin = document.querySelector('form');
  }
  
  if (formLogin != null && paginaAtiva == 'login') {
    formLogin.addEventListener('submit', function(e) {
      e.preventDefault(); 
      
      var digitadoEmail = document.getElementById('email').value;
      var digitadoSenha = document.getElementById('senha').value;
      
      var bancoUsuarios = JSON.parse(sessionStorage.getItem('db_usuarios'));
      if (bancoUsuarios == null) bancoUsuarios = [];
      
      var loginAprovado = false;
      
      for (var i = 0; i < bancoUsuarios.length; i++) { 
        if (bancoUsuarios[i].email.toLowerCase() == digitadoEmail.toLowerCase() && bancoUsuarios[i].senha == digitadoSenha) { 
          sessionStorage.setItem('usuarioLogado', JSON.stringify(bancoUsuarios[i])); 
          loginAprovado = true; 
          break; 
        } 
      }
      
      if (loginAprovado == true) { 
        mostrarAviso('Login efetuado!'); 
        setTimeout(function() { window.location.href = 'index.html'; }, 1500); 
      } else {
        alert('Credenciais incorretas!');
      }
    });
  }

  // Ações Exclusivas do Administrador (Página Painel)
  if (paginaAtiva == 'painel') {
    var adminOn = sessionStorage.getItem('adminLogado');
    if (adminOn != 'true') { 
      alert('Acesso negado! Por favor, entre como administrador.'); 
      window.location.href = 'login-admin.html';
      return; 
    }
    
    renderizarProdutosPainel(); 
    renderizarPedidosPainelAdmin();
    
    // Adiciona o produto novo criado pelo Admin
    var formProd = document.getElementById('formNovoProduto');
    if (formProd != null) {
      formProd.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        var tipoCat = document.getElementById('tipoProduto').value;
        var inputImg = document.getElementById('imagemFile');
        
        if (inputImg.files[0] != null) {
          var letorArq = new FileReader(); 
          
          letorArq.onload = function(eventoImg) {
            var destinoChave = 'livros_vendedor';
            if (tipoCat == 'papelaria') destinoChave = 'papelaria_vendedor';
            
            var baseAtual = JSON.parse(sessionStorage.getItem(destinoChave));
            if (baseAtual == null) baseAtual = [];
            
            var novoProdAdmin = { 
              t: document.getElementById('titulo').value, 
              a: document.getElementById('autor').value, 
              c: document.getElementById('categoria').value, 
              p: parseFloat(document.getElementById('preco').value), 
              img: eventoImg.target.result, 
              categoria: document.getElementById('categoria').value.toLowerCase(), 
              n: 5.0 
            };
            
            baseAtual.push(novoProdAdmin);
            sessionStorage.setItem(destinoChave, JSON.stringify(baseAtual)); 
            
            mostrarAviso('Produto cadastrado com sucesso!'); 
            formProd.reset(); 
            renderizarProdutosPainel();
          }; 
          
          letorArq.readAsDataURL(inputImg.files[0]);
        }
      });
    }
  }
});

// Processo de Login do Administrador
  if (paginaAtiva == 'login-admin') {
    var formLoginAdmin = document.querySelector('form');
    if (formLoginAdmin != null) {
      formLoginAdmin.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var emailAdmin = document.getElementById('email').value.trim().toLowerCase();
        var senhaAdmin = document.getElementById('senha').value;

        // Credenciais fixas do Administrador (pode alterar se quiser)
        if (emailAdmin == 'admin@pontoepagina.com' && senhaAdmin == 'admin123') {
          sessionStorage.setItem('adminLogado', 'true');
          mostrarAviso('Acesso de Administrador liberado!');
          setTimeout(function() { window.location.href = 'painel.html'; }, 1200);
        } else {
          alert('E-mail ou senha de administrador incorretos!');
        }
      });
    }
  }


// ================================================
//=========
// 8. FUNÇÕES GERAIS DE ADMINISTRAÇÃO E LOGOUT
// =========================================================

// Botão Sair no Perfil
function fazerLogout() { 
  sessionStorage.removeItem('usuarioLogado'); 
  window.location.href = 'index.html'; 
}

// Imprime a lista visual de produtos gerados pelo Admin para ele poder apagar
function renderizarProdutosPainel() {
  var bloco = document.getElementById('listaMeusProdutos'); 
  if (bloco == null) return;
  
  var listaLivAdmin = JSON.parse(sessionStorage.getItem('livros_vendedor'));
  if (listaLivAdmin == null) listaLivAdmin = [];
  
  var listaPapAdmin = JSON.parse(sessionStorage.getItem('papelaria_vendedor'));
  if (listaPapAdmin == null) listaPapAdmin = [];
  
  var layoutLista = '';
  
  for (var i = 0; i < listaLivAdmin.length; i++) {
    layoutLista += '<div class="item">';
    layoutLista += '<img src="' + listaLivAdmin[i].img + '">';
    layoutLista += '<div><strong>[Livro] ' + listaLivAdmin[i].t + '</strong>';
    layoutLista += '<p>' + formatarPreco(listaLivAdmin[i].p) + '</p></div>';
    layoutLista += '<button class="del" onclick="removerItemVendedor(\'livros\',' + i + ')">Excluir</button>';
    layoutLista += '</div>';
  }
  
  for (var j = 0; j < listaPapAdmin.length; j++) { 
    layoutLista += '<div class="item">';
    layoutLista += '<img src="' + listaPapAdmin[j].img + '">';
    layoutLista += '<div><strong>[Papelaria] ' + listaPapAdmin[j].t + '</strong>';
    layoutLista += '<p>' + formatarPreco(listaPapAdmin[j].p) + '</p></div>';
    layoutLista += '<button class="del" onclick="removerItemVendedor(\'papelaria\',' + j + ')">Excluir</button>';
    layoutLista += '</div>';
  }
  
  if (layoutLista == '') layoutLista = '<p class="muted">Nenhum produto cadastrado.</p>';
  bloco.innerHTML = layoutLista;
}

// Permite o Admin excluir os produtos dele mesmo
function removerItemVendedor(tipo, index) {
  var bancoAlvo = 'livros_vendedor';
  if (tipo == 'papelaria') bancoAlvo = 'papelaria_vendedor';
  
  var baseAdmin = JSON.parse(sessionStorage.getItem(bancoAlvo));
  if (baseAdmin == null) baseAdmin = [];
  
  baseAdmin.splice(index, 1); 
  sessionStorage.setItem(bancoAlvo, JSON.stringify(baseAdmin)); 
  
  mostrarAviso('Produto removido!'); 
  renderizarProdutosPainel();
}

// Imprime todos os pedidos gerados pelos clientes na tela do Admin
function renderizarPedidosPainelAdmin() {
  var caixaTabela = document.getElementById('listaPedidosAdmin'); 
  if (caixaTabela == null) return;
  
  var dbPedidosFull = JSON.parse(sessionStorage.getItem('db_pedidos'));
  if (dbPedidosFull == null) dbPedidosFull = [];
  
  var blocosHTML = '';
  for (var i = dbPedidosFull.length - 1; i >= 0; i--) { 
    var pedido = dbPedidosFull[i];
    
    blocosHTML += '<div style="border:1px solid var(--line);border-radius:8px;padding:15px;margin-bottom:15px;">';
    blocosHTML += '<strong>Pedido: ' + pedido.idPedido + '</strong><br>';
    blocosHTML += '<small>Total: ' + formatarPreco(pedido.total) + ' | Status: ' + pedido.status + '</small><br>';
    blocosHTML += '<div style="margin-top:8px;">';
    blocosHTML += '<button onclick="atualizarStatusPedido(\'' + pedido.idPedido + '\', \'Enviado\')" class="btn small outline">Marcar como Enviado</button> ';
    blocosHTML += '<button onclick="atualizarStatusPedido(\'' + pedido.idPedido + '\', \'Entregue\')" class="btn small outline">Marcar como Entregue</button>';
    blocosHTML += '</div></div>';
  }
  
  if (blocosHTML == '') blocosHTML = '<p class="muted">Nenhum pedido registrado.</p>';
  caixaTabela.innerHTML = blocosHTML;
}

// Muda o status e reflete lá na aba de "Meus Pedidos" do cliente
function atualizarStatusPedido(idProcurado, novoTextoStatus) {
  var todosOsPeds = JSON.parse(sessionStorage.getItem('db_pedidos'));
  if (todosOsPeds == null) todosOsPeds = [];
  
  for (var i = 0; i < todosOsPeds.length; i++) { 
    if (todosOsPeds[i].idPedido == idProcurado) { 
      todosOsPeds[i].status = novoTextoStatus; 
      break; 
    } 
  }
  
  sessionStorage.setItem('db_pedidos', JSON.stringify(todosOsPeds)); 
  mostrarAviso('Status alterado com sucesso!'); 
  renderizarPedidosPainelAdmin();
}