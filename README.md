# 🎧 Impactos Áudio - Plataforma de Locação de Equipamentos

Plataforma web desenvolvida para a **Impactos Áudio**, uma empresa de locação de equipamentos de som e iluminação para eventos atuante em Goiânia e região metropolitana.

## 🚀 Visão Geral
O projeto consiste em um site responsivo onde os clientes podem visualizar diferentes pacotes de sonorização (Kits), tipos de eventos atendidos, conferir detalhes técnicos e de configuração, e realizar reservas de forma ágil com redirecionamento direto para o WhatsApp da empresa.

## 🛠️ Tecnologias Utilizadas
* **HTML5 & CSS3:** Estruturação semântica e estilização responsiva (Mobile First adaptado).
* **JavaScript (Vanilla):** Renderização dinâmica de componentes na tela consumindo arquivos locais (`.json`).
* **Webpack:** Gerenciamento, empacotamento de módulos e preparação para produção.
* **Netlify:** Hospedagem, gerenciamento de domínio (DNS) e deploy contínuo integrado ao GitHub.

## 📁 Estrutura e Arquitetura do Projeto
O projeto foi refatorado visando uma arquitetura limpa para front-end, separando código-fonte de arquivos de configuração:

* `/public`: Arquivos puramente estáticos e de indexação.
* `/src/pages`: Páginas HTML principais (`index.html`, `detalhes.html`, `ajuda.html`, etc).
* `/src/css`: Folhas de estilo divididas por escopo (`style.css`, `ajuda.css`, `slide.css`).
* `/src/js`: Scripts de lógica (redirecionamento, requisições de kits/eventos e controle de layout).
* `/src/data`: Arquivos de dados em JSON (`dados.json`, `eventos.json`) que alimentam os cards e detalhes do site.

## 🌐 Acesse o Projeto Online
O projeto encontra-se em produção e pode ser acessado através dos domínios:
* [www.impactoaudio.com.br](https://www.impactoaudio.com.br)
* [impactoaudio.com.br](https://impactoaudio.com.br)

* ![Status](https://img.shields.io/badge/Status-Em%20Produ%C3%A7%C3%A3o-success)
![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_ID/deploy-status)

* ## 🚀 O Problema e a Solução
**Desafio:** A empresa precisava de uma vitrine digital profissional que fosse fácil de manter e que guiasse o usuário rapidamente para um orçamento, sem processos complexos de carrinho de compras de e-commerce.

**Solução:** Foi desenvolvida uma Single Page Application (SPA) simulada com HTML/CSS/JS puros, alimentada por dados em `.json`. O fluxo de usuário culmina na função genérica `reservar()`, que captura o ID e as escolhas do cliente e formula uma mensagem pré-pronta enviada via API do WhatsApp, acelerando o tempo de conversão de vendas.

## 🛠️ Stack Tecnológico
* **Front-end:** HTML5, CSS3 (Mobile First), JavaScript (Vanilla, ES6+).
* **Estrutura de Dados:** JSON (Simulação de base de dados local para consumo assíncrono via `fetch API`).
* **Build e Automação:** Webpack (Minificação, bundling e separação de ambientes de Dev/Prod).
* **Deploy e CI/CD:** Netlify com redirecionamento de rotas customizado (`_redirects`) integrado ao repositório GitHub.

## 🧠 Desafios e Aprendizados Técnicos
* **Refatoração para Clean Architecture Front-end:** Organização do código legado isolando páginas, componentes, assets e lógica de negócio (`/src` vs `/public`), tornando o projeto escalável.
* **Resolução de Rotas (SPA Fallback):** Configuração de regras de redirecionamento HTTP 301 no Netlify para evitar erros 404 após a alteração da raiz de leitura do Webpack.
* **Responsividade Extrema:** Ajuste do CSS (usando `overflow-wrap` e quebras dinâmicas) para suportar variações extremas de tamanhos de telas e garantir leitura de cards de equipamentos sem quebrar o layout mobile.

---
⌨️ Desenvolvido por Isaias Valdemir | IV Produções
