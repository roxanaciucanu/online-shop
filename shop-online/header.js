const searchWrapper = document.querySelector(".find");
const inputBox = searchWrapper.querySelector("input");
const suggestBox = searchWrapper.querySelector(".auto-fill");

//if users press any key and release
inputBox.onkeyup= (e)=>{
    let userData = e.target.value; // user enters data
    let emptyArray= [];
    if (userData) {
        emptyArray = suggestions.filter((data)=>{
            //filter array value and user caharacters to lowercase and return only those
            //words which start with user eneterd data
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active")
    }else{
        searchWrapper.classList.remove("active")
    }
    showSuggest(emptyArray);
}

function showSuggest(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggestBox.innerHTML = listData;
}