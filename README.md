# 🔐 Mini Projeto Gerador de Senhas

Este é um aplicativo simples criado em **React Native** que gera senhas aleatórias com base em uma lógica personalizada. O projeto foi organizado com uma estrutura modular, facilitando a manutenção e a escalabilidade.


## 🎯 Funcionalidades

- **Gerador de senhas aleatórias:**
  - Cria senhas utilizando diferentes tipos de caracteres (letras, números e símbolos).
  - Permite copiar as senhas geradas.
- **Componentes reutilizáveis:**
  - Botões, entradas de texto e logotipo organizados em componentes reutilizáveis.
- **Interface simples e limpa:**
  - Tela principal para geração de senhas.


## 🗂️ Estrutura do Projeto

- **src/**
  - **components/**
    - **Button/**: Contém os botões reutilizáveis, com estilo e lógica associados.
      - `LocalButton.tsx`: Componente do botão.
      - `LocalButtonStyles.tsx`: Estilos relacionados ao botão.
    - **Logo/**: Componente que exibe o logotipo da aplicação.
      - `Logo.tsx`: Componente do logotipo.
      - `LogoStyles.tsx`: Estilos do logotipo.
    - **TextInput/**: Campo de entrada de texto reutilizável.
      - `LocalTextInput.tsx`: Componente para entrada de texto.
      - `LocalTextInputStyles.tsx`: Estilos associados ao componente de entrada.
  - **screens/Home/**: Tela principal do app.
    - `Home.tsx`: Contém a interface para o usuário interagir com o gerador de senhas.
    - `Style.tsx`: Estilos associados à tela inicial.
  - **services/**: Contém a lógica do gerador de senhas.
    - `passwordService.ts`: Função responsável pela geração da senha.


## 🚀 Tecnologias Utilizadas

<div style="display: inline_block">
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</div>


## 📄 Detalhes sobre o Gerador de Senhas

### Função `generatePass` (Localizada em `passwordService.ts`)

Essa função gera senhas aleatórias com base em um conjunto de caracteres. Aqui está uma explicação da lógica usada:

- **Conjunto de caracteres:** Letras maiúsculas, minúsculas, números e símbolos.
- **Exemplo da função:**

```typescript
export default function generatePass(){
    let password: string = ''
    let characters:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'
    let passwordLength = 8

    for(let index = 0; index < passwordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return password
}
```


## 📌 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o app:
   ```bash
   npm start
   ```

4. Teste o aplicativo no emulador ou dispositivo físico.


## 📄 Melhorias Futuras

- Permitir ao usuário configurar o conjunto de caracteres (ex.: apenas números, excluir símbolos, etc.).
- Adicionar validação de entrada para o comprimento da senha.
- Exibir feedback visual ao copiar a senha gerada.


## 📌 Créditos

- **Videoaula:** ✨Sequenciador de senhas do Batman com React Native:
  [DIO](https://web.dio.me/track/formacao-react-native-developer)
