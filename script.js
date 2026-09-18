document
    .getElementById("rsvp-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        alert(`Thank you for your RSVP, ${name}! ♡`);
    });