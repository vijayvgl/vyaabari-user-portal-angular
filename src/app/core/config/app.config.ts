import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Layout } from 'app/layout/layout.types';

// Types
export type Scheme = 'auto' | 'dark' | 'light';
export type Screens = { [key: string]: string };
export type Theme = 'theme-default' | string;
export type Themes = { id: string; name: string }[];

/**
 * AppConfig interface. Update this interface to strictly type your config
 * object.
 */
export interface AppConfig {
    layout: Layout;
    scheme: Scheme;
    screens: Screens;
    theme: Theme;
    themes: Themes;
}

/**
 * Default configuration for the entire application. This object is used by
 * TgssConfigService to set the default configuration.
 *
 * If you need to store global configuration for your app, you can use this
 * object to set the defaults. To access, update and reset the config, use
 * TgssConfigService and its methods.
 *
 * "Screens" are carried over to the BreakpointObserver for accessing them within
 * components, and they are required.
 *
 * "Themes" are required for Tailwind to generate themes.
 */
export const appConfig: AppConfig = {
    layout: 'classy',
    scheme: 'light',
    screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1440px'
    },
    theme: 'theme-default',
    themes: [
        {
            id: 'theme-default',
            name: 'Default'
        },
        {
            id: 'theme-brand',
            name: 'Brand'
        },
        {
            id: 'theme-teal',
            name: 'Teal'
        },
        {
            id: 'theme-rose',
            name: 'Rose'
        },
        {
            id: 'theme-purple',
            name: 'Purple'
        },
        {
            id: 'theme-amber',
            name: 'Amber'
        }
    ]
};
export const APP_VARIABLES = {
    payKey: 'rzp_test_XAwbRDSItDjjI0',
    userId: 'USERID',
    adminProfile: 'ADMINPROFILE',
    isAccountCreated: 'ACCOUNTCREATED',
    login: 'LOGIN',
    secureKey: "5TGB&YHN7UJM(IK<5TGB&YHN7UJM(IK<",
    secureIV: "!QAZ2WSX#EDC4RFV",
    table: {
        filtering: {
            pageSizeOptions: [10, 25, 50],
            customSizeOptions: [50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
            pageSizeOption: [50, 75, 100],

        },

    },
    intervalCount: 30000,
    fileSize250: 250000,
    fileSize2MB: 2000000,
    config: {
        lang: 'TGLANG',
        dateFormat: 'TGDATEFORMAT',
        dateRawFormat: 'TGDATERAW',
        dateSep: 'TGDATESEP',
        timeFormat: 'TGTIMEFORMAT',
        themeColor: 'TGTHEME',
        themeFont: 'TGFONT',

    },

    validators: {
        image: /(.*?)\.(jpg|jpeg|png|bmp|jfif)$/,
        integer: /^-?(0|[1-9]\d*)?$/,
        removebmp: /(.*?)\.(jpg|jpeg|png|jfif)$/,
        basicType: /(.*?)\.(jpg|jpeg|png|JPG|JPEG|PNG)$/,
        allimage: /(.*?)\.(jpg|jpeg|png|pdf|msword|docx|doc|jfif)$/,
        fileImage: /(.*?)\.(jpg|jpeg|png|pdf|msword|docx|doc)$/,
        emailPattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        allowOnlyPlusValue: /^[0-9]\d*$/,
        decimalTwoDigitOnly: /^\d{0,1000}(\.\d{1,2})?$/, // allows plus value and two digit
        decimal: /^\-?(\d+\.?\d*|\d*\.?\d+)$/, // allows + or - values 
        sixDigitInteger: /^[0-9]{6}$/,
        tenDigitInteger: /^[0-9]{10}$/,
        mobileNumber: /^[6,7,8,9]{1}[0-9]{9}$/,
        aadharNo: /^[0-9]{12}$/,
        alphaNumeric: /^[0-9a-zA-Z]+$/,
        lettersOnly: /^[A-Za-z]+$/, // ABCabcRtvd
        imageAndPdf: /(.*?)\.(jpg|jpeg|png|bmp|pdf)$/,
        removeWhitespace: /^[^ ][\w\W ]*[^ ]/,
        ifscCode: /^[A-Z]{4}[A-Z0-9]{7}$/,
        removeWSWLetter: /^\S$|^\S[\s\S]*\S$/,
        numberOnly: '^[0-9]*$',
        url: /^(https?:\/\/[a-zA-Z0-9_+%-]+(\.[a-zA-Z0-9+\_%-]+)*(:[0-9]{1,5})?(\/[a-zA-Z0-9+()?#~=&\._%-]*)*)?$/,
        date: /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/,
        url1: /^(https?:\/\/[a-zA-Z0-9_+%-]+(\.[a-zA-Z0-9+\_%-]+)*(:[0-9]{1,5})?(\/[a-zA-Z0-9+()?#~=&\._%-]*)*)?$/,
        name: /^([a-zA-Z0-9]+\s?)*$/,
        yTube: /^(?:https?:\/\/)(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/))((\w|-){11})(?:\S+)?$/, //Embeded link only
        numberGreaterthan0: /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/,
        EmailandMobile: /^(?:\d{10}|\w?.+@\w+\.\w{2,3})$/,
        noDecimal: /^[1-9]\d*$/,
        panNumber: /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/,
        aadhaar: /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/,
        gstNumber: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
        utrNumber: /^[a-zA-Z0-9]{11}((?!.*[.:_-]{2})[a-zA-Z0-9.:_-]{0,30}[a-zA-Z0-9])?$/,
        accountNo: /^[0-9]{9,18}$/,
        OTP: /\b\d{6}\b/,
        PASSWORD: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,21}$/,
        PASSWORD_NO: /^[A-Za-z0-9]{8,21}$/,
        SPL_CHECK:/^[A-Za-z0-9]*$/,
    }
}

export class WhiteSpaceValidator {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true }
        }
        return null;
    }
}


export const Indian_States = {
    "states": [
        {
            "state": "Andhra Pradesh",
            "districts": [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
                "Srikakulam",
                "Visakhapatnam",
                "Vizianagaram",
                "West Godavari",
                "YSR Kadapa"
            ]
        },
        {
            "state": "Arunachal Pradesh",
            "districts": [
                "Tawang",
                "West Kameng",
                "East Kameng",
                "Papum Pare",
                "Kurung Kumey",
                "Kra Daadi",
                "Lower Subansiri",
                "Upper Subansiri",
                "West Siang",
                "East Siang",
                "Siang",
                "Upper Siang",
                "Lower Siang",
                "Lower Dibang Valley",
                "Dibang Valley",
                "Anjaw",
                "Lohit",
                "Namsai",
                "Changlang",
                "Tirap",
                "Longding"
            ]
        },
        {
            "state": "Assam",
            "districts": [
                "Baksa",
                "Barpeta",
                "Biswanath",
                "Bongaigaon",
                "Cachar",
                "Charaideo",
                "Chirang",
                "Darrang",
                "Dhemaji",
                "Dhubri",
                "Dibrugarh",
                "Goalpara",
                "Golaghat",
                "Hailakandi",
                "Hojai",
                "Jorhat",
                "Kamrup Metropolitan",
                "Kamrup",
                "Karbi Anglong",
                "Karimganj",
                "Kokrajhar",
                "Lakhimpur",
                "Majuli",
                "Morigaon",
                "Nagaon",
                "Nalbari",
                "Dima Hasao",
                "Sivasagar",
                "Sonitpur",
                "South Salmara-Mankachar",
                "Tinsukia",
                "Udalguri",
                "West Karbi Anglong"
            ]
        },
        {
            "state": "Bihar",
            "districts": [
                "Araria",
                "Arwal",
                "Aurangabad",
                "Banka",
                "Begusarai",
                "Bhagalpur",
                "Bhojpur",
                "Buxar",
                "Darbhanga",
                "East Champaran (Motihari)",
                "Gaya",
                "Gopalganj",
                "Jamui",
                "Jehanabad",
                "Kaimur (Bhabua)",
                "Katihar",
                "Khagaria",
                "Kishanganj",
                "Lakhisarai",
                "Madhepura",
                "Madhubani",
                "Munger (Monghyr)",
                "Muzaffarpur",
                "Nalanda",
                "Nawada",
                "Patna",
                "Purnia (Purnea)",
                "Rohtas",
                "Saharsa",
                "Samastipur",
                "Saran",
                "Sheikhpura",
                "Sheohar",
                "Sitamarhi",
                "Siwan",
                "Supaul",
                "Vaishali",
                "West Champaran"
            ]
        },
        {
            "state": "Chandigarh (UT)",
            "districts": [
                "Chandigarh"
            ]
        },
        {
            "state": "Chhattisgarh",
            "districts": [
                "Balod",
                "Baloda Bazar",
                "Balrampur",
                "Bastar",
                "Bemetara",
                "Bijapur",
                "Bilaspur",
                "Dantewada (South Bastar)",
                "Dhamtari",
                "Durg",
                "Gariyaband",
                "Janjgir-Champa",
                "Jashpur",
                "Kabirdham (Kawardha)",
                "Kanker (North Bastar)",
                "Kondagaon",
                "Korba",
                "Korea (Koriya)",
                "Mahasamund",
                "Mungeli",
                "Narayanpur",
                "Raigarh",
                "Raipur",
                "Rajnandgaon",
                "Sukma",
                "Surajpur  ",
                "Surguja"
            ]
        },
        {
            "state": "Dadra and Nagar Haveli (UT)",
            "districts": [
                "Dadra & Nagar Haveli"
            ]
        },
        {
            "state": "Daman and Diu (UT)",
            "districts": [
                "Daman",
                "Diu"
            ]
        },
        {
            "state": "Delhi (NCT)",
            "districts": [
                "Central Delhi",
                "East Delhi",
                "New Delhi",
                "North Delhi",
                "North East  Delhi",
                "North West  Delhi",
                "Shahdara",
                "South Delhi",
                "South East Delhi",
                "South West  Delhi",
                "West Delhi"
            ]
        },
        {
            "state": "Goa",
            "districts": [
                "North Goa",
                "South Goa"
            ]
        },
        {
            "state": "Gujarat",
            "districts": [
                "Ahmedabad",
                "Amreli",
                "Anand",
                "Aravalli",
                "Banaskantha (Palanpur)",
                "Bharuch",
                "Bhavnagar",
                "Botad",
                "Chhota Udepur",
                "Dahod",
                "Dangs (Ahwa)",
                "Devbhoomi Dwarka",
                "Gandhinagar",
                "Gir Somnath",
                "Jamnagar",
                "Junagadh",
                "Kachchh",
                "Kheda (Nadiad)",
                "Mahisagar",
                "Mehsana",
                "Morbi",
                "Narmada (Rajpipla)",
                "Navsari",
                "Panchmahal (Godhra)",
                "Patan",
                "Porbandar",
                "Rajkot",
                "Sabarkantha (Himmatnagar)",
                "Surat",
                "Surendranagar",
                "Tapi (Vyara)",
                "Vadodara",
                "Valsad"
            ]
        },
        {
            "state": "Haryana",
            "districts": [
                "Ambala",
                "Bhiwani",
                "Charkhi Dadri",
                "Faridabad",
                "Fatehabad",
                "Gurgaon",
                "Hisar",
                "Jhajjar",
                "Jind",
                "Kaithal",
                "Karnal",
                "Kurukshetra",
                "Mahendragarh",
                "Mewat",
                "Palwal",
                "Panchkula",
                "Panipat",
                "Rewari",
                "Rohtak",
                "Sirsa",
                "Sonipat",
                "Yamunanagar"
            ]
        },
        {
            "state": "Himachal Pradesh",
            "districts": [
                "Bilaspur",
                "Chamba",
                "Hamirpur",
                "Kangra",
                "Kinnaur",
                "Kullu",
                "Lahaul &amp; Spiti",
                "Mandi",
                "Shimla",
                "Sirmaur (Sirmour)",
                "Solan",
                "Una"
            ]
        },
        {
            "state": "Jammu and Kashmir",
            "districts": [
                "Anantnag",
                "Bandipore",
                "Baramulla",
                "Budgam",
                "Doda",
                "Ganderbal",
                "Jammu",
                "Kargil",
                "Kathua",
                "Kishtwar",
                "Kulgam",
                "Kupwara",
                "Leh",
                "Poonch",
                "Pulwama",
                "Rajouri",
                "Ramban",
                "Reasi",
                "Samba",
                "Shopian",
                "Srinagar",
                "Udhampur"
            ]
        },
        {
            "state": "Jharkhand",
            "districts": [
                "Bokaro",
                "Chatra",
                "Deoghar",
                "Dhanbad",
                "Dumka",
                "East Singhbhum",
                "Garhwa",
                "Giridih",
                "Godda",
                "Gumla",
                "Hazaribag",
                "Jamtara",
                "Khunti",
                "Koderma",
                "Latehar",
                "Lohardaga",
                "Pakur",
                "Palamu",
                "Ramgarh",
                "Ranchi",
                "Sahibganj",
                "Seraikela-Kharsawan",
                "Simdega",
                "West Singhbhum"
            ]
        },
        {
            "state": "Karnataka",
            "districts": [
                "Bagalkot",
                "Ballari (Bellary)",
                "Belagavi (Belgaum)",
                "Bengaluru (Bangalore) Rural",
                "Bengaluru (Bangalore) Urban",
                "Bidar",
                "Chamarajanagar",
                "Chikballapur",
                "Chikkamagaluru (Chikmagalur)",
                "Chitradurga",
                "Dakshina Kannada",
                "Davangere",
                "Dharwad",
                "Gadag",
                "Hassan",
                "Haveri",
                "Kalaburagi (Gulbarga)",
                "Kodagu",
                "Kolar",
                "Koppal",
                "Mandya",
                "Mysuru (Mysore)",
                "Raichur",
                "Ramanagara",
                "Shivamogga (Shimoga)",
                "Tumakuru (Tumkur)",
                "Udupi",
                "Uttara Kannada (Karwar)",
                "Vijayapura (Bijapur)",
                "Yadgir"
            ]
        },
        {
            "state": "Kerala",
            "districts": [
                "Alappuzha",
                "Ernakulam",
                "Idukki",
                "Kannur",
                "Kasaragod",
                "Kollam",
                "Kottayam",
                "Kozhikode",
                "Malappuram",
                "Palakkad",
                "Pathanamthitta",
                "Thiruvananthapuram",
                "Thrissur",
                "Wayanad"
            ]
        },
        {
            "state": "Lakshadweep (UT)",
            "districts": [
                "Agatti",
                "Amini",
                "Androth",
                "Bithra",
                "Chethlath",
                "Kavaratti",
                "Kadmath",
                "Kalpeni",
                "Kilthan",
                "Minicoy"
            ]
        },
        {
            "state": "Madhya Pradesh",
            "districts": [
                "Agar Malwa",
                "Alirajpur",
                "Anuppur",
                "Ashoknagar",
                "Balaghat",
                "Barwani",
                "Betul",
                "Bhind",
                "Bhopal",
                "Burhanpur",
                "Chhatarpur",
                "Chhindwara",
                "Damoh",
                "Datia",
                "Dewas",
                "Dhar",
                "Dindori",
                "Guna",
                "Gwalior",
                "Harda",
                "Hoshangabad",
                "Indore",
                "Jabalpur",
                "Jhabua",
                "Katni",
                "Khandwa",
                "Khargone",
                "Mandla",
                "Mandsaur",
                "Morena",
                "Narsinghpur",
                "Neemuch",
                "Panna",
                "Raisen",
                "Rajgarh",
                "Ratlam",
                "Rewa",
                "Sagar",
                "Satna",
                "Sehore",
                "Seoni",
                "Shahdol",
                "Shajapur",
                "Sheopur",
                "Shivpuri",
                "Sidhi",
                "Singrauli",
                "Tikamgarh",
                "Ujjain",
                "Umaria",
                "Vidisha"
            ]
        },
        {
            "state": "Maharashtra",
            "districts": [
                "Ahmednagar",
                "Akola",
                "Amravati",
                "Aurangabad",
                "Beed",
                "Bhandara",
                "Buldhana",
                "Chandrapur",
                "Dhule",
                "Gadchiroli",
                "Gondia",
                "Hingoli",
                "Jalgaon",
                "Jalna",
                "Kolhapur",
                "Latur",
                "Mumbai City",
                "Mumbai Suburban",
                "Nagpur",
                "Nanded",
                "Nandurbar",
                "Nashik",
                "Osmanabad",
                "Palghar",
                "Parbhani",
                "Pune",
                "Raigad",
                "Ratnagiri",
                "Sangli",
                "Satara",
                "Sindhudurg",
                "Solapur",
                "Thane",
                "Wardha",
                "Washim",
                "Yavatmal"
            ]
        },
        {
            "state": "Manipur",
            "districts": [
                "Bishnupur",
                "Chandel",
                "Churachandpur",
                "Imphal East",
                "Imphal West",
                "Jiribam",
                "Kakching",
                "Kamjong",
                "Kangpokpi",
                "Noney",
                "Pherzawl",
                "Senapati",
                "Tamenglong",
                "Tengnoupal",
                "Thoubal",
                "Ukhrul"
            ]
        },
        {
            "state": "Meghalaya",
            "districts": [
                "East Garo Hills",
                "East Jaintia Hills",
                "East Khasi Hills",
                "North Garo Hills",
                "Ri Bhoi",
                "South Garo Hills",
                "South West Garo Hills ",
                "South West Khasi Hills",
                "West Garo Hills",
                "West Jaintia Hills",
                "West Khasi Hills"
            ]
        },
        {
            "state": "Mizoram",
            "districts": [
                "Aizawl",
                "Champhai",
                "Kolasib",
                "Lawngtlai",
                "Lunglei",
                "Mamit",
                "Saiha",
                "Serchhip"
            ]
        },
        {
            "state": "Nagaland",
            "districts": [
                "Dimapur",
                "Kiphire",
                "Kohima",
                "Longleng",
                "Mokokchung",
                "Mon",
                "Peren",
                "Phek",
                "Tuensang",
                "Wokha",
                "Zunheboto"
            ]
        },
        {
            "state": "Odisha",
            "districts": [
                "Angul",
                "Balangir",
                "Balasore",
                "Bargarh",
                "Bhadrak",
                "Boudh",
                "Cuttack",
                "Deogarh",
                "Dhenkanal",
                "Gajapati",
                "Ganjam",
                "Jagatsinghapur",
                "Jajpur",
                "Jharsuguda",
                "Kalahandi",
                "Kandhamal",
                "Kendrapara",
                "Kendujhar (Keonjhar)",
                "Khordha",
                "Koraput",
                "Malkangiri",
                "Mayurbhanj",
                "Nabarangpur",
                "Nayagarh",
                "Nuapada",
                "Puri",
                "Rayagada",
                "Sambalpur",
                "Sonepur",
                "Sundargarh"
            ]
        },
        {
            "state": "Puducherry (UT)",
            "districts": [
                "Karaikal",
                "Mahe",
                "Pondicherry",
                "Yanam"
            ]
        },
        {
            "state": "Punjab",
            "districts": [
                "Amritsar",
                "Barnala",
                "Bathinda",
                "Faridkot",
                "Fatehgarh Sahib",
                "Fazilka",
                "Ferozepur",
                "Gurdaspur",
                "Hoshiarpur",
                "Jalandhar",
                "Kapurthala",
                "Ludhiana",
                "Mansa",
                "Moga",
                "Muktsar",
                "Nawanshahr (Shahid Bhagat Singh Nagar)",
                "Pathankot",
                "Patiala",
                "Rupnagar",
                "Sahibzada Ajit Singh Nagar (Mohali)",
                "Sangrur",
                "Tarn Taran"
            ]
        },
        {
            "state": "Rajasthan",
            "districts": [
                "Ajmer",
                "Alwar",
                "Banswara",
                "Baran",
                "Barmer",
                "Bharatpur",
                "Bhilwara",
                "Bikaner",
                "Bundi",
                "Chittorgarh",
                "Churu",
                "Dausa",
                "Dholpur",
                "Dungarpur",
                "Hanumangarh",
                "Jaipur",
                "Jaisalmer",
                "Jalore",
                "Jhalawar",
                "Jhunjhunu",
                "Jodhpur",
                "Karauli",
                "Kota",
                "Nagaur",
                "Pali",
                "Pratapgarh",
                "Rajsamand",
                "Sawai Madhopur",
                "Sikar",
                "Sirohi",
                "Sri Ganganagar",
                "Tonk",
                "Udaipur"
            ]
        },
        {
            "state": "Sikkim",
            "districts": [
                "East Sikkim",
                "North Sikkim",
                "South Sikkim",
                "West Sikkim"
            ]
        },
        {
            "state": "Tamil Nadu",
            "districts": [
                "Ariyalur",
                "Chennai",
                "Coimbatore",
                "Cuddalore",
                "Dharmapuri",
                "Dindigul",
                "Erode",
                "Kanchipuram",
                "Kanyakumari",
                "Karur",
                "Krishnagiri",
                "Madurai",
                "Nagapattinam",
                "Namakkal",
                "Nilgiris",
                "Perambalur",
                "Pudukkottai",
                "Ramanathapuram",
                "Salem",
                "Sivaganga",
                "Thanjavur",
                "Theni",
                "Thoothukudi (Tuticorin)",
                "Tiruchirappalli",
                "Tirunelveli",
                "Tiruppur",
                "Tiruvallur",
                "Tiruvannamalai",
                "Tiruvarur",
                "Vellore",
                "Viluppuram",
                "Virudhunagar"
            ]
        },
        {
            "state": "Telangana",
            "districts": [
                "Adilabad",
                "Bhadradri Kothagudem",
                "Hyderabad",
                "Jagtial",
                "Jangaon",
                "Jayashankar Bhoopalpally",
                "Jogulamba Gadwal",
                "Kamareddy",
                "Karimnagar",
                "Khammam",
                "Komaram Bheem Asifabad",
                "Mahabubabad",
                "Mahabubnagar",
                "Mancherial",
                "Medak",
                "Medchal",
                "Nagarkurnool",
                "Nalgonda",
                "Nirmal",
                "Nizamabad",
                "Peddapalli",
                "Rajanna Sircilla",
                "Rangareddy",
                "Sangareddy",
                "Siddipet",
                "Suryapet",
                "Vikarabad",
                "Wanaparthy",
                "Warangal (Rural)",
                "Warangal (Urban)",
                "Yadadri Bhuvanagiri"
            ]
        },
        {
            "state": "Tripura",
            "districts": [
                "Dhalai",
                "Gomati",
                "Khowai",
                "North Tripura",
                "Sepahijala",
                "South Tripura",
                "Unakoti",
                "West Tripura"
            ]
        },
        {
            "state": "Uttarakhand",
            "districts": [
                "Almora",
                "Bageshwar",
                "Chamoli",
                "Champawat",
                "Dehradun",
                "Haridwar",
                "Nainital",
                "Pauri Garhwal",
                "Pithoragarh",
                "Rudraprayag",
                "Tehri Garhwal",
                "Udham Singh Nagar",
                "Uttarkashi"
            ]
        },
        {
            "state": "Uttar Pradesh",
            "districts": [
                "Agra",
                "Aligarh",
                "Allahabad",
                "Ambedkar Nagar",
                "Amethi (Chatrapati Sahuji Mahraj Nagar)",
                "Amroha (J.P. Nagar)",
                "Auraiya",
                "Azamgarh",
                "Baghpat",
                "Bahraich",
                "Ballia",
                "Balrampur",
                "Banda",
                "Barabanki",
                "Bareilly",
                "Basti",
                "Bhadohi",
                "Bijnor",
                "Budaun",
                "Bulandshahr",
                "Chandauli",
                "Chitrakoot",
                "Deoria",
                "Etah",
                "Etawah",
                "Faizabad",
                "Farrukhabad",
                "Fatehpur",
                "Firozabad",
                "Gautam Buddha Nagar",
                "Ghaziabad",
                "Ghazipur",
                "Gonda",
                "Gorakhpur",
                "Hamirpur",
                "Hapur (Panchsheel Nagar)",
                "Hardoi",
                "Hathras",
                "Jalaun",
                "Jaunpur",
                "Jhansi",
                "Kannauj",
                "Kanpur Dehat",
                "Kanpur Nagar",
                "Kanshiram Nagar (Kasganj)",
                "Kaushambi",
                "Kushinagar (Padrauna)",
                "Lakhimpur - Kheri",
                "Lalitpur",
                "Lucknow",
                "Maharajganj",
                "Mahoba",
                "Mainpuri",
                "Mathura",
                "Mau",
                "Meerut",
                "Mirzapur",
                "Moradabad",
                "Muzaffarnagar",
                "Pilibhit",
                "Pratapgarh",
                "RaeBareli",
                "Rampur",
                "Saharanpur",
                "Sambhal (Bhim Nagar)",
                "Sant Kabir Nagar",
                "Shahjahanpur",
                "Shamali (Prabuddh Nagar)",
                "Shravasti",
                "Siddharth Nagar",
                "Sitapur",
                "Sonbhadra",
                "Sultanpur",
                "Unnao",
                "Varanasi"
            ]
        },
        {
            "state": "West Bengal",
            "districts": [
                "Alipurduar",
                "Bankura",
                "Birbhum",
                "Burdwan (Bardhaman)",
                "Cooch Behar",
                "Dakshin Dinajpur (South Dinajpur)",
                "Darjeeling",
                "Hooghly",
                "Howrah",
                "Jalpaiguri",
                "Kalimpong",
                "Kolkata",
                "Malda",
                "Murshidabad",
                "Nadia",
                "North 24 Parganas",
                "Paschim Medinipur (West Medinipur)",
                "Purba Medinipur (East Medinipur)",
                "Purulia",
                "South 24 Parganas",
                "Uttar Dinajpur (North Dinajpur)"
            ]
        }
    ]
}