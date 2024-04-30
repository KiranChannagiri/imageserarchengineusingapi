const loadmore = document.querySelector(".loadmore");
let resposnceimages = document.querySelector(".resposnceimages");
let Searchbtn = document.querySelector(".Searchbtn");
let inputext = document.querySelector(".inputext");
let Search = document.querySelector(".Search");
let keyword = "";
let accesskey = "9cGc4kkOrpOG5W_97ZAHgUicLvnKJZ2KAADYuWi2nyQ";
let page = 1;
async  function imagesearch()
{
    keyword = inputext.value;
    console.log(keyword);
    let url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    imagearray=data.results;
    console.log(imagearray);
    if(page==1)
    {
        resposnceimages.innerHTML="";
    }
    imagearray.forEach((image)=>
    {
        let imagee = document.createElement("img");
        imagee.src=image.urls.small;
        imagee.classList.add("cssimg");
        resposnceimages.appendChild(imagee);
    });
    loadmore.classList.add("dblock");
}
Search.addEventListener("submit",(e)=>
{
    e.preventDefault();
    imagesearch();
    page=1;
})
loadmore.addEventListener("click",()=>
{
    page++;
    imagesearch();
});
Searchbtn.addEventListener("click",()=>
{
    imagesearch();
    page=1;
})