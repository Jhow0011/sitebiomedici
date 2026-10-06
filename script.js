// ==============================
// MENU MOBILE
// ==============================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


// Fechar menu ao clicar em um link

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");
        menuButton.textContent = "☰";

    });

});


// ==============================
// MODO ESCURO
// ==============================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


// Recuperar tema salvo

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    themeButton.textContent = "☀️";

}


// ==============================
// PESQUISA DE EXAMES
// ==============================

function searchExams() {

    const search = document
        .getElementById("examSearch")
        .value
        .toLowerCase()
        .trim();

    const exams = document.querySelectorAll(".exam-item");

    let found = false;

    exams.forEach(exam => {

        const text = exam.textContent.toLowerCase();

        if (text.includes(search)) {

            exam.style.display = "flex";
            found = true;

        } else {

            exam.style.display = "none";

        }

    });

    if (!found && search !== "") {

        alert("Nenhum exame encontrado.");

    }

}


// Pesquisar apertando Enter

document
    .getElementById("examSearch")
    .addEventListener("keydown", event => {

        if (event.key === "Enter") {

            searchExams();

        }

    });


// ==============================
// FORMULÁRIO
// ==============================

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    const message = document.getElementById("formMessage");

    if (!name || !service || !date) {

        message.textContent =
            "Preencha todos os campos obrigatórios.";

        message.style.color = "#d33";

        return;

    }

    message.textContent =
        `Olá, ${name}! Sua solicitação para ${service} foi registrada.`;

    message.style.color = "#0b8f87";

    form.reset();

});


// ==============================
// DATA MÍNIMA
// ==============================

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==============================
// ANIMAÇÃO AO APARECER
// ==============================

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(".area-card, .person, .about-card, .info-item")
    .forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(25px)";
        element.style.transition = "all .6s ease";

        observer.observe(element);

    });
