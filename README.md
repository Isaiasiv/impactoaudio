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

---
⌨️ Desenvolvido por Isaias Valdemir | IV Produções
