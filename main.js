const srcbtn = document.getElementById("srcbtn");

srcbtn.onclick = () => {
    const srcinput = document.getElementById("src");
    const srcquery = srcinput.innerText;
    console.log(srcquery);
}