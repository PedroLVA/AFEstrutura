# AFEstrutura

Projeto feito para matéria de Estrutura de Dados do Centro Universitário Facens - 3 Semestre do curdo de ADS

### Integrantes:

* Fernando Soares

* João Silveira

* Raphael Carneiro

* Maria Eduarda

* Pedro Luiz

## Como rodar o projeto
* Estaremos utilizando a [IDE VSCode](https://code.visualstudio.com) para rodar o projeto

### Passo 1: Baixar Node.js




* Visite o [site oficial do Node.js](https://nodejs.org/en).
* Baixe e instale a versão LTS do Node.js para o seu sistema operacional.
* Verificar a Instalação digitando os seguintes comandos no terminal:

  ```sh
  node -v
  ```
  
   ```sh
   npm -v
    ```
  



### Passo 2: Instalar o Angular CLI

* Execute o seguinte comando no terminal:

  ```sh
  npm install -g @angular/cli
  ```
  

* Verificar a Instalação digitando o seguinte comando no terminal:

 ```sh
  ng version
 ```

### Passo 3: Clonar o projeto

* Clone o projeto utilizando git e o seguinte link: https://github.com/PedroLVA/AFEstrutura.git

### Passo 4: Instale as dependências

* Com o VScode aberto e no terminal integrado, na pasta AFEstrutura do projeto, rode o seguinte comando:
  ```sh
  npm install
   ```
   
### Passo 5: Rodar o projeto

* Na pasta AFEstrutura do projeto, no terminal, rode o seguinte comando:
   ```sh
  ng serve
    ```

### Passo 6: Acessar o localhost da aplicação

Por padrão a aplicação angular rodará no http://localhost:4200, porém, caso essa porta esteja sendo utilizada, o terminal informará qual porta o angular está utilizando

![image](https://github.com/PedroLVA/AFEstrutura/assets/130158934/1f0f7f0e-c42f-4dc9-a309-2473b98b237e)

## Quick fixes para erros ao buildar o projeto

* Deletar a pasta node_modules e dar npm install novamente
* Reiniciar a IDE
* Clonar o projeto novamente
* Reinstale globalmente o Angular CLI:
  ```sh
  npm uninstall -g @angular/cli
  npm install -g @angular/cli
    ```
  
* Limpe o cache do npm:
   ```sh
  npm cache clean --force
    ```



