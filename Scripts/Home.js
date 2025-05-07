function scrollTo(btn) {
    console.log(btn);
    const height = window.innerHeight;
    const sectionName = btn.id.slice(0, -4);
    const section = document.querySelector(`#${sectionName}`);
    const sectionRect = section.getBoundingClientRect();
    section.scrollIntoView({
        behavior: "smooth",
        block: sectionRect.height > height ? "start" : "end"
    });
}

function setNav(sectionName) {
    const prevBtn = document.querySelector(".navbar .btn.current");
    const currentBtn = document.querySelector(`#${sectionName}-btn`);
    if(prevBtn) prevBtn.classList.remove("current");
    if(currentBtn) currentBtn.classList.add("current");
}

function getView() {
    const height = window.innerHeight;
    const contentSections = document.querySelectorAll(".content-section");
    const sectionsArr = [...contentSections].reverse();

    for (const section of sectionsArr) {
        rect = section.getBoundingClientRect();
        if (rect.top + 100 < height && rect.bottom - 100 > 0) {
            return section.id;
        }
    }
}

window.addEventListener("scroll", () => {
    setNav(getView());
});

const navBtns = document.querySelectorAll(".navbar .btn");
for (const btn of navBtns) {
    btn.addEventListener("click", (e) => {
        scrollTo(e.target);
    });
}

document.querySelector(".copyright span").innerHTML = `&#169; ${new Date().getFullYear()} CallNote, All rights reserved.`;