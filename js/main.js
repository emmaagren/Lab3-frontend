"use strict";

const apiUrl = "https://lab3-workexperience-api.onrender.com/api/workexperience";

const experienceList = document.querySelector("#experience-list");
const message = document.querySelector("#message");

// Hämta alla arbetslivserfarenheter från API:et
async function getExperiences() {
    try {
        message.textContent = "Hämtar arbetslivserfarenheter...";

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Kunde inte hämta arbetslivserfarenheter.");
        }

        const experiences = await response.json();

        message.textContent = "";
        experienceList.innerHTML = "";

        // Visa ett meddelande om databasen är tom
        if (experiences.length === 0) {
            message.textContent = "Inga arbetslivserfarenheter finns registrerade.";
            return;
        }

        // Skapa ett kort för varje arbetslivserfarenhet
        experiences.forEach(experience => {
            const article = document.createElement("article");
            article.classList.add("experience-card");

            const title = document.createElement("h3");
            title.textContent = experience.jobtitle;

            const company = document.createElement("p");
            company.textContent = `Företag: ${experience.companyname}`;

            const location = document.createElement("p");
            location.textContent = `Ort: ${experience.location}`;

            const dates = document.createElement("p");
            dates.textContent = `Period: ${experience.startdate} - ${experience.enddate}`;

            const description = document.createElement("p");
            description.textContent = experience.description;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Radera";
            deleteButton.classList.add("delete-btn");

            deleteButton.addEventListener("click", () => {
                deleteExperience(experience._id);
            });

            article.append(title, company, location, dates, description, deleteButton);
            experienceList.appendChild(article);
        });

    } catch (error) {
        console.error(error);
        message.textContent = "Ett fel uppstod när arbetslivserfarenheterna skulle hämtas.";
    }
    
}

// Radera en arbetslivserfarenhet
async function deleteExperience(id) {
    const confirmed = confirm("Vill du verkligen radera denna arbetslivserfarenhet?");

    if (!confirmed) {
        return;
    }

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("Kunde inte radera arbetslivserfarenheten.");
        }

        await getExperiences();

    } catch (error) {
        console.error(error);
        message.textContent = "Det gick inte att radera arbetslivserfarenheten.";
    }
}

// Hämta arbetslivserfarenheter när sidan laddas
getExperiences();