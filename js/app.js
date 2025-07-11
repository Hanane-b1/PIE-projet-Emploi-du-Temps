// ISGI Schedule Application
class ISGIScheduleApp {
    constructor() {
        this.currentProgram = null;
        this.currentClass = null;
        this.currentYear = null;
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.showScreen('program-selection');
    }

    bindEvents() {
        // Program selection
        document.querySelectorAll('.program-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const program = e.currentTarget.dataset.program;
                this.selectProgram(program);
            });
        });

        // Back to programs
        document.getElementById('back-to-programs').addEventListener('click', () => {
            this.showScreen('program-selection');
        });

        // Back to classes
        document.getElementById('back-to-classes').addEventListener('click', () => {
            this.showScreen('class-selection');
        });

        // Class selection
        document.querySelectorAll('.btn-class').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const classNumber = e.target.dataset.class;
                const year = parseInt(e.target.dataset.year);
                this.selectClass(classNumber, year);
            });
        });
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    selectProgram(programKey) {
        this.currentProgram = programKey;
        const program = scheduleData.programs[programKey];
        
        // Update program display
        document.getElementById('program-icon').className = program.icon;
        document.getElementById('program-name').textContent = program.name;
        
        // Update class button colors based on program
        this.updateClassButtonColors(program.color);
        
        this.showScreen('class-selection');
    }

    updateClassButtonColors(colorScheme) {
        const colorClasses = {
            slate: 'linear-gradient(135deg, #475569, #334155)',
            teal: 'linear-gradient(135deg, #0d9488, #0f766e)',
            cyan: 'linear-gradient(135deg, #0891b2, #0e7490)'
        };

        document.querySelectorAll('.btn-class').forEach(btn => {
            btn.style.background = colorClasses[colorScheme] || colorClasses.slate;
        });
    }

    selectClass(classNumber, year) {
        this.currentClass = classNumber;
        this.currentYear = year;
        
        const scheduleKey = `${this.currentProgram}_${classNumber}`;
        const schedule = scheduleData.schedules[scheduleKey];
        
        if (schedule) {
            this.displaySchedule(schedule);
        } else {
            console.error('Schedule not found for:', scheduleKey);
        }
    }

    displaySchedule(schedule) {
        const program = scheduleData.programs[this.currentProgram];
        
        // Update header
        document.getElementById('schedule-title').textContent = `Emploi du Temps - Classe ${this.currentClass}`;
        document.getElementById('schedule-program').textContent = program.name;
        
        // Generate schedule table
        this.generateScheduleTable(schedule.schedule);
        
        this.showScreen('schedule-view');
    }

    generateScheduleTable(weeklySchedule) {
        const tbody = document.getElementById('schedule-body');
        tbody.innerHTML = '';

        const timeSlots = [
            { key: '08:00-10:00', label: '08:00 - 10:00' },
            { key: '10:00-12:00', label: '10:00 - 12:00' },
            { key: '14:00-16:00', label: '14:00 - 16:00' },
            { key: '16:00-18:00', label: '16:00 - 18:00' }
        ];

        const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        const dayLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

        timeSlots.forEach((timeSlot, index) => {
            const row = document.createElement('tr');
            
            // Time slot cell
            const timeCell = document.createElement('td');
            timeCell.className = 'time-slot';
            timeCell.textContent = timeSlot.label;
            row.appendChild(timeCell);

            // Day cells
            days.forEach(day => {
                const dayCell = document.createElement('td');
                const classInfo = weeklySchedule[day][timeSlot.key];

                if (classInfo) {
                    dayCell.innerHTML = `
                        <div class="class-info">
                            <div class="module">${classInfo.module}</div>
                            <div class="instructor">
                                <i class="fas fa-user"></i>
                                ${classInfo.instructor}
                            </div>
                            <div class="room">
                                <i class="fas fa-map-marker-alt"></i>
                                ${classInfo.room}
                            </div>
                        </div>
                    `;
                } else {
                    dayCell.innerHTML = '<div class="empty-slot">Libre</div>';
                }

                row.appendChild(dayCell);
            });

            tbody.appendChild(row);
        });
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ISGIScheduleApp();
});

