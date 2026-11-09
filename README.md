# Aurora Blog

Revista editorial imaginária criada para **Criando um Blog com Angular**, da Formação Angular Developer da DIO. Interface em português com identidade verde profundo, creme e terracota; tipografia editorial, cartões de destaque e ilustrações geométricas próprias em CSS.

## Executar

Requisitos usados: Node 24.16 e npm 11.13; Angular 22.2 / CLI 22.2.6. Em Windows, os comandos abaixo podem ser executados com npm.cmd.

```sh
npm ci
npm start
npm run build
npm test -- --watch=false
```

A aplicação abre normalmente na porta 4200 quando iniciada. Build está em dist/aurora-blog/browser. Hospedagem deve redirecionar rotas da SPA para index.html, preservando arquivos estáticos. Não há backend nem necessidade de chave de API.

## O que explorar

- Página inicial com destaque, cartões menores e coleção de seis artigos.
- Busca por título, assunto, categoria ou autor, sem distinguir acentos/maiúsculas.
- Categorias e filtro de favoritos combinados com busca, com estado sem resultados.
- Artigos em /artigo/:id e links relacionados. Trocar um id por outro atualiza o conteúdo mesmo quando Angular reutiliza a instância.
- Favoritos compartilhados entre cartões e artigo, somente na memória da sessão. Recarregar limpa a seleção.
- Página Sobre e recuperação para ids/caminhos inexistentes.
- Links reais, labels de formulário, navegação semântica, foco visível, link para pular ao conteúdo e anúncio da contagem de resultados. Layout com regras responsivas e respeito a movimento reduzido.

Os autores são fictícios e os textos são ensaios originais de demonstração. Não são notícias factuais. Não há cadastro, assinatura, pagamento ou envio de dados. Fontes Google Fonts têm fallback de sistema; as imagens são CSS, sem fotografias de terceiros.

## Arquitetura

- src/app/data/articles.ts: conteúdo tipado, normalização e filtros.
- components/story-card: cartão reutilizável com input obrigatório e variante de destaque, equivalente aos conceitos de Big/Small Card.
- components/art: ilustração decorativa reutilizável.
- pages/home: busca, filtros, destaque e estado vazio.
- pages/article: ActivatedRoute + toSignal + computed para ler id de forma reativa.
- pages/about: contexto editorial e limitações.
- reading-list.ts: estado compartilhado com signals e providedIn root.
- app.routes.ts: início, artigo, sobre e wildcard; app.config.ts configura router e restauração de rolagem.

Separação por componentes e dados aplica o objetivo do desafio sem copiar o conteúdo de filmes do exemplo. Não há AppModule: a implementação atual usa standalone.

## Validação e limites

Compilação de produção aprovada em 09/11/2026, sem avisos: aproximadamente 315 kB iniciais / 83 kB de transferência estimada. Cinco testes Angular/Vitest em DOM simulado passaram: navegação reativa entre ids; páginas inexistentes; favoritos entre home/artigo; busca/categoria/favoritos e estado vazio; integridade dos artigos e busca por autor.

Esses testes não substituem revisão visual em navegador real. Essa revisão está pendente porque o acesso local do navegador foi bloqueado anteriormente no fluxo, sem contorno. Não foi afirmada validação visual ou de dispositivos. Antes de publicação, conferir manualmente largura móvel e desktop, foco por teclado, links, retorno e contraste dos estados reais.

## Referência e estado da entrega

Enunciado real: criar aplicação de blog funcional, componentes inteligentes e organização Angular; replicar ou melhorar e disponibilizar repositório próprio. Referência indicada pela DIO: https://github.com/felipeAguiarCode/angular-blog, commit 1281455b29ff9cad85c2d1ad6fac4385e380b411, Angular 14. Código consultado para estudo, preservado separadamente em materiais/blog-angular-oficial. Implementação e conteúdo deste projeto são próprios.

As videoaulas do laboratório não carregaram no player DIO após navegação e recarga: iframe ausente. Não foram inventadas transcrições nem registradas como estudadas. As instruções textuais e o repositório oficial puderam ser consultados.

Publicação autorizada pelo usuário em 09/11/2026 para EVI-DEV1/aurora-blog. A confirmação da publicação e da entrega DIO é mantida no relatório de estudo externo; a implementação está pronta e validada pelos testes descritos acima. Não contém credenciais ou arquivos do perfil do estudante.

