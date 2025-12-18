
let contacts = JSON.parse(localStorage.getItem('contactHub_v3')) || [];
const contactGrid = document.getElementById('contactGrid');
const favList = document.getElementById('favoritesList');
const emerList = document.getElementById('emergencyList');
const contactForm = document.getElementById('contactForm');
const contactModal = document.getElementById('contactModal');


document.addEventListener('DOMContentLoaded', () => {
    renderAll();
});


document.getElementById('addBtn').onclick = () => {
    document.getElementById('editIndex').value = "";
    contactForm.reset();
    document.getElementById('modalTitle').innerText = "Add New Contact";
    contactModal.style.display = "block";
};

function closeModal() {
    contactModal.style.display = "none";
}



contactForm.onsubmit = (e) => {
    e.preventDefault();
    
    const index = document.getElementById('editIndex').value;
    const contactData = {
        name: document.getElementById('fullName').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        email: document.getElementById('email').value.trim(),
        group: document.getElementById('group').value,
        isFav: document.getElementById('isFav').checked,
        isEmer: document.getElementById('isEmer').checked
    };

    
    const phoneRegex = /^01[0125][0-9]{8}$/;
    if (!phoneRegex.test(contactData.phone)) {
        Swal.fire('Invalid Phone', 'Please use a valid Egyptian number', 'error');
        return;
    }

    if (index === "") {
        contacts.push(contactData); 
        Swal.fire('Added!', 'Contact has been added successfully.', 'success');
    } else {
        contacts[index] = contactData;
        Swal.fire('Updated!', 'Contact updated successfully.', 'success');
    }

    saveAndRefresh();
    closeModal();
};



function renderAll() {
    renderMainGrid();     
    renderSubSection('isFav', 'favoritesList', 'No favorites yet'); // قائمة المفضلات
    renderSubSection('isEmer', 'emergencyList', 'No emergency contacts'); // قائمة الطوارئ
    updateStats();
}


function renderMainGrid(data = contacts) {
    contactGrid.innerHTML = '';
    if (data.length === 0) {
        contactGrid.innerHTML = '<p class="text-muted text-center w-100">No contacts found.</p>';
        return;
    }

    data.forEach((contact, index) => {
        const initials = contact.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
        contactGrid.innerHTML += `
            <div class="contact-card">
                <div class="card-top">
                    <div class="initials">${initials}<div class="status-dot"></div></div>
                    <div>
                        <h4 style="margin:0">${contact.name} ${contact.isEmer ? '🚨' : ''}</h4>
                        <p style="margin:5px 0; font-size:0.85rem; color:#636e72"><i class="fas fa-phone"></i> ${contact.phone}</p>
                    </div>
                </div>
                <div style="font-size:0.8rem; color:#b2bec3; margin-bottom: 10px;">
                    <i class="fas fa-envelope"></i> ${contact.email || 'No email'}
                </div>
                <div class="card-actions">
                    <div style="display:flex; gap:8px">
                        <a href="tel:${contact.phone}" class="action-btn text-success"><i class="fas fa-phone"></i></a>
                        <a href="mailto:${contact.email}" class="action-btn text-primary"><i class="fas fa-envelope"></i></a>
                    </div>
                    <div style="display:flex; gap:8px">
                        <button onclick="toggleStatus(${index}, 'isFav')" class="action-btn ${contact.isFav ? 'text-warning' : ''}"><i class="fas fa-star"></i></button>
                        <button onclick="editContact(${index})" class="action-btn"><i class="fas fa-edit"></i></button>
                        <button onclick="deleteContact(${index})" class="action-btn btn-delete"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `;
    });
}



function renderSubSection(property, elementId, emptyMsg) {
    const listElement = document.getElementById(elementId);
   
    const filtered = contacts.filter(c => c[property]);

    listElement.innerHTML = '';
    
    if (filtered.length === 0) {
        listElement.innerHTML = `<div class="w-100 text-center py-4 text-muted" style="font-style: italic;">${emptyMsg}</div>`;
        return;
    }


    filtered.forEach((contact) => {
        const initials = contact.name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
        listElement.innerHTML += `
            <div class="col-md-6 col-lg-4 p-2"> <div class="mini-contact-card shadow-sm">
                    <div class="d-flex align-items-center">
                        <div class="initials me-3" style="width:45px; height:45px; font-size:1rem; border-radius: 12px;">${initials}</div>
                        <div>
                            <div class="fw-bold small" style="color: #2d3436;">${contact.name}</div>
                            <div class="text-muted" style="font-size:0.75rem;">${contact.phone}</div>
                        </div>
                    </div>
                    <a href="tel:${contact.phone}" class="action-btn text-success shadow-sm" style="background: #f8faff;">
                        <i class="fas fa-phone-alt" style="font-size: 0.8rem;"></i>
                    </a>
                </div>
            </div>
        `;
    });
}

function saveAndRefresh() {
    localStorage.setItem('contactHub_Final', JSON.stringify(contacts));
    renderMainGrid(); // الشبكة الرئيسية
    renderSubSection('isFav', 'favoritesList', 'No favorites yet'); // تحديث المفضلات
    renderSubSection('isEmer', 'emergencyList', 'No emergency contacts'); // تحديث الطوارئ
    updateStats(); 
}


function deleteContact(index) {
    Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            contacts.splice(index, 1);
            saveAndRefresh();
            Swal.fire('Deleted!', 'Contact removed.', 'success');
        }
    });
}

function editContact(index) {
    const c = contacts[index];
    document.getElementById('editIndex').value = index;
    document.getElementById('fullName').value = c.name;
    document.getElementById('phone').value = c.phone;
    document.getElementById('email').value = c.email;
    document.getElementById('group').value = c.group;
    document.getElementById('isFav').checked = c.isFav;
    document.getElementById('isEmer').checked = c.isEmer;
    document.getElementById('modalTitle').innerText = "Edit Contact";
    contactModal.style.display = "block";
}

function searchContacts() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    const filtered = contacts.filter(c => c.name.toLowerCase().includes(term) || c.phone.includes(term));
    renderMainGrid(filtered); 
}

function toggleStatus(index, property) {
    contacts[index][property] = !contacts[index][property];
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('contactHub_v3', JSON.stringify(contacts)); 
    renderAll(); 
}

function updateStats() {
    document.getElementById('totalCount').innerText = contacts.length;
    document.getElementById('favCount').innerText = contacts.filter(c => c.isFav).length;
    document.getElementById('emerCount').innerText = contacts.filter(c => c.isEmer).length;
    document.getElementById('subCountText').innerText = `Manage and organize your ${contacts.length} contacts`;
}