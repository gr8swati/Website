document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");

    searchBar.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission if inside a form

            const query = searchBar.value.toLowerCase();
            const navLinks = document.querySelectorAll("nav a");
            let found = false;

            navLinks.forEach(link => {
                const text = link.textContent.toLowerCase();
                if (text.includes(query)) {
                    link.style.backgroundColor = "#ffcc00";
                    link.scrollIntoView({ behavior: "smooth" });
                    found = true;
                } else {
                    link.style.backgroundColor = ""; // Reset if no match
                }
            });

            if (!found) {
                alert("No matching pages found.");
            }
        }
    });
});
