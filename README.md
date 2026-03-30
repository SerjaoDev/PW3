# COMENTÁRIOS PARA ESTUDO
# Dentro do vite.config.js
- Instale o vite-plugin-pages para gerar rotas automáticas com base na estrutura de arquivos. Os arquivos por padrão ficam no diretório 'src/pages'. Mas você pode configurar o diretório de páginas com a opção 'pagesDir' do plugin.
- Código: *import Pages from 'vite-plugin-pages'* 

# Dentro do main.jsx
- Devido a uma atualização recente, o caminho de importação das rotas geradas pelo 'vite-plugin-pages' mudou de '~pages' para '~react-pages'
- Código: *import routes from '~react-pages';*

- Cria o roteador usando as rotas geradas pelo plugin. O plugin lê os arquivos dentro do diretório 'src/pages' e gera rotas automaticamente
- Código: *const router = createBrowserRouter(routes);*

- O StrictMode é uma ferramenta para destacar problemas potenciais no aplicativo. Ele ativa verificações e avisos adicionais para as tags filhas, como a renderização dupla. Isso pode ajudar a identificar problemas de desempenho, efeitos colaterais inesperados e outros problemas comuns durante o desenvolvimento. Ele não afeta o comportamento do aplicativo em produção

#  Dentro do data.jsx
- Esse estado é para armazenar a lista de dados que será exibida na página, perceba a inicialização como um array vazio
- Código: *const [listaDeDados, setListaDeDados] = useState([])*

- Esse estado é para armazenar o texto digitalizado pelo usuário, perceba a inicialização como uma string vazia
- Código: *const [texto, setTexto] = useState("")*

- Previne o comportamento padrão do formulário, que é recarregar a página
- Código: *e.preventDefault()*

- Cria um novo array de dados, adicionando o texto atual ao final da lista de dados existente
- Código: *const novaListaDeDados = [...ListaDeDados, e.target.value]*

- Atualiza o estado da lista de dados com a nova lista, o que fará com que a página seja re-renderizada e exiba o novo item
- Código: *setListaDeDados(novaListaDeDados)*

- Limpa o campo de texto após adicionar o item
- Código: *setTexto("")*

- Mapeia cada item da lista de dados para um elemento <li> que será exibido na página
- Código: *listaDeDados.map((item, index)=>(<li key={index}>{item}</li>))*

# BIBLIOTECAS PARA INSTALAR
- npm install vite-plugin-pages
- npm install react-router-dom
