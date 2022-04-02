const form = document.querySelector('#searchForm')
const search = document.querySelector('.search-result')
const main = document.querySelector('.main-section')

form.addEventListener('submit',async function(e){
    e.preventDefault();
    // window.open('./search.html')
    console.log('submitted')

    const searchTerm = form.elements.query.value
    
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    // console.log(res.data)
    makeImages(res.data)



})


const makeImages = (shows) => {
    for(let result of shows){
            // append
           if(result.show.image){
            console.log(result)
            const img = document.createElement('img')
            img.src = result.show.image.medium;
            search.append(img)
           }
    }
}