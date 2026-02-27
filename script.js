function showMessage() {
    alert("Welcome to Cloud & AWS Learning!");
}

window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".hidden");
    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});
