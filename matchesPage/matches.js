$(document).ready(function () {
    // Filter functionality
    $(".filter-button").click(function () {
        const filter = $(this).data("filter");
        if (filter === "all") {
            $("[data-status]").show(); // Show all cards
        } else {
            $("[data-status]").hide(); // Hide all cards
            $(`[data-status="${filter}"]`).show(); // Show cards with matching status
        }
    });
});

        function toggleRequest(button) {
            if (button.innerText === "Send Request") {
                button.innerText = "Cancel Request";
                button.classList.remove("btn-warning");
                button.classList.add("btn-danger");
            } else {
                button.innerText = "Send Request";
                button.classList.remove("btn-danger");
                button.classList.add("btn-warning");
            }
        }

        document.addEventListener("DOMContentLoaded", function () {
const platformButton = document.getElementById("platformButton");
const categoryItems = document.querySelectorAll(".category-item");

categoryItems.forEach(item => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        
        const selectedText = this.textContent.trim();
        const selectedIconClass = this.getAttribute("data-icon");

        platformButton.innerHTML = `<i class="${selectedIconClass}"></i> ${selectedText}`;
    });
});
});
document.addEventListener("DOMContentLoaded", function () {
const filterButton = document.getElementById("filterButton");
const filterOptions = document.querySelectorAll(".filter-button");

filterOptions.forEach(option => {
    option.addEventListener("click", function () {
        const selectedText = this.textContent.trim();
        filterButton.innerHTML = `<i class="fas fa-bars"></i> ${selectedText}`;
    });
});
});