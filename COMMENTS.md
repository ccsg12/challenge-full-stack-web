# Comentários

Para o projeto adotei a arquitetura especificada: uma api montada com Express e Node, banco de dados usando MySQL e front end vue com vuetify de biblioteca UI.

## API

Construí de forma que ficasse o mais próxima de uma API rest, apenas realizando tarefas simplificadas de integração do aplicativo com o banco de dados.

Bibliotecas utilizadas:

- express
- sequelize - para facilitar a linguagem de programação
- mysql2 - biblioteca do sequelize
- body-parser - para poder pegar body com o express
- cors - para poder acessar a api de outro endereço

## Front end

Utilizei vue como framework e vuetify para facilitar a construção de componentes, tentei separar o máximo possível os componentes e utilizar lógicas separadas, para que um mesmo componente não fique tão sobrecarregado. Ainda optei por não utilizar páginas separadas para a edição e cadastro, mas deixei uma página de cadastro como um extra. Na página de consulta a edição e cadastro dos estudantes são feitas em um modal.

Implementei um pequeno sistema de busca e atualização da página em cima do nome dos estudantes, utilizando um componente do vuetify.

Além das bibliotecas já instaladas em uma aplicação vue utilizei:

- vuetify
- router - um plugin do vue para estabelecer rotas
- axios - para conseguir acessar as rotas da api
- vee-validate - outro plugin do vue que auxilia na validação de formulários

Consegui implementar todos os requisitos obrigatórios, mas ainda há espaços para melhoria. Tentei implementar um sistema de login com o express-sessions mas acabou não dando muito certo, então voltei para uma versão anterior do arquivo. Além disso, o sistema de busca poderia ter sido melhor implementado, mas não consegui fazer.

# Inicialização

Após buildar o aplicativo vue, consegui fazer com que operasse no mesmo endereço http://localhost:8082/ com o comando `<npm server.js>`, a partir da pasta api.

# Hospedagem

Fiz a hospedagem do aplicativo em um VPS mas não ficou muito bom, o front end pareceu renderizar bem, mas a interação com o banco de dados não funcionou, então não consegui manipular os dados necessários e não consegui resolver o problema a tempo.
De qualquer forma o app pode ser acessado por http://104.131.19.205/. A versão local do app funcionou sem problemas.
