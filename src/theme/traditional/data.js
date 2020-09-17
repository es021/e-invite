import { AppImg } from "../../config/app-config";
export const EventSlug = "balqis-izhar-wedding";
export const MessageRsvp = `<b>Thank you for joining us !</b>
<br />Please make sure to bring along your face mask.
<br />
<br />`;
export const MessageCheckIn = `<b>Thank you for checking in !</b>
<br />Please wear your face mask and practice social distancing.
<br />Thank you for your cooperation.
<br />
<br />`;


export const AppContent = {
    background: `url('${AppImg.get("traditional-body.jpg")}')`,
    backgroundDoa: `url('${AppImg.get("traditional-doa.jpg")}')`,
}

export const Header = {
    eventName: "MAJLIS PERKAHWINAN",
    day: "SABTU",
    date: "31 OKTOBER 2020",
    dateHijr: "14 RABI'ULAWAL 1442H",
    pengantinLelaki: "Izhar",
    pengantinPerempuan: "Balqis",
    background: `url('${AppImg.get("traditional-header.jpg")}')`,
}

export const Intro = {
    eventName: "Majlis Perkahwinan",
    dad: "MUHAMMAD GHANISMA BIN HAJI ISMAIL",
    mom: "NANI ROSTIANI BINTI BASRI",
    eventName2: "majlis perkahwinan puteri",
    pengantinPerempuan: "Siti Balqis Binti<br>Muhammad Ghanisma",
    pengantinLelaki: "Izhar Bin Sapawi"
}

export const Doa = {
    SatukanHati: 'Ya Allah, berkatilah satukanlah hati kedua pasangan mempelai <b>Balqis & Izhar</b>'
        + ' dengan iman, keyakinan dan tawakal kepadaMu,' +
        ' panjangkan umur mereka, ' +
        ' lapangkanlah rezeki mereka, ' +
        ' dekatkanlah mereka menuju kebaikan, ' +
        ' jauhkanlah mereka dari keburukan, ' +
        ' kurniakanlah mereka zuriat yang soleh dan solehah. '
}

export const Detail = [
    {
        title: "TARIKH",
        icon: "calendar",
        data: [
            {
                label: "31 Okt 2020 (Sabtu)<br>14 Rabi'ulawal 1442H"
            }
        ]
    },
    {
        title: "ALAMAT",
        icon: "map-marker-alt",
        data: [
            {
                label: "NTC - Nube Training<br>Center and Hotel<br>KM 13.5 Jalan Pantai,<br>71050 Port Dickson,<br>Negeri Sembilan"
            }
        ]
    },
    {
        title: "ATUCARA MAJLIS",
        icon: "clock",
        data: [
            {
                label: "Jamuan Makan",
                value: "11 AM - 4 PM"
            },
            {
                label: "Ketibaan Pengantin",
                value: "12.15 PM"
            }
        ]
    },
    {
        title: "UNTUK DIHUBUNGI",
        icon: "phone",
        data: [
            {
                label: "En. Ghanisma (Bapa)",
                value: "014 363 4169"
            },
            {
                label: "Pn. Siti Mardziah<br>(Ibu Saudara)",
                value: "011 118 71213"
            }
        ]
    },
    {
        title: "TURUT MENJEMPUT",
        icon: "user",
        data: [
            {
                label: " Hjh. Zubaidah Binti Abdul Halim",
                value: ""
            },

        ]
    }
];
export const Map = {
    locationTitle: "NTC - NUBE TRAINING<br>CENTER AND HOTEL",
    locationDetail: "KM 13.5 JALAN PANTAI,<br>71050 PORT DICKSON,<br>NEGERI SEMBILAN",
    googleMapUrl: "//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.1869161156983!2d101.85711503810985!3d2.4447323148267106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf7a7ae2bec71%3A0x4462068101fa1669!2sNUBE%20Hotel%20at%20Port%20Dickson%20in%20Malaysia!5e0!3m2!1sen!2smy!4v1600172957483!5m2!1sen!2smy",
    onClickGoogle: "http://maps.google.com/?daddr=NUBE+Hotel+at+Port+Dickson+in+Malaysia,+Jalan+Pantai+Teluk+Kemang,+Taman+Orkid,+71050+Port+Dickson,+Negeri+Sembilan",
    onClickWaze: "https://www.waze.com/ul?place=ChIJcewrrqf3zTERaRb6AYEGYkQ&ll=2.44473230%2C101.85711500&navigate=yes",
}
