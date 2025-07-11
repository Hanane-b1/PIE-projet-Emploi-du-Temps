// Schedule data for ISGI
const scheduleData = {
    programs: {
        developpement_digital: {
            name: 'Développement Digital',
            icon: 'fas fa-code',
            color: 'slate'
        },
        gestion_entreprises: {
            name: 'Gestion des Entreprises',
            icon: 'fas fa-building',
            color: 'teal'
        },
        infrastructure: {
            name: 'Infrastructure',
            icon: 'fas fa-server',
            color: 'cyan'
        }
    },
    
    schedules: {
        // Développement Digital - First Year
        'developpement_digital_101': {
            program: 'developpement_digital',
            class: '101',
            year: 1,
            schedule: {
                monday: {
                    '08:00-10:00': { module: 'Programmation Web', instructor: 'M. Alami', room: 'Lab Info 1' },
                    '10:00-12:00': { module: 'Base de Données', instructor: 'Mme. Benali', room: 'Lab Info 2' },
                    '14:00-16:00': { module: 'Algorithmique', instructor: 'M. Chakir', room: 'Lab Info 3' },
                    '16:00-18:00': { module: 'HTML/CSS', instructor: 'Mme. Darif', room: 'Salle Dev 1' }
                },
                tuesday: {
                    '08:00-10:00': { module: 'JavaScript', instructor: 'M. El Fassi', room: 'Salle Dev 2' },
                    '10:00-12:00': { module: 'Python', instructor: 'Mme. Ghali', room: 'Lab Web' },
                    '14:00-16:00': { module: 'Réseaux', instructor: 'M. Hajji', room: 'Salle Projet' },
                    '16:00-18:00': { module: 'Anglais', instructor: 'Mme. Idrissi', room: 'Amphi Tech' }
                },
                wednesday: {
                    '08:00-10:00': { module: 'Programmation Web', instructor: 'Mme. Benali', room: 'Lab Info 1' },
                    '10:00-12:00': { module: 'Algorithmique', instructor: 'Mme. Darif', room: 'Lab Info 3' },
                    '14:00-16:00': { module: 'JavaScript', instructor: 'Mme. Ghali', room: 'Salle Dev 2' },
                    '16:00-18:00': { module: 'Réseaux', instructor: 'Mme. Idrissi', room: 'Salle Projet' }
                },
                thursday: {
                    '08:00-10:00': { module: 'Base de Données', instructor: 'M. Alami', room: 'Lab Info 2' },
                    '10:00-12:00': { module: 'HTML/CSS', instructor: 'M. Chakir', room: 'Salle Dev 1' },
                    '14:00-16:00': { module: 'Python', instructor: 'M. El Fassi', room: 'Lab Web' },
                    '16:00-18:00': { module: 'Anglais', instructor: 'M. Hajji', room: 'Amphi Tech' }
                },
                friday: {
                    '08:00-10:00': { module: 'Programmation Web', instructor: 'M. Chakir', room: 'Lab Info 1' },
                    '10:00-12:00': { module: 'Base de Données', instructor: 'M. El Fassi', room: 'Lab Info 2' },
                    '14:00-16:00': { module: 'Algorithmique', instructor: 'M. Hajji', room: 'Lab Info 3' },
                    '16:00-18:00': { module: 'HTML/CSS', instructor: 'M. Alami', room: 'Salle Dev 1' }
                },
                saturday: {
                    '08:00-10:00': { module: 'JavaScript', instructor: 'Mme. Benali', room: 'Salle Dev 2' },
                    '10:00-12:00': { module: 'Python', instructor: 'Mme. Darif', room: 'Lab Web' },
                    '14:00-16:00': null,
                    '16:00-18:00': null
                }
            }
        },

        // Gestion des Entreprises - First Year
        'gestion_entreprises_101': {
            program: 'gestion_entreprises',
            class: '101',
            year: 1,
            schedule: {
                monday: {
                    '08:00-10:00': { module: 'Comptabilité', instructor: 'M. Jamal', room: 'Salle Gestion 1' },
                    '10:00-12:00': { module: 'Marketing', instructor: 'Mme. Karimi', room: 'Salle Gestion 2' },
                    '14:00-16:00': { module: 'Management', instructor: 'M. Lahlou', room: 'Amphi Business' },
                    '16:00-18:00': { module: 'Économie', instructor: 'Mme. Mansouri', room: 'Salle Marketing' }
                },
                tuesday: {
                    '08:00-10:00': { module: 'Droit Commercial', instructor: 'M. Naciri', room: 'Salle Finance' },
                    '10:00-12:00': { module: 'Communication', instructor: 'Mme. Ouali', room: 'Salle RH' },
                    '14:00-16:00': { module: 'Statistiques', instructor: 'M. Qadiri', room: 'Bureau Conseil' },
                    '16:00-18:00': { module: 'Anglais', instructor: 'Mme. Rachidi', room: 'Salle Réunion' }
                },
                wednesday: {
                    '08:00-10:00': { module: 'Comptabilité', instructor: 'Mme. Karimi', room: 'Salle Gestion 1' },
                    '10:00-12:00': { module: 'Management', instructor: 'Mme. Mansouri', room: 'Amphi Business' },
                    '14:00-16:00': { module: 'Droit Commercial', instructor: 'Mme. Ouali', room: 'Salle Finance' },
                    '16:00-18:00': { module: 'Statistiques', instructor: 'Mme. Rachidi', room: 'Bureau Conseil' }
                },
                thursday: {
                    '08:00-10:00': { module: 'Marketing', instructor: 'M. Jamal', room: 'Salle Gestion 2' },
                    '10:00-12:00': { module: 'Économie', instructor: 'M. Lahlou', room: 'Salle Marketing' },
                    '14:00-16:00': { module: 'Communication', instructor: 'M. Naciri', room: 'Salle RH' },
                    '16:00-18:00': { module: 'Anglais', instructor: 'M. Qadiri', room: 'Salle Réunion' }
                },
                friday: {
                    '08:00-10:00': { module: 'Comptabilité', instructor: 'M. Lahlou', room: 'Salle Gestion 1' },
                    '10:00-12:00': { module: 'Marketing', instructor: 'M. Naciri', room: 'Salle Gestion 2' },
                    '14:00-16:00': { module: 'Management', instructor: 'M. Qadiri', room: 'Amphi Business' },
                    '16:00-18:00': { module: 'Économie', instructor: 'M. Jamal', room: 'Salle Marketing' }
                },
                saturday: {
                    '08:00-10:00': { module: 'Droit Commercial', instructor: 'Mme. Karimi', room: 'Salle Finance' },
                    '10:00-12:00': { module: 'Communication', instructor: 'Mme. Mansouri', room: 'Salle RH' },
                    '14:00-16:00': null,
                    '16:00-18:00': null
                }
            }
        },

        // Infrastructure - First Year
        'infrastructure_101': {
            program: 'infrastructure',
            class: '101',
            year: 1,
            schedule: {
                monday: {
                    '08:00-10:00': { module: 'Systèmes d\'Exploitation', instructor: 'M. Saadi', room: 'Lab Réseau' },
                    '10:00-12:00': { module: 'Réseaux', instructor: 'Mme. Tazi', room: 'Lab Système' },
                    '14:00-16:00': { module: 'Hardware', instructor: 'M. Usman', room: 'Salle Serveur' },
                    '16:00-18:00': { module: 'Sécurité IT', instructor: 'Mme. Wahbi', room: 'Lab Sécurité' }
                },
                tuesday: {
                    '08:00-10:00': { module: 'Virtualisation', instructor: 'M. Yousfi', room: 'Salle Cloud' },
                    '10:00-12:00': { module: 'Linux', instructor: 'Mme. Zahra', room: 'Lab Hardware' },
                    '14:00-16:00': { module: 'Windows Server', instructor: 'M. Amrani', room: 'Centre Données' },
                    '16:00-18:00': { module: 'Anglais', instructor: 'Mme. Berrada', room: 'Salle Formation' }
                },
                wednesday: {
                    '08:00-10:00': { module: 'Systèmes d\'Exploitation', instructor: 'Mme. Tazi', room: 'Lab Réseau' },
                    '10:00-12:00': { module: 'Hardware', instructor: 'Mme. Wahbi', room: 'Salle Serveur' },
                    '14:00-16:00': { module: 'Virtualisation', instructor: 'Mme. Zahra', room: 'Salle Cloud' },
                    '16:00-18:00': { module: 'Windows Server', instructor: 'Mme. Berrada', room: 'Centre Données' }
                },
                thursday: {
                    '08:00-10:00': { module: 'Réseaux', instructor: 'M. Saadi', room: 'Lab Système' },
                    '10:00-12:00': { module: 'Sécurité IT', instructor: 'M. Usman', room: 'Lab Sécurité' },
                    '14:00-16:00': { module: 'Linux', instructor: 'M. Yousfi', room: 'Lab Hardware' },
                    '16:00-18:00': { module: 'Anglais', instructor: 'M. Amrani', room: 'Salle Formation' }
                },
                friday: {
                    '08:00-10:00': { module: 'Systèmes d\'Exploitation', instructor: 'M. Usman', room: 'Lab Réseau' },
                    '10:00-12:00': { module: 'Réseaux', instructor: 'M. Yousfi', room: 'Lab Système' },
                    '14:00-16:00': { module: 'Hardware', instructor: 'M. Amrani', room: 'Salle Serveur' },
                    '16:00-18:00': { module: 'Sécurité IT', instructor: 'M. Saadi', room: 'Lab Sécurité' }
                },
                saturday: {
                    '08:00-10:00': { module: 'Virtualisation', instructor: 'Mme. Tazi', room: 'Salle Cloud' },
                    '10:00-12:00': { module: 'Linux', instructor: 'Mme. Wahbi', room: 'Lab Hardware' },
                    '14:00-16:00': null,
                    '16:00-18:00': null
                }
            }
        }
    }
};

// Generate schedules for all classes (101-106, 201-206) for each program
function generateAllSchedules() {
    const programs = ['developpement_digital', 'gestion_entreprises', 'infrastructure'];
    const baseSchedules = {
        'developpement_digital_101': scheduleData.schedules['developpement_digital_101'],
        'gestion_entreprises_101': scheduleData.schedules['gestion_entreprises_101'],
        'infrastructure_101': scheduleData.schedules['infrastructure_101']
    };

    programs.forEach(program => {
        const baseSchedule = baseSchedules[`${program}_101`];
        
        // Generate schedules for classes 102-106 (first year)
        for (let i = 102; i <= 106; i++) {
            const key = `${program}_${i}`;
            scheduleData.schedules[key] = {
                ...baseSchedule,
                class: i.toString(),
                year: 1
            };
        }
        
        // Generate schedules for classes 201-206 (second year)
        for (let i = 201; i <= 206; i++) {
            const key = `${program}_${i}`;
            scheduleData.schedules[key] = {
                ...baseSchedule,
                class: i.toString(),
                year: 2,
                schedule: generateAdvancedSchedule(program)
            };
        }
    });
}

function generateAdvancedSchedule(program) {
    const advancedSubjects = {
        developpement_digital: {
            subjects: ['React/Angular', 'Node.js', 'MongoDB', 'DevOps', 'Sécurité Web', 'Mobile Dev', 'Cloud Computing', 'Projet Final'],
            instructors: ['M. Alami', 'Mme. Benali', 'M. Chakir', 'Mme. Darif', 'M. El Fassi', 'Mme. Ghali', 'M. Hajji', 'Mme. Idrissi'],
            rooms: ['Lab Info 1', 'Lab Info 2', 'Lab Info 3', 'Salle Dev 1', 'Salle Dev 2', 'Lab Web', 'Salle Projet', 'Amphi Tech']
        },
        gestion_entreprises: {
            subjects: ['Finance Avancée', 'Stratégie', 'GRH', 'Audit', 'Contrôle de Gestion', 'E-Commerce', 'Leadership', 'Stage Pratique'],
            instructors: ['M. Jamal', 'Mme. Karimi', 'M. Lahlou', 'Mme. Mansouri', 'M. Naciri', 'Mme. Ouali', 'M. Qadiri', 'Mme. Rachidi'],
            rooms: ['Salle Gestion 1', 'Salle Gestion 2', 'Amphi Business', 'Salle Marketing', 'Salle Finance', 'Salle RH', 'Bureau Conseil', 'Salle Réunion']
        },
        infrastructure: {
            subjects: ['Cloud Infrastructure', 'Cybersécurité', 'Monitoring', 'Automation', 'Docker/K8s', 'Backup/Recovery', 'Projet Infrastructure', 'Certification'],
            instructors: ['M. Saadi', 'Mme. Tazi', 'M. Usman', 'Mme. Wahbi', 'M. Yousfi', 'Mme. Zahra', 'M. Amrani', 'Mme. Berrada'],
            rooms: ['Lab Réseau', 'Lab Système', 'Salle Serveur', 'Lab Sécurité', 'Salle Cloud', 'Lab Hardware', 'Centre Données', 'Salle Formation']
        }
    };

    const data = advancedSubjects[program];
    
    return {
        monday: {
            '08:00-10:00': { module: data.subjects[0], instructor: data.instructors[0], room: data.rooms[0] },
            '10:00-12:00': { module: data.subjects[1], instructor: data.instructors[1], room: data.rooms[1] },
            '14:00-16:00': { module: data.subjects[2], instructor: data.instructors[2], room: data.rooms[2] },
            '16:00-18:00': { module: data.subjects[3], instructor: data.instructors[3], room: data.rooms[3] }
        },
        tuesday: {
            '08:00-10:00': { module: data.subjects[4], instructor: data.instructors[4], room: data.rooms[4] },
            '10:00-12:00': { module: data.subjects[5], instructor: data.instructors[5], room: data.rooms[5] },
            '14:00-16:00': { module: data.subjects[6], instructor: data.instructors[6], room: data.rooms[6] },
            '16:00-18:00': { module: data.subjects[7], instructor: data.instructors[7], room: data.rooms[7] }
        },
        wednesday: {
            '08:00-10:00': { module: data.subjects[0], instructor: data.instructors[1], room: data.rooms[0] },
            '10:00-12:00': { module: data.subjects[2], instructor: data.instructors[3], room: data.rooms[2] },
            '14:00-16:00': { module: data.subjects[4], instructor: data.instructors[5], room: data.rooms[4] },
            '16:00-18:00': { module: data.subjects[6], instructor: data.instructors[7], room: data.rooms[6] }
        },
        thursday: {
            '08:00-10:00': { module: data.subjects[1], instructor: data.instructors[0], room: data.rooms[1] },
            '10:00-12:00': { module: data.subjects[3], instructor: data.instructors[2], room: data.rooms[3] },
            '14:00-16:00': { module: data.subjects[5], instructor: data.instructors[4], room: data.rooms[5] },
            '16:00-18:00': { module: data.subjects[7], instructor: data.instructors[6], room: data.rooms[7] }
        },
        friday: {
            '08:00-10:00': { module: data.subjects[0], instructor: data.instructors[2], room: data.rooms[0] },
            '10:00-12:00': { module: data.subjects[1], instructor: data.instructors[4], room: data.rooms[1] },
            '14:00-16:00': { module: data.subjects[2], instructor: data.instructors[6], room: data.rooms[2] },
            '16:00-18:00': { module: data.subjects[3], instructor: data.instructors[0], room: data.rooms[3] }
        },
        saturday: {
            '08:00-10:00': { module: data.subjects[4], instructor: data.instructors[1], room: data.rooms[4] },
            '10:00-12:00': { module: data.subjects[5], instructor: data.instructors[3], room: data.rooms[5] },
            '14:00-16:00': null,
            '16:00-18:00': null
        }
    };
}

// Initialize all schedules
generateAllSchedules();

