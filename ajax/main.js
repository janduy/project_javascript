axios.get('https://api.github.com/users/janduy')
   .then(function(response) {
        console.log(response.data.avatar_url);

        // Teste carregando minha imagem do avatar via JS
        // var meuAvatar = document.createElement("IMG")
        // meuAvatar.src = response.data.avatar_url;
        // document.body.appendChild(meuAvatar);
   })
   .catch(function(error) {
       console.warn(error);
   });



// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/diego3g');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         console.log(JSON.parse(xhr.responseText))
//     }
// }


// var minhaPromise = function(){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/janduy');
//         xhr.send(null);

//         xhr.onreadystatechange = function(){
//             if (xhr.readyState === 4 ){
//                 if (xhr.status === 200 ){
//                     resolve(JSON.parse(xhr.responseText));
//                 } else
//                 reject('Erro na requisição'); 
//             }   
//         }
//     })
// }

// minhaPromise()
//    .then(function(response) {
//        console.log(response);
//    })
//    .catch(function(error) {
//        console.warn(error);
//    });
   

