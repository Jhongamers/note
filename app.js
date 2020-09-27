const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/products',(req,res)=>{
    res.header("Access-Control-Allow-Origin", '*'); 
      res.json({
           id:'0',
           name:'Console Playstation 4 Slim 1 TB Sony',
            price:'2,399',
            imagem:'https://i.ibb.co/MfzLGnS/console-playstation-4-slim-1-tb-sony-hdr-photo165939772-12-2c-3f.jpg',
            link:'https://www.kabum.com.br/cgi-local/site/produtos/descricao_ofertas.cgi?codigo=109958&origem=48&utm_source=ZOOM&utm_medium=COMPARADOR&utm_term=CONSOLE%20SONY%20PLAYSTATION%204%20HITS%20BUNDLE%20MEGA%20PACK%2011%201TB%20JUST%20DANCE%202020%20MEDIEVIL%20VOUCHER%20PARA%2003%20JOGOS%20CUH%202214B&utm_content=CONSOLE&utm_campaign=CONSOLE%20SONY%20PLAYSTATION%204%20HITS%20BUNDLE%20MEGA%20PACK%2011%201TB%20JUST%20DANCE%202020%20MEDIEVIL%20VOUCHER%20PARA%2003%20JOGOS%20CUH%202214B',
        })
})

app.get('/',(req,res) => {
    res.header("Access-Control-Allow-Origin", '*'); 
    res.json({
        msg: "OK"
    })
})

app.listen(port,()=>{
   console.log('fununcia xD '+port);
})