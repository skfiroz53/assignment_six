const loadData = () =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data.tools))
 }
 const displayData =(values) =>{
    const cardContainer = document.getElementById('card-container')
    for(let value of values.slice(0,6)){
        console.log(value.image)
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('col')
        const {image,name,published_in} = value
        cardDiv.innerHTML = `
        <div class="card h-100">
           <img class= "img-fluid" src="${image ? image :"https://picsum.photos/500/300?random=4"}" class="card-img-top" alt="...">
           <div class="card-body">
               <h5 class="card-title">Features</h5>
               <p class="card-text">1.Natural language processing</p>
               <p class="card-text">2.Contextual understanding</p>
           </div>
          <div class="card-footer">
            <h2 class="fw-normal fs-3">${name}</h2>
            <small>${published_in}</small>
          </div>
       </div>
      `
     cardContainer.appendChild(cardDiv)
    }
 }
 loadData()


