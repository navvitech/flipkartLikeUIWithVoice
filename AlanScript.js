// Use this sample to create your own voice commands
intent('hello world', p=>  {
    p.play('(hello|hi there)');
});
intent('(Go to my cart|open cart page)',(p)=>{
    p.play({command:'cartPage'}, p.play('u are in the cart page'));
})
intent('Go to orders page',(p)=>{
    p.play({command:'ordersPage'}, p.play('u are in the orders page'));
 })

const items = "$(item__name shoe|skirt|sandal|shirt|short|pant|tvs)"

intent(`(show me some|do you have) ${items}`,p=>{
    p.play({command:"show",product:`${p.item__name.value}`},p.play( p.item__name.value==="shirt"?'see these shirts,they will look handsome on you':`look at these ${p.item__name.value}`))
})


// intent('(show me shoes|show me some of the shoes)',(p)=>{
//     p.play({command:'shoes'}, p.play('here are some of the shoes'))
// })
// intent('(do you have any skirts|show me some skirts )',(p)=>{
//     p.play({command:'skirt'}, p.play('here are some of the skirts'))
// })
// intent('what type of sandals do you have',(p)=>{
//     p.play({command:'sandal'}, p.play('look at these sandals'))
// })
// intent('show me shirts',(p)=>{
//     p.play({command:'shirt'}, p.play('see these shirts,they will look handsome on you'))
// })
// intent('show shorts',(p)=>{
//     p.play({command:'short'}, p.play('you should definetely by these shorts in summer'))
// })
// intent('show some pants',(p)=>{
//     p.play({command:'pant'}, p.play('here are some of the pants'))
// })

intent('go back to home page',(p)=>{
    p.play({command:'home'}, p.play('you are in the home page'))
})
intent('show me all the products less than thousand rupee',(p)=>{
    p.play({command:'costs'}, p.play('look at these'))
    
    p.play('would you like to buy some')
    p.then(confirmation)
})






const confirmation = context(()=>{
    intent('yes',(p)=>{
        p.play({command:'cost'}, p.play('here are some of the products'))
    })
     intent('no',(p)=>{
        p.play('ok fine then,keep shopping')
    })
})
