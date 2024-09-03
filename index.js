

const searchInput = document.querySelector('.search-input');
const cardItems = document.querySelectorAll('.card-item');


searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();

    cardItems.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const bodyText = card.querySelector('.card-text').textContent.toLowerCase();

      
        if (title.includes(searchTerm) || bodyText.includes(searchTerm)) {
            card.style.display = ''; 
        } else {
            card.style.display = 'none'; 
        }
    });
});


const selectAllCheckbox = document.getElementById('selectAll');
const checkboxes = document.querySelectorAll('.card-item input[type="checkbox"]');


selectAllCheckbox.addEventListener('change', function() {
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
});


const approveButtons = document.querySelectorAll('.btn-success');
const declineButtons = document.querySelectorAll('.btn-outline-success');

approveButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (confirm("Are you sure you want to approve this request?")) {
            alert("Request approved successfully!");
        }
    });
});

declineButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (confirm("Are you sure you want to decline this request?")) {
            alert("Request declined successfully!");
        }
    });
});

const filterBtn = document.getElementById('filterBtn');
const filterClass = document.querySelector('.filter-class');

filterBtn.addEventListener('click', function() {
    filterClass.classList.toggle('d-none');
});
