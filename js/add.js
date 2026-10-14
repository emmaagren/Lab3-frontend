"use strict";

const apiUrl = "https://lab2-workexperience-api.onrender.com/api/workexperience";

const form = document.querySelector("#experience-form");
const formMessage = document.querySelector("#form-message");

// Lyssna efter att formuläret skickas
form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Hämta värden från formuläret
    const experience = {
        companyname: document.querySelector("#companyname").value.trim(),
        jobtitle: document.querySelector("#jobtitle").value.trim(),
        location: document.querySelector("#location").value.trim(),
        startdate: document.querySelector("#startdate").value,
        enddate: document.querySelector("#enddate").value,
        description: document.querySelector("#description").value.trim()
    };

    // Kontrollera att alla fält är ifyllda
    for (const [key, value] of Object.entries(experience)) {
        if (!value) {
            formMessage.textContent = "Du måste fylla i alla fält.";
            formMessage.className = "error";
            return;
        }
    }

    // Kontrollera att slutdatum inte är före startdatum
    if (experience.enddate < experience.startdate) {
        formMessage.textContent = "Slutdatum kan inte vara före startdatum.";
        formMessage.className = "error";
        return;
    }

    try {
        formMessage.textContent = "Sparar arbetslivserfarenhet...";
        formMessage.className = "";

        // Skicka uppgifterna till API:et
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(experience)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Kunde inte spara arbetslivserfarenheten.");
        }

        // Visa bekräftelse och töm formuläret
        formMessage.textContent = "Arbetslivserfarenheten har lagts till!";
        formMessage.className = "success";
        form.reset();

    } catch (error) {
        console.error(error);
        formMessage.textContent = error.message;
        formMessage.className = "error";
    }
});