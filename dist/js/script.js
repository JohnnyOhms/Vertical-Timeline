const init = () => {
    const sections = document.querySelectorAll(".timeline__list-item")

    function elementInViewPort(element) {
        const rect = element.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function displaySection() {
        for (let i = 0; i < sections.length; i++) {
            if (elementInViewPort(sections[i])) {
            sections[i].classList.add("slide-in");
            } else {
            sections[i].classList.remove("slide-in");
            }
        }
    }

    window.addEventListener("load", displaySection)
    window.addEventListener("scroll", displaySection)
    window.addEventListener("resize", displaySection)
}

init()