const accordionItemHeaders = document.querySelectorAll(".accordion-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    })
    
});
