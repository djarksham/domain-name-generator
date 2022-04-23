let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let dom = [".com", ".cl", ".net", ".org"];


for (let i=0; i<pronoun.length; i++) { 

    for (let j=0; j<noun.length; j++) {

        for (let p=0; p<adj.length; p++) {
            
            for (let r= 0; r< dom.length; r++) {

                console.log(pronoun[i]+adj[p]+noun[j]+dom[r]);
               }

           }
       }
    }