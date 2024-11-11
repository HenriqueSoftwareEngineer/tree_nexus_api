![alt text](<TREE NEXUS-1.png>)

# TREE NEXUS API
The Tree Nexus API is a tool for searching products categorized into different categories and their subcategories. A Binary Tree Data Structure is used. The repository is for study purposes.

## Descrição
O Tree Nexus API é uma ferramenta ideal para e-commerces ou sistemas de inventário, onde produtos são organizados em categorias e subcategorias. A API permite busca por categorias, listagem de todos os produtos sob uma categoria principal e análises por profundidade ou profundidade de cada ramo.

## Estrutura
A Árvore onde cada nó representa uma categoria com subcategorias como filhos. A árvore é a busca realizada pela API e os nós são categorias e seus nós-filhos são as subcategorias.

# Frameworks e Tecnologias

## Backend Frameworks
- **[Node.js com Express](https://nodejs.org/en/docs/guides/)**: Utilizada para criar APIs REST.
- **[Django com Django REST Framework (Python)](https://www.django-rest-framework.org/)**: Excelente para APIs robustas e permite manipulação fácil de estruturas como árvores.
- **[Spring Boot (Java)](https://spring.io/projects/spring-boot)**: Alternativa de alta performance, com várias bibliotecas para manipulação de árvores.

## Bibliotecas e Recursos de Estruturas de Dados
- **[Mongoose (Node.js)](https://mongoosejs.com/)**: Útil para criar árvores no MongoDB com modelagem de dados hierárquicos.
- **[Django MPTT](https://django-mptt.readthedocs.io/en/latest/)**: Biblioteca que facilita a criação de árvores em Django com o modelo MPTT (Modified Preorder Tree Traversal).
- **[GraphQL](https://graphql.org/)**: Permite criar APIs com consultas mais específicas, interessante para explorar árvores de forma mais direta.

## Banco de Dados
- **[MongoDB](https://www.mongodb.com/)**: Naturalmente orientado a documentos, facilita a criação de árvores de documentos com embutimento de dados.
- **[PostgreSQL](https://www.postgresql.org/)**: Suporta consultas hierárquicas avançadas, especialmente para estruturas em árvore com modelos CTE (Common Table Expressions).
- **[Neo4j](https://neo4j.com/)**: Ótima opção para árvores complexas e grafos em geral, permitindo consultas de relacionamentos.

# Engenharia de Requisitos
Abaixo estão os requisitos funcionais e não funcionais da API.

## Requisitos Funcionais
- CRUD: A API deve permitir a criação, leitura, atualização e exclusão de nós na árvore.
- Navegação Hierárquica: Deve haver endpoints para navegar entre diferentes níveis da árvore.
- Busca por Ramificação: A API deve suportar buscas em subárvores específicas com filtragens.
- Filtragem e Ordenação: Deve haver parâmetros para filtrar e ordenar nós com base em atributos específicos.

## Requisitos Não Funcionais
- Desempenho: A resposta da API deve ser rápida, especialmente para operações de leitura de grandes árvores.
- Escalabilidade: O sistema deve suportar o aumento do número de nós sem perda significativa de desempenho.
- Segurança: Regras de autenticação para limitar quem pode criar, editar ou deletar nós.
- Confiabilidade: Garantia de que operações em nós (adição/remoção) não corrompam a árvore.

# Engenharia do Software
Abaixo estão as etapas da engenharia do software para o desenvolvimento da API.

## Modelagem do Sistema
- Diagramas de Classes: As Classes para representação dos nós são: id, parentId, name.
- Diagramas de Sequência: Para entender a ordem de execução das operações. Mostrar a sequência de operações para adicionar, remover e editar os nós na árvore.

## Desenvolvendo a APIs RESTful

### Endpoints
- POST /node: Adiciona um novo nó.
- GET /node/:id: Retorna o nó com o ID especificado.
- PUT /node/:id: Atualiza o nó.
- DELETE /node/:id: Remove o nó.
- GET /tree/:id: Retorna a subárvore a partir do ID do nó especificado.

## Testes da API Tree Nexus
- Testes unitários para garantir que cada endpoint está funcionando corretamente. Verificando cada operação (adição, remoção, etc).
- Integração: Teste de Endpoints com a árvore completa.
- Desempenho: Teste de respostas com árvores de grande porte.

## Segurança
- Implementando a autenticação com tokens JWT.
- Limita acesso a certos endpoints com permissões específicas.
