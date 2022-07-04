const news = 
[
    {
        name: "produs1",
        photo: "/meds/aspacardin.jpg" ,
        price: "x ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "produs2",
        photo: "/meds/aspenter.jpg",
        price: "y ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "produs3",
        photo: "meds/aspimax.jpg",
        price: "z ron",
        availability: "in stock",
        description: "text"
    },
    {
        name: "produs4",
        photo: "/meds/protecardin",
        price: "xs ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "produs1",
        photo: "/meds/thrombo.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    },

    {
        name: "produs5",
        photo: "/meds/panagin.jpg",
        price: "x ron",
        availability: "in stock",
        description: "text"
    }
];


function newProd(prodData) {
    return `
    <div class="medication">
    <img class="med-photo" src="${prodData.photo}">
    <h2 class="news-name">${prodData.name} <span class="prices"> (${prodData.price}) </span></h2>
    </div>
    `
}

document.getElementById("show-products").innerHTML = `
<h3 class= "show-title"> New products (${news.length} results) </h3>
${news.map(newProd).join('')}
`

