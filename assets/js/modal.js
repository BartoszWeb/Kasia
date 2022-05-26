const gallery = document.querySelector(".gallery");
const images = document.querySelectorAll(".gallery__item");
const modal = document.querySelector(".modal");
const footer = document.querySelector(".footer");
const close = document.querySelector(".close");
const buttonBack = document.querySelector(".buttonBack");

const handleZoom = (e) => {
    const modalWrapper = document.createElement("div");
    modalWrapper.classList.add("wrapper");
    const modalImg = document.createElement("img");
    const describeImg = document.createElement("p");
    describeImg.innerHTML = `${ e.target.dataset.details }`;
    modalImg.src = e.target.dataset.src;
    modal.appendChild(modalWrapper);
    modalWrapper.appendChild(modalImg);
    modalWrapper.appendChild(describeImg);
    gallery.classList.add("hidden");
    buttonBack.classList.add("hidden");
    footer.classList.add("hidden");
    modal.classList.add("active");
    
    setTimeout(() => {
        gallery.classList.add("opacityOff");
        modal.classList.add("opacityOn");
    }, 100);
    const closeModalOnKey = (e) => {
        if(e.key === "Escape"){
            closeModal()
        }
    }
    const closeModal = () => {
        modal.removeChild(modalWrapper);
        modal.classList.remove("active");
        modal.classList.remove("opacityOn");
        gallery.classList.remove("hidden");
        setTimeout(() => {
            gallery.classList.remove("opacityOff");
            buttonBack.classList.remove("hidden");
            footer.classList.remove("hidden");
        }, 20);
        close.removeEventListener("click", closeModal);
        window.removeEventListener("keydown", closeModalOnKey)
    };
    
    close.addEventListener("click", closeModal);
    window.addEventListener("keydown", closeModalOnKey)
};


images.forEach(singleItem => singleItem.addEventListener("click", handleZoom));