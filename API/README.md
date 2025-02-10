## API - Application Programming Interface(Interface de programção de aplicações)

Cliente - EU
Garçon - API - API DO YOUTUBE
Chefe - SERVER - YOUTUBE
Bloco de notas - RESOURCES

Cliente Faz o pedido o garçon recebe o pedido e anota em um bloco de notas o pedido e a mesa, leva para o chefe que vai fazer o prato.

API Intermediador entre eu e o server 

## REST - Representational State Transfer ( Transferência de Estado Representativo)
* É um conjunto de regras que permite a comunicação entre navegadores e servidores web. 

A transfrerencias de dados, geralmente, usando o protocolo HTTP.

Dados = Resources seria então, uma entidade, um objeto.

### 6 NECESSIDADES(Constraints) para ser RESTFUL

- _Client-server_: Cliente(Pode ser qualquer um) e servidor(precisa ser unico) precisam estar separados.
Separação do cliente e do armazenamento de dados (Servidor), dessa forma, poderemos ter uma protabilidade do nosso sistema, usando o React para WEB e react Native para o smartphone, por exemplo.

- _Stateless_: O servidor precisa ter todas as informações do cliente para ele poder entender e retornar o valor correto.
Cada requisição que o cliente faz para o servidor, devera conter todas as informações necessarias para o servidor entender e responder(RESPONSE) a requisição(REQUEST).

A request sempre tem que ser enviada pois a api não armazena nenhum resource em seu banco, por exemplo ao entrar na api mais uma vez para pedir dados tera que enviar novamente outra session user pois ele não guardara pois o servidor não pode armazenar essa session nele.

RESTFUL e a aplicação ter os padrões de REST

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela resquição, pode ou não ser cacheada pelo cliente.

-  _Layered System_: O cliente acessa a um endpoint, sem precisar saber da complexidade, de quais passos estão sendo necessários para o servidor responder a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Code on demand (optional)_: Da a possibilidade da aplicação pegar codigos, como js, por exemplo e executar no cliente.

## BOAS PRÁTICAS
- Utilizar verbos HTTP para nossas requisições.
- Utilizar plural ou singular na criação dos endpoints? _NÃO IMPORTA!_ use um padrão!!
- Não deixar barra no final do endpoint