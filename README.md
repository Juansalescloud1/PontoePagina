# Ponto & Página

Loja demonstrativa estática feita com HTML, CSS e JavaScript, sem etapa de build.

## Executar localmente

Na pasta do projeto, inicie um servidor estático:

```sh
python3 -m http.server 8000
```

Abra `http://localhost:8000` no navegador. Para depurar pelo VS Code, inicie o
servidor primeiro e use a configuração **Open index.html**.

## Publicar no GitHub Pages

O workflow publica automaticamente o site no GitHub Pages a cada atualização
da branch `main`. Depois que a execução **Deploy static site to GitHub Pages**
terminar com sucesso, acesse:

<https://juansalescloud1.github.io/PontoePagina/>

Se necessário, habilite **Settings → Pages → Build and deployment → GitHub Actions**
no repositório. Não é necessário comando de build nem diretório de saída:
`index.html`, os demais arquivos do site e `img/` são publicados juntos.

Este projeto é uma demonstração de interface: contas, pedidos e produtos usam
armazenamento do navegador e não há backend nem processamento real de pagamentos.
Não use dados reais de clientes ou pagamentos.
