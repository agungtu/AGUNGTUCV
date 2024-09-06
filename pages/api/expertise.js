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
    // {
    //     id: 4,
    //     title: 'Open Source Contributor',
    //     desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    // },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
