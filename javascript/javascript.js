/* ========================================
   MENU MOBILE
======================================== */

const menuIcon =
    document.querySelector(".menu-icon");

const navbar =
    document.querySelector(".navbar");


if (menuIcon && navbar) {

    menuIcon.addEventListener(
        "click",
        function () {

            navbar.classList.toggle("active");

        }
    );

}


/* ========================================
   LINKS DO MENU
======================================== */

const navigationLinks =
    document.querySelectorAll(".navbar a");


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navbar.classList.remove("active");

        }
    );

});


/* ========================================
   MENU ATIVO NO SCROLL
======================================== */

const sections =
    document.querySelectorAll("section");


window.addEventListener(
    "scroll",
    function () {

        const scrollPosition =
            window.scrollY + 200;


        sections.forEach(function (section) {

            const top =
                section.offsetTop;

            const height =
                section.offsetHeight;

            const id =
                section.getAttribute("id");


            if (
                scrollPosition >= top &&
                scrollPosition < top + height
            ) {

                navigationLinks.forEach(
                    function (link) {

                        link.classList.remove("active");

                    }
                );


                const activeLink =
                    document.querySelector(
                        '.navbar a[href="#' +
                        id +
                        '"]'
                    );


                if (activeLink) {

                    activeLink.classList.add(
                        "active"
                    );

                }

            }

        });

    }
);


/* ========================================
   EFEITO DIGITAÇÃO
======================================== */

const typingElement =
    document.querySelector(".typing-text");


const typingTexts = [
    "Desenvolvedor",
    "Analista de Dados",
    "Tecnologia e Automação",
    "Python | SQL | Power BI"
];


let textIndex = 0;
let characterIndex = 0;
let isDeleting = false;


function typingEffect() {

    if (!typingElement) {
        return;
    }


    const currentText =
        typingTexts[textIndex];


    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentText.length
        ) {

            isDeleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentText.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            isDeleting = false;

            textIndex++;


            if (
                textIndex ===
                typingTexts.length
            ) {

                textIndex = 0;

            }

        }

    }


    const typingSpeed =
        isDeleting ? 45 : 90;


    setTimeout(
        typingEffect,
        typingSpeed
    );

}


if (typingElement) {

    typingEffect();

}


/* ========================================
   CERTIFICADOS
======================================== */

function openCertificate(imagePath) {

    const modal =
        document.getElementById(
            "certificateModal"
        );

    const image =
        document.getElementById(
            "certificateImage"
        );


    if (!modal || !image) {

        console.error(
            "Modal de certificado não encontrado."
        );

        return;

    }


    image.src = imagePath;

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


function closeCertificate() {

    const modal =
        document.getElementById(
            "certificateModal"
        );

    const image =
        document.getElementById(
            "certificateImage"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";


    if (image) {

        setTimeout(
            function () {

                image.src = "";

            },
            200
        );

    }

}


const certificateModal =
    document.getElementById(
        "certificateModal"
    );


if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                certificateModal
            ) {

                closeCertificate();

            }

        }
    );

}


/* ========================================
   PROJETOS
======================================== */

function openProjectImage(imagePath) {

    const modal =
        document.getElementById(
            "projectModal"
        );

    const image =
        document.getElementById(
            "projectModalImage"
        );


    if (!modal || !image) {

        console.error(
            "Modal de projeto não encontrado."
        );

        return;

    }


    image.src = imagePath;

    modal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";

}


function closeProjectImage() {

    const modal =
        document.getElementById(
            "projectModal"
        );

    const image =
        document.getElementById(
            "projectModalImage"
        );


    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";


    if (image) {

        setTimeout(
            function () {

                image.src = "";

            },
            200
        );

    }

}


const projectModal =
    document.getElementById(
        "projectModal"
    );


if (projectModal) {

    projectModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                projectModal
            ) {

                closeProjectImage();

            }

        }
    );

}


/* ========================================
   TECLA ESC
======================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCertificate();

            closeProjectImage();

        }

    }
);


/* ========================================
   ANIMAÇÕES
======================================== */

const revealElements =
    document.querySelectorAll(
        ".section-title, " +
        ".about-text, " +
        ".info-card, " +
        ".skill-card, " +
        ".experience-card, " +
        ".project-card, " +
        ".education-card, " +
        ".certificate-card, " +
        ".contact-card"
    );


revealElements.forEach(
    function (element) {

        element.classList.add(
            "reveal"
        );

    }
);


/* ========================================
   ANIMAÇÃO SEQUENCIAL
======================================== */

const animatedGroups = [

    ".about-info .info-card",

    ".skills-container .skill-card",

    ".experience-container .experience-card",

    ".projects-container .project-card",

    ".education-container .education-card",

    ".certificates-container .certificate-card",

    ".contact-container .contact-card"

];


animatedGroups.forEach(
    function (selector) {

        const elements =
            document.querySelectorAll(
                selector
            );


        elements.forEach(
            function (element, index) {

                const delay =
                    index * 0.08;


                element.style.transitionDelay =
                    delay + "s";

            }
        );

    }
);


/* ========================================
   HOME
======================================== */

const homeContent =
    document.querySelector(
        ".home-content"
    );


const homeImage =
    document.querySelector(
        ".home-image"
    );


if (homeContent) {

    homeContent.classList.add(
        "reveal-left"
    );

}


if (homeImage) {

    homeImage.classList.add(
        "reveal-right"
    );


    homeImage.style.transitionDelay =
        "0.15s";

}


/* ========================================
   OBSERVADOR DAS ANIMAÇÕES
======================================== */

const revealObserver =
    new IntersectionObserver(

        function (
            entries,
            observer
        ) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("active");


                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12,

            rootMargin:
                "0px 0px -40px 0px"
        }

    );


document
    .querySelectorAll(
        ".reveal, " +
        ".reveal-left, " +
        ".reveal-right"
    )
    .forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );


/* ========================================
   BARRAS DAS HABILIDADES
======================================== */

const skillsSection =
    document.querySelector(
        ".skills"
    );


if (skillsSection) {

    const skillsObserver =
        new IntersectionObserver(

            function (
                entries,
                observer
            ) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            setTimeout(
                                function () {

                                    skillsSection
                                        .classList
                                        .add(
                                            "show-skills"
                                        );

                                },
                                250
                            );


                            observer.unobserve(
                                skillsSection
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.25
            }

        );


    skillsObserver.observe(
        skillsSection
    );

}