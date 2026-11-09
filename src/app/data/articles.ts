export interface Article {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  minutes: number;
  art: string;
  paragraphs: string[];
}
export const articles: Article[] = [
  {
    id: 'cidades-que-respiram',
    category: 'Design',
    title: 'E se a cidade também pudesse respirar?',
    excerpt:
      'Entre concreto e natureza, um convite para desenhar lugares que cuidam de quem vive neles.',
    author: 'Clara Nunes',
    date: '2026-11-09',
    minutes: 5,
    art: 'garden',
    paragraphs: [
      'Uma cidade começa muito antes de seus prédios. Começa no caminho que fazemos a pé, na sombra que encontramos no meio da tarde e no banco onde uma conversa pode durar um pouco mais. Pensar seu desenho é perguntar quais encontros ela permite.',
      'Neste ensaio de ficção editorial, imaginamos uma praça que funciona como um pequeno jardim de chuva. A água encontra solo, as pessoas encontram sombra e o espaço deixa de ser apenas passagem. A beleza aparece como consequência de uma escolha de cuidado.',
      'O exercício não oferece uma receita de urbanismo. Ele propõe um olhar: antes de acrescentar uma solução, observe o que já existe, escute quem usa o lugar e experimente em pequena escala. Uma rua mais acolhedora pode começar com uma pergunta melhor.',
    ],
  },
  {
    id: 'tecnologia-com-tempo',
    category: 'Tecnologia',
    title: 'Tecnologia que devolve tempo, em vez de pedir atenção.',
    excerpt:
      'Interfaces tranquilas e decisões claras podem abrir espaço para o que acontece fora da tela.',
    author: 'Theo Martins',
    date: '2026-11-08',
    minutes: 4,
    art: 'orbit',
    paragraphs: [
      'Nem toda experiência digital precisa disputar o próximo segundo. Algumas das melhores ferramentas desaparecem quando cumprem sua tarefa: mostram a informação necessária, ajudam uma decisão e deixam a pessoa seguir seu dia.',
      'Imagine uma agenda que não comemora cada clique, mas torna evidente o próximo compromisso. Ou um formulário que explica o motivo de uma pergunta e permite corrigir um erro com calma. São escolhas pequenas que mudam a sensação de controle.',
      'No nosso laboratório editorial, a métrica imaginária é simples: quanto espaço a interface devolveu? Ao criar um produto, podemos começar retirando um ruído, esclarecendo uma ação e respeitando uma pausa.',
    ],
  },
  {
    id: 'colecionar-perguntas',
    category: 'Cultura',
    title: 'A arte de colecionar perguntas sem pressa de responder.',
    excerpt: 'Um caderno de curiosidades pode ser o começo de uma prática criativa mais livre.',
    author: 'Lia Costa',
    date: '2026-11-07',
    minutes: 3,
    art: 'sun',
    paragraphs: [
      'Há ideias que só aparecem depois que deixamos uma pergunta descansar. Um caderno pode ser um lugar para guardar essas pequenas inquietações, sem a obrigação de transformá-las imediatamente em projeto.',
      'Experimente anotar uma coisa que chamou sua atenção no caminho de casa. Descreva a cor, o ritmo ou a sensação. Depois escreva uma pergunta sobre aquilo. O objetivo não é encontrar algo extraordinário, mas perceber melhor o cotidiano.',
      'Uma semana depois, volte às páginas. Talvez duas perguntas conversem entre si. Talvez nenhuma peça uma resposta. A prática vale pelo olhar que ela constrói, e não pela quantidade de resultados que produz.',
    ],
  },
  {
    id: 'futuro-em-pequena-escala',
    category: 'Tecnologia',
    title: 'O futuro cabe em um protótipo de papel.',
    excerpt: 'Antes de programar uma ideia inteira, dê forma à sua pergunta mais importante.',
    author: 'Theo Martins',
    date: '2026-11-06',
    minutes: 4,
    art: 'stairs',
    paragraphs: [
      'Um protótipo é uma conversa que ganhou forma. Pode ser um desenho, uma sequência de cartões ou uma tela simples. Seu valor está no que permite descobrir antes de investir em uma solução completa.',
      'Escolha um único caminho: encontrar uma história, abrir seu conteúdo e voltar. Desenhe o que a pessoa precisa ver para avançar. Ao apresentar o rascunho, observe onde surgem dúvidas sem explicar cada detalhe antecipadamente.',
      'O aprendizado vem do encontro entre intenção e uso. Ajustar um papel é fácil; ajustar uma decisão já consolidada costuma custar mais. Começar pequeno não diminui a ambição de uma ideia: ajuda a encontrar seu centro.',
    ],
  },
  {
    id: 'cor-com-intencao',
    category: 'Design',
    title: 'Uma paleta, muitas sensações: cor com intenção.',
    excerpt: 'Ritmo, contraste e espaço fazem parte da mesma conversa visual.',
    author: 'Clara Nunes',
    date: '2026-11-05',
    minutes: 3,
    art: 'color',
    paragraphs: [
      'Escolher cores é também escolher relações. Um tom ganha outra presença quando muda o fundo, a área que ocupa ou a distância de seus vizinhos. Por isso uma paleta não termina em uma lista de códigos.',
      'Neste estudo, o verde profundo ancora a navegação, o creme dá espaço para a leitura e a terracota marca momentos de descoberta. O acento não precisa aparecer em todos os lugares para construir identidade.',
      'A intenção visual precisa continuar legível. Confira contraste, estados de foco e o significado das ações sem depender apenas de cor. Uma interface cuidadosa permite que diferentes pessoas encontrem o mesmo caminho.',
    ],
  },
  {
    id: 'rituais-de-leitura',
    category: 'Cultura',
    title: 'Cinco minutos para habitar uma história.',
    excerpt: 'Pequenos rituais ajudam a transformar leitura em encontro, não em tarefa.',
    author: 'Lia Costa',
    date: '2026-11-04',
    minutes: 3,
    art: 'moon',
    paragraphs: [
      'Há dias em que um livro inteiro parece distante, mas um parágrafo ainda encontra espaço. Preparar um lugar, afastar uma notificação e escolher uma página pode ser suficiente para começar.',
      'Um ritual de leitura não precisa ser solene. Pode acontecer ao lado de uma janela, durante uma pausa ou antes de dormir. O que importa é permitir que o texto encontre um pouco de atenção disponível.',
      'Ao terminar, guarde uma frase com suas próprias palavras. Não como prova de produtividade, mas como vestígio do encontro. Algumas histórias continuam trabalhando em nós depois que fechamos a página.',
    ],
  },
];
export const categories = ['Todas', 'Design', 'Tecnologia', 'Cultura'] as const;
export function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('pt-BR')
    .trim();
}
export function filterArticles(
  query: string,
  category: string,
  savedOnly = false,
  savedIds: readonly string[] = [],
): Article[] {
  const term = normalize(query);
  return articles.filter(
    (article) =>
      (category === 'Todas' || article.category === category) &&
      (!savedOnly || savedIds.includes(article.id)) &&
      normalize(
        `${article.title} ${article.excerpt} ${article.category} ${article.author}`,
      ).includes(term),
  );
}
export function findArticle(id: string | null): Article | undefined {
  return articles.find((article) => article.id === id);
}
