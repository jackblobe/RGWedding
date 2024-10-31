document.getElementById('rsvpForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const form = e.target;
    const data = {
        name: form.name.value,
        email: form.email.value,
        attending: form.attending.value,
        guests: form.guests.value || '0'
    };

    const responseMessage = document.getElementById('responseMessage');

    try {
        const response = await fetch("https://script.google.com/macros/s/AKfycby6xO6HwjzimVRZGs3EC6wUJVHI4vYAWpLYNCawPITvE3h2jXERr4_ru6-8xlY-8eBe/exec", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();
        if (result.result === "success") {
            responseMessage.textContent = "Thank you! Your RSVP has been submitted.";
            form.reset();
        } else {
            responseMessage.textContent = "Oops! Something went wrong.";
        }
    } catch (error) {
        responseMessage.textContent = "An error occurred while submitting the form.";
        console.error("Error:", error);
    }
});
