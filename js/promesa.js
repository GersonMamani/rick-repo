// const post=[
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//       },
//       {
//         "userId": 1,
//         "id": 2,
//         "title": "qui est esse",
//         "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//       },
//       {
//         "userId": 1,
//         "id": 3,
//         "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//       }
// ]

// const find=(id,cal)=>{
//     const mostrar=post.find(ele => ele.id==id)
//     if(mostrar){
//         cal(mostrar)
//     }else{
//         console.log('no se encontro')
//     }
// }
// find(5,(ele)=>{
//     console.log(ele)
// })

// filter
// const filtrar=(id,po)=>{
//     const datos=po.filter(ele => ele.id==id)
//     console.log(datos[0].title+'------'+datos[0].body)
    
// }
// filtrar(5,post)


const dataPo= async ()=>{
    const datosFe= await fetch('https://rickandmortyapi.com/api/character')
    const data=await datosFe.json()
    const datos=data.results
    console.log(datos)
    const nuevo=datos.map((ele)=>{
            return ele.species
    })
    let result = nuevo.filter((item,index)=>{
        return nuevo.indexOf(item) === index;
    })
    
    seleccion(result)
    document.querySelector('.bu').addEventListener('click',()=>{
        const captura=mostrar.value
        const nuevaData=datos.filter(ele =>{
            return ele.species==captura
        })
        listar(nuevaData)
        console.log(nuevaData)
    })
}
dataPo()
const mo=document.querySelector('#card-dinamica')
const mostrar=document.querySelector('#sel');
const seleccion= (us)=>{
        us.map((ele)=>{
        const op=document.createElement('option')
        op.innerHTML=` <option value="${ele}">${ele}</option>`
        mostrar.appendChild(op)
    })
}
// const template=document.querySelector('#card-dinamica')
const card=document.querySelector("#card-dinamica");
const template=document.querySelector('#template-card').content
const fragmento=new DocumentFragment()
const listar=(us)=>{
    card.textContent=""
    us.map(element => {
        const clonar=template.cloneNode(true)
        clonar.querySelector('img').setAttribute("src", element.image);
        clonar.querySelector('h5').textContent=element.name
        clonar.querySelector('p').textContent=element.species
        fragmento.appendChild(clonar)
    })
    card.appendChild(fragmento)
}


