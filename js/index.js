 const loadData = () =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  fetch(url)
  .then(res => res.json())
  .then(data => displayData(data.data.tools.slice(0,6)))
  }

  document.getElementById('btn-show-all').addEventListener('click',function(){
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data.tools))
 })

  const displayData =(datas)=>{
  const cardContainer = document.getElementById('card-container')
  cardContainer.innerHTML=''
  datas.forEach(data =>{
  // console.log(data)
  const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `
       <div class="card p-3">
            <img src="${data.image ? data.image : 'no image found'}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <p class="card-text">1.Natural language processing</p>
            <p class="card-text">2.Contextual understanding</p>
            <div class="text-end">
                    <button onclick = "deteilsData('${data.id}')" type="button" href ="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsData">
                           Datails
                    </button>
            </div>
       </div>
      </div>
   `
     cardContainer.appendChild(div)
    })
  }


   const deteilsData = (id)=>{
      // console.log(id)
      const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
        fetch(url)
       .then(res => res.json())
       .then(data => getSingleData(data.data))
      }

      const getSingleData = (tools)=>{
      //  console.log(tools)
     const title = document.getElementById('detailsDataLabel')
     title.innerText = tools.tool_name
     const toolBody = document.getElementById('tool-body')
     toolBody.innerHTML = `
          <h3>${tools.website}</>
     `
 }

 loadData()
 
