// load data
const loadNews = async (newsid) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${newsid}`;
    const res = await fetch(url);
    const data = await res.json();
    // showNews(data.data);
    // console.log(data.data);
    showNews(data.data)
}

const showNews = news =>{
  loader(true);
  const newsShowDiv = document.getElementById('show-news');
  newsShowDiv.innerHTML = '';
  for (const post of news) {
    console.log(post);
    const creatDiv = document.createElement('div');
    creatDiv.classList.add('row'); 
    creatDiv.classList.add('g-0');
    creatDiv.innerHTML = `
    <div class="col-md-4">
      <img src="${post.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
     <div class="col-md-8">
        <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text text-truncate">${post.details}</p>
        <div class="row">
          <div class="col-1">
            <img src="${post.author.img}" class="mt-3 img-fluid rounded-circle" alt="..." width="60" height="60">
          </div>
          <div class="col-3">
            <p class="card-text"><small class="text-muted">Name: ${post.author.name}</small><p>
            <p class="card-text"><small class="text-muted">${post.author.published_date}<small></p>
          </div>
          <div class="col">
            <p class="card-text"><small class="text-muted">Total View: ${post.total_view}<small></p>
          </div>
          <div class="col">
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModalCenter">
              More Details
            </button>
            
            <!-- Modal -->
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">${post.details}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    ${post.author.name}
                  </div
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    newsShowDiv.appendChild(creatDiv);
    loader(false)
  }
};

// loder or spinner section
const loader = isLoding =>{
  const loderDiv = document.getElementById('loader');
  if(isLoding){
      loderDiv.classList.remove('d-none')
  }
  else{
      loderDiv.classList.add('d-none')
  }
}
// page refresh
function refreshPage(){
  window.location.reload();
}
loadNews('08');