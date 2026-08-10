const expertise = [
    {
        id: 0,
        title: 'Front End Web Developer',
        desc: 'Seorang front-end web developer berspesialisasi dalam membuat elemen visual dan interaktif dari situs web dan aplikasi web yang digunakan oleh pengguna. Bekerja dengan teknologi seperti HTML, CSS, Tailwind dan JavaScript, serta sering menggunakan framework modern seperti React, Vue.js, Next.js, Jinja untuk membangun antarmuka yang responsif dan ramah pengguna.',
    },
    {
        id: 1,
        title: 'Jira',
        desc: "Sebagai developer, saya mahir dalam menggunakan Jira. Saya menggunakan Jira untuk mempermudah tugas manajemen proyek seperti penugasan tugas, penentuan prioritas, dan pelacakan kemajuan. ",
    },
    {
        id: 2,
        title: 'Designing (UI/UX)',
        desc: 'Saya sudah terbiasa bekerjasama dengan seorang UI/UX Designer. untuk memudahkan tampilan desain web saya bekerjasama dan mengimplementasikan desain bersama seorang UI/UX Designer.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub adalah platform pengembangan perangkat lunak berbasis web yang digunakan untuk version control dan collaboration. Di GitHub, developer dapat bekerja bersama-sama dalam sebuah proyek dengan menggunakan Git, sistem version control yang memungkinkan mereka untuk melacak perubahan dalam kode sumber.",
    },
      {
        id: 5,
        title: 'Lecturer',
        desc: "Sebagai dosen, saya mahir dalam mengajar dan memberikan bimbingan kepada mahasiswa. Saya menggunakan berbagai metode pengajaran untuk memastikan mahasiswa memahami konsep dengan baik.",
    },
    {
        
        id: 4,
        title: 'Microsoft Office Specialist',
        desc: "Saya sangat berpengalaman dalam menggunakan Microsoft Office. Saya menggunakan Microsoft Office untuk membuat dokumen, menyelesaikan tugas, dan membuat presentasi. saya dulu juga sudah pernah mengikuti pelatihan dan saya sudah mendapatkan sertifikat",
    },
      {
        
        id: 6,
        title: 'Sains Komputer',
        desc: "Saya memiliki pengetahuan yang kuat dalam sains komputer. Saya mampu menganalisis dan menyelesaikan masalah teknis dengan menggunakan prinsip-prinsip ilmiah dan metodologi yang tepat. saya dulu juga sudah pernah mengikuti pelatihan dan saya sudah mendapatkan sertifikat",
    },
     {
        
        id: 7,
        title: 'Project Manager',
        desc: "Saya memiliki pengalaman dalam manajemen proyek. Saya mampu mengkoordinasikan tim, merencanakan dan melacak kemajuan proyek, serta memastikan proyek selesai tepat waktu dan sesuai dengan kualitas yang diharapkan.",
    },
     {
        
        id: 8,
        title: 'Algorithm and Data Structure',
        desc: "Saya memiliki pemahaman yang kuat tentang algoritma dan struktur data. Saya mampu merancang dan mengimplementasikan algoritma yang efisien untuk memecahkan masalah, serta menggunakan struktur data yang tepat untuk menyimpan dan mengelola data dengan efektif.",
    },
     {
        
        id: 9,
        title: 'Business Digital',
        desc: "Bidang keilmuan yang mengintegrasikan konsep bisnis, manajemen, kewirausahaan, dan teknologi digital untuk menciptakan, mengembangkan, serta mengoptimalkan proses dan model bisnis yang inovatif dan berkelanjutan.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
