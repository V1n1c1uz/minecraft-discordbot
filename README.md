# **Hello DiscordBot 🤖** #

<img src='https://raw.githubusercontent.com/pierrelapalu/icones-bandeiras-br-uf/master/dist/rounded/png-200/01-brasil-rounded.png' height="14em"/> Neste simples repositório crio um Bot Discord com Javascript para seus players ver o status do seu servidor mine no Discord.


<img src='https://camo.githubusercontent.com/dcd659b663d435f59bf584fbb29afa630abbb82506ce99982a7a0a0255fe0ea7/68747470733a2f2f63646e6a732e636c6f7564666c6172652e636f6d2f616a61782f6c6962732f666c61672d69636f6e2d6373732f332e332e302f666c6167732f3478332f75732e737667' height="14em"> In this simple repository I create a Discord Bot with Javascript for your players to see the status of your mine server on Discord.

# **📂ESTRUTURA DO PROJETO** | <img src='https://raw.githubusercontent.com/pierrelapalu/icones-bandeiras-br-uf/master/dist/rounded/png-200/01-brasil-rounded.png' height="18em"/> #

- Arquivo principal **bot.js** || localizado em src/bot.js.
- **Configs** pasta de configuração do projeto || localizado em src/configs <br>&nbsp;&nbsp;&nbsp;(arquivo bot.json aonde será configurado o PREFIX, IP do seu Server e PORT)
- **Commands** || localizado em src/commands <br>&nbsp;&nbsp;&nbsp;(aonde você pode adicionar mais comandos para o bot)
- **Events** || localizado em src/events <br>&nbsp;&nbsp;&nbsp;(aonde você pode adicionar mais eventos para o bot) acesse para ver todos os <a href='https://discord.js.org/#/docs/main/stable/class/Client'>eventos</a> 
- **Handlers** || localizado em src/handlers.
- **Shared** || localizado em src/shared.


# **📂PROJECT STRUCTURE** | <img src='https://camo.githubusercontent.com/dcd659b663d435f59bf584fbb29afa630abbb82506ce99982a7a0a0255fe0ea7/68747470733a2f2f63646e6a732e636c6f7564666c6172652e636f6d2f616a61782f6c6962732f666c61672d69636f6e2d6373732f332e332e302f666c6167732f3478332f75732e737667' height="18em"> # 

- Main file **bot.js** || located in src/bot.js.
- **Configs** project configuration folder || located in src/configs <br>&nbsp;&nbsp;&nbsp;(bot.json file where the PREFIX, Server IP and PORT will be configured)
- **Commands** || located in src/commands <br>&nbsp;&nbsp;&nbsp;(where you can add more commands for the bot)
- **Events** || located at src/events <br>&nbsp;&nbsp;&nbsp;(where you can add more events for the bot) go to see all <a href='https://discord.js.org/#/docs/main /stable/class/Client'>events</a>
- **Handlers** || located in src/handlers.
- **Shared** || located at src/shared


# **⚙️ INICIAR O BOT** <img src='https://raw.githubusercontent.com/pierrelapalu/icones-bandeiras-br-uf/master/dist/rounded/png-200/01-brasil-rounded.png' height="18em"/>
1º Instalando as dependências
   - rode o comando ```yarn install``` ou só ```yarn```

2º Configurando o token do seu BOT
   - Acesse o <a href='https://discord.com/developers/'>discord developers</a>, faça login, crie seu bot caso ainda não tenha e pegue o TOKEN. Com o TOKEN já na sua areá de transferência, acesse o arquivo .env localizado na raiz do projeto e cole na FRENTE da variavel de ambiente com nome TOKEN. 
    <br>Exemplo: TOKEN=SEU TOKEN 

3º Iniciando o bot
   - <b>UTILIZANDO NODEMON :</b> Caso esteja utilizando o nodemon é simples basta rodar o comando no terminal ```yarn dev``` e pronto o bot já iniciar.

   - <b>UTILIZANDO NODE . :</b> Caso não esteja utilizando o nodemon é simples também basta rodar o seguinte comando no terminal ```yarn start``` e pronto o bot já iniciar.

#
- Por fim se tudo der certo no terminal será enviado a seguinte mensagem: **Bot iniciado com sucesso**


# **⚙️ INICIAR O BOT** <img src='https://camo.githubusercontent.com/dcd659b663d435f59bf584fbb29afa630abbb82506ce99982a7a0a0255fe0ea7/68747470733a2f2f63646e6a732e636c6f7564666c6172652e636f6d2f616a61782f6c6962732f666c61672d69636f6e2d6373732f332e332e302f666c6167732f3478332f75732e737667' height="18em"/> #
1st Installing the dependencies
   - run the command ```yarn install``` or just ```yarn```

2º Configuring your BOT token
   - Go to <a href='https://discord.com/developers/'>discord developers</a>, login, create your bot if you don't already have it and get the TOKEN. With TOKEN already in your clipboard, access the .env file located at the root of the project and paste it in FRONT of the environment variable named TOKEN.
     <br>Example: TOKEN=YOUR TOKEN

3rd Starting the bot
   - <b>USING NODEMON :</b> If you are using nodemon it is simple, just run the command in the terminal ```yarn dev``` and the bot is ready to start.

   - <b>USING NODE . :</b> If you are not using nodemon, it is also simple to run the following command in the terminal ```yarn start``` and the bot is ready to start.

#
- Finally, if everything goes well in the terminal, the following message will be sent: **Bot started successfully**
