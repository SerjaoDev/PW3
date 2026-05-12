# COMENTÁRIOS PARA ESTUDO
**COMEÇO DA AULA**
- Atualizar o node.js
- Digite npm install no terminal do VS Code
- Digite npm install vite no terminal do VS Code
- Digite npm install vite-plugin-pages no terminal do VS Code para instalar a biblioteca
- Digite npm install react-router-dom no terminal do VS Code para instalar a biblioteca
- Digite npm audit fix para arrumar as biblotecas que estão com problema
- Por último, digite npm run dev para rodar o projeto

-----------------------------------------------------------------------------------------------------------------------------
**Dentro do vite.config.js**
- Instale o vite-plugin-pages para gerar rotas automáticas com base na estrutura de arquivos. Os arquivos por padrão ficam no diretório 'src/pages'. Mas você pode configurar o diretório de páginas com a opção 'pagesDir' do plugin.
- **Código**: *import Pages from 'vite-plugin-pages'* 

-----------------------------------------------------------------------------------------------------------------------------
**Dentro do main.jsx**
- Devido a uma atualização recente, o caminho de importação das rotas geradas pelo 'vite-plugin-pages' mudou de '~pages' para '~react-pages'
- **Código**: *import routes from '~react-pages';*

- Cria o roteador usando as rotas geradas pelo plugin. O plugin lê os arquivos dentro do diretório 'src/pages' e gera rotas automaticamente
- **Código**: *const router = createBrowserRouter(routes);*

- O StrictMode é uma ferramenta para destacar problemas potenciais no aplicativo. Ele ativa verificações e avisos adicionais para as tags filhas, como a renderização dupla. Isso pode ajudar a identificar problemas de desempenho, efeitos colaterais inesperados e outros problemas comuns durante o desenvolvimento. Ele não afeta o comportamento do aplicativo em produção

-----------------------------------------------------------------------------------------------------------------------------
**Dentro do data.jsx**
- Esse estado é para armazenar a lista de dados que será exibida na página, perceba a inicialização como um array vazio
- **Código**: *const [listaDeDados, setListaDeDados] = useState([])*

- Esse estado é para armazenar o texto digitalizado pelo usuário, perceba a inicialização como uma string vazia
- **Código**: *const [texto, setTexto] = useState("")*

- Previne o comportamento padrão do formulário, que é recarregar a página
- **Código**: *e.preventDefault()*

- Atualiza o estado da lista de dados com a nova lista, o que fará com que a página seja re-renderizada e exiba o novo item
- **Código**: *setListaDeDados(loadItems())*

- Adiciona um novo item à lista usando a função addItem importada do arquivo db.js
- **Código**: *addItem(texto)*

- Limpa o campo de texto após adicionar o item
- **Código**: *setTexto("")*

-----------------------------------------------------------------------------------------------------------------------------
**Dentro de db.js**
- Essa STORAGE_KEY é uma string que identifica o local onde os dados serão armazenados. Cada STORAGE_KEY deve representar uma única entidade ou coleção de dados. Ou seja, se precisa armazenar mais de uma, é ideal criar mais de uma STORAGE_KEY. Isso ajuda a organizar os dados e evita confusões ao acessar ou modificar os itens armazenados
- **Código**: *const STORAGE_KEY = 'pwiii-items';*

- localStorage é uma variável predefinida que aponta para o armazenamento local do navegador, tal variável contém um objeto cujo metódo "getItems" retorna o conteúdo armazenado no banco de dados local
- **Código**: *const infoBruta = localStorage.getItems(STORAGE_KEY);*

- Grava os valores dentro do local especificado pela STORAGE_KEY
- **Código**: *localStorage.setItem(STORAGE_KEY, JSON.stringify(items));*

- Carrega os itens existentes do localStorage usando a função loadItems
- **Código**: *const items = loadItems();*

- Cria um id único para o novo item usando a data e hora atual
- **Código**: *const identifica = Date.now().toString();*

- Cria um novo item com o id e o texto fornecido
- **Código**: *const newItem = { id: identifica, text: single_item};*

- Adiciona o novo item à lista de itens existente
- **Código**: *const updateItems = [...items, newItem];*

- Salva a lista atualizada
- **Código**: *saveItems(updateItems);*
