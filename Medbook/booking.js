// ========== КАЛЕНДАРЬ (АЙЛЫҚ) ЖӘНЕ ҚАБЫЛДАУ ЖҮЙЕСІ ==========

let selectedDate = null;
let selectedTime = null;
let currentMonth = new Date();
let currentYear = currentMonth.getFullYear();
let currentMonthIndex = currentMonth.getMonth();

const ADMIN_WHATSAPP = "87023169651";

// Бүгінгі күн
const today = new Date();
today.setHours(0, 0, 0, 0);

// Келесі бос уақытты ұсыну
function suggestNextAvailable() {
    if (selectedDate && selectedTime) return;
    
    for (let i = 1; i <= 14; i++) {
        let checkDate = new Date();
        checkDate.setDate(today.getDate() + i);
        if (checkDate.getDay() !== 0) {
            selectDate(checkDate);
            setTimeout(() => {
                const firstTimeSlot = document.querySelector('.time-slot:not(.disabled)');
                if (firstTimeSlot && firstTimeSlot.innerText) {
                    selectTime(firstTimeSlot.innerText);
                }
            }, 100);
            break;
        }
    }
}

// Ай бойынша календарьды көрсету
function renderCalendar() {
    const container = document.getElementById('calendarDays');
    if (!container) {
        console.log('calendarDays элементі табылмады');
        return;
    }
    
    const monthNames = ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 
                        'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
    
    const monthYearElem = document.getElementById('currentMonthYear');
    if (monthYearElem) {
        monthYearElem.innerText = `${monthNames[currentMonthIndex]} ${currentYear}`;
    }
    
    const firstDayOfMonth = new Date(currentYear, currentMonthIndex, 1);
    const startDayOfWeek = firstDayOfMonth.getDay();
    let startOffset = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;
    
    const lastDayOfMonth = new Date(currentYear, currentMonthIndex + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const prevMonthLastDay = new Date(currentYear, currentMonthIndex, 0).getDate();
    
    let days = [];
    
    for (let i = startOffset - 1; i >= 0; i--) {
        days.push({ day: prevMonthLastDay - i, type: 'prev', date: null });
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonthIndex, i);
        const isPast = date < new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const isSunday = date.getDay() === 0;
        const isSelected = selectedDate && selectedDate.toDateString() === date.toDateString();
        const isToday = date.toDateString() === today.toDateString();
        
        days.push({
            day: i,
            type: 'current',
            date: date,
            isPast: isPast,
            isSunday: isSunday,
            isSelected: isSelected,
            isToday: isToday
        });
    }
    
    const totalCells = Math.ceil(days.length / 7) * 7;
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
        days.push({ day: i, type: 'next', date: null });
    }
    
    container.innerHTML = days.map(day => {
        if (day.type !== 'current' || !day.date) {
            return `<div class="calendar-day empty"></div>`;
        }
        
        const isDisabled = day.isPast || day.isSunday;
        const isSelectedClass = day.isSelected ? 'selected' : '';
        const isTodayClass = day.isToday ? 'today' : '';
        const isSundayClass = day.isSunday ? 'sunday' : '';
        const disabledClass = isDisabled ? 'disabled-day' : '';
        
        return `
            <div class="calendar-day ${isSelectedClass} ${isTodayClass} ${isSundayClass} ${disabledClass}"
                 onclick="${!isDisabled ? `selectDate(new Date(${day.date.getFullYear()}, ${day.date.getMonth()}, ${day.date.getDate()}))` : ''}">
                ${day.day}
            </div>
        `;
    }).join('');
}

// Күнді таңдау
function selectDate(date) {
    if (!date) return;
    
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    
    if (date < todayDate) {
        alert('Өткен күнді таңдауға болмайды');
        return;
    }
    if (date.getDay() === 0) {
        alert('Жексенбі - демалыс күні');
        return;
    }
    
    selectedDate = date;
    selectedTime = null;
    
    if (date.getMonth() !== currentMonthIndex || date.getFullYear() !== currentYear) {
        currentMonthIndex = date.getMonth();
        currentYear = date.getFullYear();
    }
    renderCalendar();
    renderTimeSlots();
}

// Айды өзгерту
function prevMonth() {
    if (currentMonthIndex === 0) {
        currentMonthIndex = 11;
        currentYear--;
    } else {
        currentMonthIndex--;
    }
    renderCalendar();
}

function nextMonth() {
    if (currentMonthIndex === 11) {
        currentMonthIndex = 0;
        currentYear++;
    } else {
        currentMonthIndex++;
    }
    renderCalendar();
}

// Уақыт слоттарын көрсету
function renderTimeSlots() {
    const container = document.getElementById('timeSlots');
    if (!container) return;
    
    if (!selectedDate) {
        container.innerHTML = '<div class="text-muted">Алдымен күнді таңдаңыз</div>';
        return;
    }
    
    const dayOfWeek = selectedDate.getDay();
    let timeSlots = [];
    
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
    } else if (dayOfWeek === 6) {
        timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
    }
    
    const now = new Date();
    const isToday = selectedDate.toDateString() === today.toDateString();
    
    container.innerHTML = `
        <div class="time-slots-grid">
            ${timeSlots.map(time => {
                const [hours] = time.split(':');
                const isPast = isToday && parseInt(hours) < now.getHours();
                const isSelected = selectedTime === time;
                
                return `
                    <button class="time-slot ${isSelected ? 'selected' : ''} ${isPast ? 'disabled' : ''}" 
                            onclick="selectTime('${time}')"
                            ${isPast ? 'disabled' : ''}>
                        ${time}
                    </button>
                `;
            }).join('')}
        </div>
    `;
}

// Уақытты таңдау
function selectTime(time) {
    selectedTime = time;
    renderTimeSlots();
    
    const bookBtn = document.getElementById('confirmBookingBtn');
    if (bookBtn) {
        bookBtn.disabled = false;
    }
}

// WhatsApp хабарлама жіберу
function sendWhatsAppMessage(user, doctor, date, time) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('kk-KZ', options);
    
    const adminMessage = `🏥 ЖАҢА ҚАБЫЛДАУ

Науқас: ${user.name}
Телефон: ${user.phone}
Дәрігер: ${doctor.name}
Күні: ${formattedDate}
Уақыты: ${time}`;
    
    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(adminMessage)}`;
    window.open(whatsappUrl, '_blank');
}

// Қабылдауды растау
function confirmBooking() {
    if (!selectedDate) {
        alert('📅 Күнді таңдаңыз');
        return;
    }
    if (!selectedTime) {
        alert('⏰ Уақытты таңдаңыз');
        return;
    }
    
    const user = JSON.parse(localStorage.getItem('medbookUser'));
    if (!user) {
        alert('Жазылу үшін алдымен тіркеліңіз!');
        openAuthModal();
        return;
    }
    
    const doctor = JSON.parse(localStorage.getItem('currentDoctor'));
    if (doctor) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = selectedDate.toLocaleDateString('kk-KZ', options);
        
        const appointments = user.appointments || [];
        appointments.push({
            doctorName: doctor.name,
            doctorId: doctor.id,
            spec: doctor.spec,
            date: formattedDate,
            time: selectedTime,
            dateRaw: selectedDate.toISOString(),
            bookedAt: new Date().toISOString()
        });
        user.appointments = appointments;
        localStorage.setItem('medbookUser', JSON.stringify(user));
        
        const bookingModal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
        if (bookingModal) bookingModal.hide();
        
        sendWhatsAppMessage(user, doctor, selectedDate, selectedTime);
        
        alert(`✅ Сіз ${doctor.name} дәрігеріне сәтті жазылдыңыз!\n\n📅 Күні: ${formattedDate}\n⏰ Уақыты: ${selectedTime}`);
        
        selectedDate = null;
        selectedTime = null;
        renderCalendar();
        renderTimeSlots();
        
        const bookBtn = document.getElementById('confirmBookingBtn');
        if (bookBtn) bookBtn.disabled = true;
    }
}

// Бет жүктелгенде
document.addEventListener('DOMContentLoaded', function() {
    console.log('booking.js жүктелді');
    renderCalendar();
    
    // Дәрігер атын көрсету
    const doctor = JSON.parse(localStorage.getItem('currentDoctor'));
    const doctorNameSpan = document.getElementById('selectedDoctorName');
    if (doctorNameSpan && doctor) {
        doctorNameSpan.innerHTML = `<i class="fas fa-user-md"></i> ${doctor.name} (${doctor.spec})`;
    }
});