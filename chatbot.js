const { NlpManager } = require('node-nlp');
const express = require('express')
const app = express();
let bodyparser = require('body-parser')
app.use(express.json())
app.set('view engine' , 'ejs')
app.use(bodyparser.urlencoded({extended:true}))


const manager = new NlpManager({ languages: ['en'] });
manager.load('model2.nlp');


app.get('/' , (req, res)=>{
  res.render('chatPage.ejs')
})

app.post('/process-message',async (req,res)=>{ 

  const pt = req.body.message
  
 const dts =  await manager.process('en',pt );
 console.log(dts);
 if(!dts.answer){
  dts.answer= "Apologies, I can't exactly understand what you want to say."
 }
 const resp = {
  "response":dts.answer
 }
res.send(resp)
})



// async function handleInput(input) {
//   const response = await manager.process('en', input);
//   console.log(response.answer);
// }



app.listen('4000',(err)=>{
      if(err){
        console.log(err)
      }else{
console.log('running on 4000')
      }
})


