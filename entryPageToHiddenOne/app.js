const element = document.querySelector(".input-box");

element.addEventListener('input', handleChange);

function handleChange(event){
    const val = event.target.value;
    if(val == "素朴な琴"){
        setTimeout(() => {
            window.location.replace("../hiddenPage/index.html");
        }, 1000);
    }
}