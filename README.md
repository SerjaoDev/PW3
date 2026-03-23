# COMENTÁRIOS PARA ESTUDO
# Dentro do vite.config.js
- Instale o vite-plugin-pages para gerar rotas automáticas com base na estrutura de arquivos. Os arquivos por padrão ficam no diretório 'src/pages'. Mas você pode configurar o diretório de páginas com o opção 'pagesDir' do plugin.
*import Pages from 'vite-plugin-pages'* 

# Dentro do main.jsx
- Devido a uma atualização recente, o caminho de importação das rotas geradas pelo 'vite-plugin-pages' mudou de '~pages' para '~react-pages'
*import routes from '~react-pages';*

- Cria o roteador usando as rotas geradas pelo plugin. O plugin lê os arquivos dentro do diretório 'src/pages' e gera rotas automaticamente
*const router = createBrowserRouter(routes);*

- O StrictMode é uma ferramenta para destacar problemas potenciais no aplicativo. Ele ativa verificações e avisos adicionais para as tags filhas, como a renderização dupla. Isso pode ajudar a identificar problemas de desempenho, efeitos colaterais inesperados e outros problemas comuns durante o desenvolvimento. Ele não afeta o comportamento do aplicativo em produção

# BIBLIOTECAS PARA INSTALAR
- npm install vite-plugin-pages
- npm install react-router-dom
