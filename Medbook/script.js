// Дәрігерлерді Google Sheets-тен алу
function loadDoctorsFromDatabase() {
    const doctors = JSON.parse(localStorage.getItem('doctorsFromSheet') || '[]');
    if (doctors.length > 0) {
        // doctorsData массивін жаңарту
        window.doctorsDataFromDB = doctors;
        return doctors;
    }
    return null;
}

// Дәрігерлер тізімін көрсету функциясын өзгерту
const originalRenderDoctors = renderDoctorsList;
window.renderDoctorsList = function() {
    const dbDoctors = loadDoctorsFromDatabase();
    if (dbDoctors && dbDoctors.length > 0) {
        currentDoctors = dbDoctors.map(doc => ({
            ...doc,
            reviews: doc.reviews || Math.floor(Math.random() * 200) + 50
        }));
    }
    if (originalRenderDoctors) originalRenderDoctors();
};




// ========== ДӘРІГЕРЛЕР ДЕРЕКТЕРІ ==========
const doctorsData = [
    { id: 1, name: "Айжан Сәрсенова", spec: "Терапевт", rating: 5, reviews: 120, experience: 10,
      bio: "10 жылдық тәжірибесі бар жоғары санатты терапевт. Ішкі ауруларды диагностикалау және емдеу бойынша маман.",
      education: "ҚазҰМУ, Жалпы медицина (2014), Резидентура, Терапия (2016)",
      university: "ҚазҰМУ (2014)", graduationYear: "2014",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400" },
    { id: 2, name: "Нұрлан Ахметов", spec: "Кардиолог", rating: 4, reviews: 198, experience: 15,
      bio: "15 жылдық тәжірибе. Жүрек-қан тамыр аурулары бойынша жетекші маман. 1000+ операция жасаған.",
      education: "СДМУ, Кардиология (2009), Резидентура, Интервенциялық кардиология (2011)",
      university: "СДМУ (2009)", graduationYear: "2009",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400" },
    { id: 3, name: "Айым Жүсіпова", spec: "Педиатр", rating: 5, reviews: 175, experience: 8,
      bio: "8 жылдық тәжірибе. Балалар аурулары, вакцинация және бала дамуы бойынша маман.",
      education: "ҚазҰМУ, Педиатрия (2016), Резидентура, Балалар аурулары (2018)",
      university: "ҚазҰМУ (2016)", graduationYear: "2016",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400" },
    { id: 4, name: "Ерлан Бекмұрат", spec: "Невролог", rating: 4, reviews: 163, experience: 12,
      bio: "12 жылдық тәжірибе. Жүйке жүйесі аурулары, бас ауруы, ұйқы бұзылыстары бойынша маман.",
      education: "КазНМУ, Неврология (2012), Резидентура, Нейрофизиология (2014)",
      university: "КазНМУ (2012)", graduationYear: "2012",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400" },
    { id: 5, name: "Динара Нұр", spec: "Гинеколог", rating: 5, reviews: 312, experience: 9,
      bio: "9 жылдық тәжірибе. Әйелдер денсаулығы, жүктілікке дейінгі дайындық бойынша маман.",
      education: "ҚазҰМУ, Гинекология (2015), Резидентура, Репродуктивті медицина (2017)",
      university: "ҚазҰМУ (2015)", graduationYear: "2015",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400" },
    { id: 6, name: "Руслан Ахмет", spec: "Ортопед", rating: 5, reviews: 228, experience: 11,
      bio: "11 жылдық тәжірибе. Тірек-қимыл жүйесі, буын аурулары, спорттық жарақаттар бойынша маман.",
      education: "КазНМУ, Ортопедия (2013), Резидентура, Спорттық медицина (2015)",
      university: "КазНМУ (2013)", graduationYear: "2013",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400" },
    { id: 7, name: "Гүлназ Сейітова", spec: "Педиатр", rating: 5, reviews: 276, experience: 7,
      bio: "7 жылдық тәжірибе. Балалар иммунитеті, аллергия және вакцинация бойынша маман.",
      education: "СДМУ, Педиатрия (2017), Резидентура, Аллергология (2019)",
      university: "СДМУ (2017)", graduationYear: "2017",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400" },
    { id: 8, name: "Бақытжан Омаров", spec: "Хирург", rating: 5, reviews: 189, experience: 14,
      bio: "14 жылдық тәжірибе. Жалпы хирургия, лапароскопиялық операциялар бойынша маман.",
      education: "ҚазҰМУ, Хирургия (2010), Резидентура, Лапароскопиялық хирургия (2012)",
      university: "ҚазҰМУ (2010)", graduationYear: "2010",
      image: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg?w=400" }
];

// ========== БЛОГ МАҚАЛАЛАРЫ ==========
const blogPosts = [
    { id: 1, title: "Иммунитетті қалай көтеруге болады?", excerpt: "Күзде суық тиюден сақтанудың 10 тиімді әдісі", date: "15 Наурыз 2026", views: 2100, image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400" },
    { id: 2, title: "Жүрек денсаулығына арналған 5 пайдалы тағам", excerpt: "Кардиологтар ұсынатын диета", date: "08 Сәуір 2026", views: 1200, image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400" },
    { id: 3, title: "Балалар вакцинациясы: не білу керек?", excerpt: "Педиатр кеңесі және вакцинация күнтізбесі", date: "02 Мамыр 2026", views: 3000, image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400" },
    { id: 4, title: "Ұйқы гигиенасы: сапалы ұйқының 7 ережесі", excerpt: "Профессор Асанованың ұсыныстары", date: "21 Сәуір 2026", views: 1800, image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400" },
    { id: 5, title: "COVID-19 кейінгі асқынулар", excerpt: "Постковидтық синдром және оны емдеу", date: "10 Қаңтар 2026", views: 4500, image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400" },
    { id: 6, title: "Денсаулыққа зиянды әдеттер", excerpt: "Темекі, алкоголь және басқа зиянды әдеттер", date: "05 Ақпан 2026", views: 890, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" },
    { id: 7, title: "Спорт және денсаулық", excerpt: "Қандай спорт түрі сізге сай?", date: "18 Ақпан 2026", views: 2340, image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400" },
    { id: 8, title: "Дұрыс тамақтану негіздері", excerpt: "Теңгерімді тамақтанудың 10 қағидасы", date: "25 Ақпан 2026", views: 5670, image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400" },
    { id: 9, title: "Стресті басқару әдістері", excerpt: "Стрессіз өмір сүру жолдары", date: "03 Наурыз 2026", views: 3210, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400" },
    { id: 10, title: "Қант диабеті: алдын алу және емдеу", excerpt: "Қант диабеті туралы толық ақпарат", date: "12 Наурыз 2026", views: 1890, image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400" },
    { id: 11, title: "Жазғы демалыс кезіндегі қауіпсіздік", excerpt: "Күн астында жүру ережелері", date: "20 Маусым 2026", views: 980, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" },
    { id: 12, title: "Мигрень: себептері және емдеу", excerpt: "Бас ауруынан құтылу жолдары", date: "28 Маусым 2026", views: 1450, image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400" },
    { id: 13, title: "Аллергия түрлері және емдеу", excerpt: "Маусымдық және тағамдық аллергия", date: "05 Шілде 2026", views: 2100, image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400" },
    { id: 14, title: "Денсаулыққа пайдалы сусындар", excerpt: "Қандай сусындар пайдалы?", date: "15 Шілде 2026", views: 760, image: "https://images.unsplash.com/photo-1543364195-bfe6e4932397?w=400" },
    { id: 15, title: "Қартаю процесін баяулату", excerpt: "Жас ұзартудың құпиялары", date: "22 Шілде 2026", views: 3420, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400" }
];

function renderStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star text-warning"></i>';
        } else {
            stars += '<i class="far fa-star text-warning"></i>';
        }
    }
    return stars;
}

function loadPopularDoctors() {
    const container = document.getElementById("popularDoctors");
    if (container) {
        const topDoctors = doctorsData.slice(0, 4);
        container.innerHTML = topDoctors.map(doc => `
            <div class="col-md-3">
                <div class="doctor-card">
                    <img src="${doc.image}" alt="${doc.name}" onerror="this.src='https://via.placeholder.com/400?text=Doctor'">
                    <h4>${doc.name}</h4>
                    <p>${doc.spec}</p>
                    <div class="rating mb-2">
                        ${renderStars(doc.rating)}
                        <span class="ms-2">(${doc.reviews} пікір)</span>
                    </div>
                    <button class="btn btn-primary w-100" onclick="viewDoctor(${doc.id})">Профиль көру</button>
                </div>
            </div>
        `).join('');
    }
}

function renderDoctorsList() {
    const container = document.getElementById("doctorsList");
    if (container) {
        container.innerHTML = currentDoctors.map(doc => `
            <div class="col-md-6 col-lg-4">
                <div class="doctor-card">
                    <img src="${doc.image}" alt="${doc.name}" onerror="this.src='https://via.placeholder.com/400?text=Doctor'">
                    <h4>${doc.name}</h4>
                    <p>${doc.spec}</p>
                    <div class="rating mb-2">
                        ${renderStars(doc.rating)}
                        <span class="ms-2">(${doc.reviews} пікір)</span>
                    </div>
                    <button class="btn btn-primary w-100" onclick="viewDoctor(${doc.id})">Профиль көру</button>
                </div>
            </div>
        `).join('');
    }
}

let currentDoctors = [...doctorsData];

function filterDoctors() {
    const sortBy = document.getElementById("sortBy")?.value || "rating";
    const selectedSpecs = Array.from(document.querySelectorAll('#specialtiesFilter input:checked')).map(cb => cb.value);
    const ratingFilter = document.querySelector('input[name="rating"]:checked')?.value || "all";
    
    let filtered = [...doctorsData];
    
    if (selectedSpecs.length > 0) {
        filtered = filtered.filter(doc => selectedSpecs.includes(doc.spec));
    }
    
    if (ratingFilter !== "all") {
        const minRating = parseInt(ratingFilter);
        filtered = filtered.filter(doc => doc.rating >= minRating);
    }
    
    if (sortBy === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "reviews") {
        filtered.sort((a, b) => b.reviews - a.reviews);
    } else if (sortBy === "name") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    currentDoctors = filtered;
    renderDoctorsList();
}

function searchDoctor() {
    const query = document.getElementById("searchInput")?.value.trim().toLowerCase();
    if (query) {
        const results = doctorsData.filter(doc => 
            doc.name.toLowerCase().includes(query) || 
            doc.spec.toLowerCase().includes(query)
        );
        
        if (results.length > 0) {
            localStorage.setItem("searchResults", JSON.stringify(results));
            window.location.href = "doctors.html?search=true";
        } else {
            alert(`"${query}" бойынша дәрігер табылмады`);
        }
    } else {
        alert("Дәрігер атын немесе мамандықты енгізіңіз");
    }
}

function loadSearchResults() {
    const searchResults = JSON.parse(localStorage.getItem("searchResults"));
    if (searchResults && searchResults.length > 0 && document.getElementById("doctorsList")) {
        currentDoctors = searchResults;
        renderDoctorsList();
        localStorage.removeItem("searchResults");
    }
}

function viewDoctor(doctorId) {
    const doctor = doctorsData.find(d => d.id === doctorId);
    if (doctor) {
        localStorage.setItem("currentDoctor", JSON.stringify(doctor));
        window.location.href = "doctor-profile.html";
    }
}

function loadDoctorProfile() {
    const doctor = JSON.parse(localStorage.getItem("currentDoctor"));
    if (doctor) {
        const avatar = document.getElementById("doctorAvatar");
        if (avatar) {
            avatar.src = doctor.image;
            avatar.onerror = function() {
                this.src = "https://via.placeholder.com/200?text=Doctor";
            };
        }
        
        const nameEl = document.getElementById("doctorName");
        if (nameEl) nameEl.innerText = doctor.name;
        
        const specEl = document.getElementById("doctorSpec");
        if (specEl) specEl.innerText = doctor.spec;
        
        const ratingEl = document.getElementById("doctorRating");
        if (ratingEl) ratingEl.innerHTML = renderStars(doctor.rating);
        
        const bioEl = document.getElementById("doctorBio");
        if (bioEl) {
            bioEl.innerHTML = `
                <p><strong>📅 Тәжірибесі:</strong> ${doctor.experience} жыл</p>
                <p><strong>🏛 Оқу орны:</strong> ${doctor.university || "Ақпарат жоқ"}</p>
                <p><strong>📝 Жалпы ақпарат:</strong> ${doctor.bio}</p>
            `;
        }
        
        const eduEl = document.getElementById("doctorEducation");
        if (eduEl) {
            eduEl.innerHTML = `<li>${doctor.education}</li>`;
        }
        
        loadReviews(doctor.id);
    }
}

function loadReviews(doctorId) {
    const reviews = JSON.parse(localStorage.getItem(`reviews_${doctorId}`)) || [];
    const container = document.getElementById("reviewsList");
    if (container) {
        if (reviews.length === 0) {
            container.innerHTML = '<p class="text-muted">Әлі пікір жоқ. Алғашқы пікір қалдырыңыз!</p>';
        } else {
            container.innerHTML = reviews.map(review => `
                <div class="card p-3 mt-3">
                    <div class="d-flex justify-content-between">
                        <b>${review.userName}</b>
                        <div class="rating">${renderStars(review.rating)}</div>
                    </div>
                    <p class="mt-2">${review.text}</p>
                    <small class="text-muted">${review.date}</small>
                </div>
            `).join('');
        }
    }
}

let currentRating = 0;

function setRating(rating) {
    currentRating = rating;
    const stars = document.querySelectorAll('.rating-input i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.remove('far');
            star.classList.add('fas');
        } else {
            star.classList.remove('fas');
            star.classList.add('far');
        }
    });
}

function showReviewForm() {
    const form = document.getElementById("reviewForm");
    if (form) {
        form.style.display = form.style.display === "none" ? "block" : "none";
    }
}

function addReview() {
    const user = JSON.parse(localStorage.getItem("medbookUser"));
    if (!user) {
        alert("Пікір жазу үшін алдымен кіріңіз!");
        openAuthModal();
        return;
    }
    
    const reviewText = document.getElementById("reviewText")?.value;
    if (!reviewText) {
        alert("Пікіріңізді жазыңыз!");
        return;
    }
    
    if (currentRating === 0) {
        alert("Рейтинг қойыңыз!");
        return;
    }
    
    const doctor = JSON.parse(localStorage.getItem("currentDoctor"));
    if (doctor) {
        const reviews = JSON.parse(localStorage.getItem(`reviews_${doctor.id}`)) || [];
        reviews.push({
            userName: user.name,
            rating: currentRating,
            text: reviewText,
            date: new Date().toLocaleDateString()
        });
        localStorage.setItem(`reviews_${doctor.id}`, JSON.stringify(reviews));
        
        const reviewTextarea = document.getElementById("reviewText");
        if (reviewTextarea) reviewTextarea.value = "";
        setRating(0);
        const reviewForm = document.getElementById("reviewForm");
        if (reviewForm) reviewForm.style.display = "none";
        loadReviews(doctor.id);
        alert("Пікіріңіз сәтті қосылды!");
    }
}

let authModal = null;

function openAuthModal() {
    authModal = new bootstrap.Modal(document.getElementById('authModal'));
    authModal.show();
}

let selectedUserRole = null;

function selectRole(role) {
    selectedUserRole = role;
}

function switchAuthTab(tab) {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');
    
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));
    
    if (tab === 'login') {
        if (tabs[0]) tabs[0].classList.add('active');
        const loginForm = document.getElementById('loginFormModal');
        if (loginForm) loginForm.classList.add('active');
    } else {
        if (tabs[1]) tabs[1].classList.add('active');
        const registerForm = document.getElementById('registerFormModal');
        if (registerForm) registerForm.classList.add('active');
    }
}

document.getElementById("registerFormModal")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const phone = document.getElementById("regPhone").value;
    const password = document.getElementById("regPassword").value;
    
    const user = { name, email, phone, password, appointments: [] };
    localStorage.setItem("medbookUser", JSON.stringify(user));
    
    alert("Сәтті тіркелдіңіз!");
    if (authModal) authModal.hide();
});

document.getElementById("loginFormModal")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const savedUser = JSON.parse(localStorage.getItem("medbookUser"));
    
    if (savedUser && email === savedUser.email && password === savedUser.password) {
        alert(`Қош келдіңіз, ${savedUser.name}!`);
        if (authModal) authModal.hide();
        updateUserUI(savedUser);
    } else {
        alert("Email немесе пароль қате!");
    }
});

function updateUserUI(user) {
    const profileBtn = document.getElementById("profileBtn");
    if (profileBtn) {
        profileBtn.style.display = "inline-block";
    }
    const userNameDisplay = document.getElementById("userNameDisplay");
    if (userNameDisplay) {
        userNameDisplay.style.display = "none";
    }
}

function checkLoginStatus() {
    const user = JSON.parse(localStorage.getItem("medbookUser"));
    if (user) {
        updateUserUI(user);
    }
}

function viewProfile() {
    const user = JSON.parse(localStorage.getItem("medbookUser"));
    if (!user) {
        openAuthModal();
        return;
    }
    
    const appointments = user.appointments || [];
    
    const profileContent = `
        <div class="text-center mb-4">
            <i class="fas fa-user-circle fa-4x text-primary"></i>
            <h4 class="mt-2">${user.name}</h4>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="card p-3 mb-3">
                    <h5><i class="fas fa-envelope"></i> Email</h5>
                    <p>${user.email}</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card p-3 mb-3">
                    <h5><i class="fas fa-phone"></i> Телефон</h5>
                    <p>${user.phone}</p>
                </div>
            </div>
        </div>
        <div class="card p-3 mt-2">
            <h5><i class="fas fa-calendar-check"></i> Жазылған қабылдаулар</h5>
            ${appointments.length === 0 ? '<p class="text-muted">Әлі жазылған қабылдау жоқ</p>' : 
                appointments.map(apt => `
                    <div class="border-bottom pb-2 mb-2">
                        <strong>${apt.doctorName}</strong> - ${apt.spec}<br>
                        <small class="text-muted">${apt.date} ${apt.time}</small>
                    </div>
                `).join('')
            }
        </div>
        <button class="btn btn-primary w-100 mt-3" onclick="sendSMS('${user.phone}')">
            <i class="fas fa-sms"></i> SMS ескерту жіберу
        </button>
    `;
    
    const profileContentDiv = document.getElementById("profileContent");
    if (profileContentDiv) {
        profileContentDiv.innerHTML = profileContent;
    }
    const profileModal = new bootstrap.Modal(document.getElementById('profileModal'));
    profileModal.show();
}

function sendSMS(phone) {
    alert(`📱 ${phone} нөміріне SMS ескерту жіберілді: "Қабылдауыңызды ұмытпаңыз!"`);
}

function bookDoctor() {
    const user = JSON.parse(localStorage.getItem("medbookUser"));
    if (!user) {
        alert("Жазылу үшін алдымен кіріңіз!");
        openAuthModal();
        return;
    }
    
    const doctor = JSON.parse(localStorage.getItem("currentDoctor"));
    if (doctor) {
        const date = prompt("Қабылдау күнін енгізіңіз (мысалы: 15.04.2026):");
        const time = prompt("Қабылдау уақытын енгізіңіз (мысалы: 14:30):");
        
        if (date && time) {
            const appointments = user.appointments || [];
            appointments.push({
                doctorName: doctor.name,
                spec: doctor.spec,
                date: date,
                time: time
            });
            user.appointments = appointments;
            localStorage.setItem("medbookUser", JSON.stringify(user));
            
            alert(`Сіз ${doctor.name} дәрігеріне ${date} ${time} жазылдыңыз!`);
            
            if (confirm("Телефонға SMS ескерту жіберу керек пе?")) {
                sendSMS(user.phone);
            }
        }
    }
}

function loadBlogPosts() {
    const container = document.getElementById("blogPosts");
    if (container) {
        container.innerHTML = blogPosts.map(post => `
            <div class="col-md-4">
                <div class="blog-card">
                    <img src="${post.image}" alt="${post.title}">
                    <div class="blog-content">
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <div class="blog-meta">
                            <span><i class="far fa-calendar"></i> ${post.date}</span>
                            <span><i class="far fa-eye"></i> ${post.views}</span>
                        </div>
                        <button class="btn btn-outline-primary mt-2 w-100" onclick="alert('Толық мақала жақын арада қосылады')">Толығырақ</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function scrollToFooter() {
    const footer = document.getElementById("footer");
    if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
    }
}

const heroImages = [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763f?w=1200",
    "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1200",
    "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200"
];

let imageIndex = 0;
const heroSection = document.getElementById("heroSection");

function changeHeroBackground() {
    if (heroSection) {
        heroSection.style.backgroundImage = `url(${heroImages[imageIndex]})`;
        imageIndex = (imageIndex + 1) % heroImages.length;
    }
}

// ========== DARK MODE ==========
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    loadPopularDoctors();
    checkLoginStatus();
    initDarkMode();
    
    if (document.getElementById("doctorsList")) {
        if (window.location.href.includes("search=true")) {
            loadSearchResults();
        } else {
            renderDoctorsList();
        }
    }
    
    if (document.getElementById("blogPosts")) {
        loadBlogPosts();
    }
    
    if (document.getElementById("doctorName")) {
        loadDoctorProfile();
    }
});

if (heroSection) {
    changeHeroBackground();
    setInterval(changeHeroBackground, 4000);
}