// -----getting html element for DOM manipulation----------/////////

let divMain = document.querySelector(".products");
let listHeading = document.querySelector(".listHeading");
let linkHistory = document.getElementById("");


let arr;
let  orderedFood=[]
let obj

//// --------get data of food from API using fetch method-----/////


function getMenu() {
    divMain.innerHTML=""

    let search = document.querySelector(".inp").value;
    let searchArr=search.toLowerCase().split(" ");
    let book=searchArr.join(" ")
    console.log(book)

  fetch(`https://www.googleapis.com/books/v1/volumes?q=${document.querySelector(".inp").value}`).then(res => res.json()).then(data => {
        // loop selecting random 3 burger food
       console.log(data)
       let arr=data.items
       let d=new Date()
       setTimeout(() => {
        let newData={ 
            title:book,
            time:d.toLocaleString(),
            array:arr
        }
        console.log(newData);
       save(newData)
       }, 1000);
      
        arr.map((item) => {
            divMain.innerHTML += `
            <div class="product">
            <img src=${item.volumeInfo.imageLinks.thumbnail} alt="">         
            <h3><p class="res">${item.volumeInfo.title}</p></h3> 
            <p class="res">Author: ${item.volumeInfo.authors ? item.volumeInfo.authors : "Lindsey Mantoan"}</p>
            <p class="it">category: ${item.volumeInfo.categories ? item.volumeInfo.categories : "Fiction"}</p>
            <p class="it">Page Count: ${item.volumeInfo.pageCount ? item.volumeInfo.pageCount : 387}</p>
            <p class="it">Publisher: ${item.volumeInfo.publisher ? item.volumeInfo.publisher : "Routledge"}</p>
            <button class="btn buy">BUY NOW</button>
            
      </div>`                 
        })
        
    }).catch(err =>{
        console.log("Error in API is",err)
    })
}

function save(newData){

    if (localStorage.getItem('data')==null) {
        localStorage.setItem('data',JSON.stringify([]))
    }



    let oldData =JSON.parse(localStorage.getItem('data'));
    console.log(oldData);
    oldData.push(newData)
    localStorage.setItem('data',JSON.stringify(oldData));
    // localStorage.getItem('data').push(1)
    console.log(oldData);
    oldData =JSON.parse(localStorage.getItem('data'));
}




