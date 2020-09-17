import { AppImg } from "../../config/app-config";
export const EventSlug = "balqis-izhar-akad"
export const MessageRsvp = `<b>Thank you for joining us.</b>
<br />Please make sure to bring along your face mask.
<br />
<br />`;
export const MessageCheckIn = `<b>Thank you for checking in.</b>
<br />
<br />`;

export const Header = {
    eventName: "MAJLIS AKAD NIKAH",
    day: "JUMAAT",
    date: "30 OKTOBER 2020",
    dateHijr: "13 RABI'ULAWAL 1442H",
    pengantinLelaki: "Izhar",
    pengantinPerempuan: "Balqis",
    background: `url('${AppImg.get("cloud-blue-header.jpg")}')`,
}

export const Intro = {
    eventName: "Majlis Akad Nikah",
    dad: "HJ. ABU BAKAR BIN MAHABOT",
    mom: "HJH. ZUBAIDAH BINTI ABDUL HALIM",
    eventName2: "majlis akad nikah puteri",
    pengantinPerempuan: "Siti Balqis Binti<br>Muhammad Ghanisma",
    pengantinLelaki: "Izhar Bin Sapawi"
}

export const Detail = [
    {
        title: "TARIKH",
        icon: "calendar",
        data: [
            {
                label: "30 Okt 2020 (Sabtu)<br>13 Rabi'ulawal 1442H"
            }
        ]
    },
    {
        title: "ALAMAT",
        icon: "map-marker-alt",
        data: [
            {
                label: "Masjid At-Taqwa<br>Jalan Sultan Abdul Samad,<br>Taman Setia Jaya,<br>42700 Banting, Selangor"
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
                value: "12 PM"
            }
        ]
    },
    {
        title: "UNTUK DIHUBUNGI",
        icon: "phone",
        data: [
            {
                label: "Hjh Zubaidah (Ibu)",
                value: "013 320 1800"
            },
            {
                label: "Shahirah (Adik)",
                value: "019 995 6989"
            }
        ]
    }
];

export const Map = {
    locationTitle: "MASJID AT-TAQWA",
    locationDetail: "JALAN SULTAN ABDUL SAMAD,<br>TAMAN SETIA JAYA,<br>42700 BANTING, SELANGOR",
    googleMapUrl: "//www.google.com/maps/embed/v1/place?q=masjid%20at%20taqwa%20banting&zoom=15&key=AIzaSyARe_33egQYxDFVhHbmbk1JejbD48Yc9Eg",
    onClickGoogle: "http://maps.google.com/?daddr=Masjid+At-taqwa,+Banting",
    onClickWaze: "https://www.waze.com/ul?place=ChIJHRt4E5CkzTEROXTnheXMNvE&ll=2.81117000%2C101.49195800&navigate=yes",
}
