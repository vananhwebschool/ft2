import dataset1 from "../data/dataset1.json"
import {useState} from "react";
import styles from "./components/second-page-component.module.css";
import IntemperieButton from "./components/IntemperieButton.jsx";
import {CategoryScale, Chart as ChartJS, LinearScale, LineElement, PointElement, Tooltip,} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
);
export default function SecondPage() {
    const intemperiesClimatiquesList = ["Intempéries - Brouillard",
        "Intempéries - Forte chaleur",
        "Intempéries - Givre / Verglas",
        "Intempéries - Fortes pluies",
        "Intempéries - Vent fort",
        "Végétation",
        "Intempéries - Orage / Grêle",
        "Intempéries - Neige / congères"];

    const initialChartData = getChartDataFilteredForMultipleIntemperiesNew(intemperiesClimatiquesList);
    const [chartData, setChartData] = useState(initialChartData);
    const [activeButtons, setActiveButtons] = useState(["tous"]);
    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };


    function modifyActiveButtonsList(buttonId) {
        if (activeButtons === undefined) {
            setActiveButtons([buttonId]);
        } else {
            let modifiedList;
            if (activeButtons.includes(buttonId)) {
                modifiedList = activeButtons.filter(e => e !== buttonId);
            } else {
                let removedTous = activeButtons.filter(e => e !== "tous");
                modifiedList = [buttonId, ...removedTous];
            }
            setActiveButtons(modifiedList);
            console.log("modifiedList");
            console.log(modifiedList)
            setChartData(getChartDataFilteredForMultipleIntemperiesNew(modifiedList));
        }
    }

    function modifyActiveButtonsListWhenClickTous() {
        if (activeButtons === undefined) {
            setActiveButtons(["tous"]);
            setChartData(getChartDataFilteredForMultipleIntemperiesNew(intemperiesClimatiquesList));
        } else {
            let modifiedList;
            if (activeButtons.includes("tous") && activeButtons.length === 1) {
                modifiedList = ["tous"];
            } else {
                modifiedList = ["tous"];
                setChartData(getChartDataFilteredForMultipleIntemperiesNew(intemperiesClimatiquesList));
            }
            setActiveButtons(modifiedList);
        }
    }

    function getButtonStatus(buttonId) {
        if (activeButtons === undefined) {
            return false;
        } else {
            return activeButtons.includes(buttonId);
        }
    }

    return (
        <div className={styles.sectionButtonsAndChart}>
            <div>
                <div className={styles.firstIntemperieButtonSection}>
                    <IntemperieButton oneVector={false} name={"Brouillard"} percentage={"5%"}
                                      cssStyleName={"brouillard"}
                                      isActive={getButtonStatus(intemperiesClimatiquesList[0])}
                                      onShow={() => {
                                          modifyActiveButtonsList(intemperiesClimatiquesList[0]);
                                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M24 25.5C23.575 25.5 23.2188 25.3562 22.9313 25.0687C22.6438 24.7812 22.5 24.425 22.5 24C22.5 23.575 22.6438 23.2188 22.9313 22.9313C23.2188 22.6438 23.575 22.5 24 22.5C24.425 22.5 24.7812 22.6438 25.0687 22.9313C25.3562 23.2188 25.5 23.575 25.5 24C25.5 24.425 25.3562 24.7812 25.0687 25.0687C24.7812 25.3562 24.425 25.5 24 25.5ZM7.5 30C7.075 30 6.71875 29.8562 6.43125 29.5687C6.14375 29.2812 6 28.925 6 28.5C6 28.075 6.14375 27.7188 6.43125 27.4313C6.71875 27.1438 7.075 27 7.5 27C7.925 27 8.28125 27.1438 8.56875 27.4313C8.85625 27.7188 9 28.075 9 28.5C9 28.925 8.85625 29.2812 8.56875 29.5687C8.28125 29.8562 7.925 30 7.5 30ZM6 25.5C5.575 25.5 5.21875 25.3562 4.93125 25.0687C4.64375 24.7812 4.5 24.425 4.5 24C4.5 23.575 4.64375 23.2188 4.93125 22.9313C5.21875 22.6438 5.575 22.5 6 22.5H19.5C19.925 22.5 20.2812 22.6438 20.5688 22.9313C20.8563 23.2188 21 23.575 21 24C21 24.425 20.8563 24.7812 20.5688 25.0687C20.2812 25.3562 19.925 25.5 19.5 25.5H6ZM12 30C11.575 30 11.2188 29.8562 10.9312 29.5687C10.6438 29.2812 10.5 28.925 10.5 28.5C10.5 28.075 10.6438 27.7188 10.9312 27.4313C11.2188 27.1438 11.575 27 12 27H22.5C22.925 27 23.2812 27.1438 23.5688 27.4313C23.8563 27.7188 24 28.075 24 28.5C24 28.925 23.8563 29.2812 23.5688 29.5687C23.2812 29.8562 22.925 30 22.5 30H12ZM8.25 21C5.975 21 4.03125 20.1938 2.41875 18.5812C0.80625 16.9688 0 15.025 0 12.75C0 10.675 0.6875 8.8625 2.0625 7.3125C3.4375 5.7625 5.1375 4.85 7.1625 4.575C7.9625 3.15 9.05625 2.03125 10.4438 1.21875C11.8313 0.40625 13.35 0 15 0C17.25 0 19.2063 0.71875 20.8688 2.15625C22.5312 3.59375 23.5375 5.3875 23.8875 7.5375C25.6125 7.6875 27.0625 8.4 28.2375 9.675C29.4125 10.95 30 12.475 30 14.25C30 16.125 29.3438 17.7188 28.0312 19.0312C26.7188 20.3438 25.125 21 23.25 21H8.25ZM8.25 18H23.25C24.3 18 25.1875 17.6375 25.9125 16.9125C26.6375 16.1875 27 15.3 27 14.25C27 13.2 26.6375 12.3125 25.9125 11.5875C25.1875 10.8625 24.3 10.5 23.25 10.5H21V9C21 7.35 20.4125 5.9375 19.2375 4.7625C18.0625 3.5875 16.65 3 15 3C13.8 3 12.7063 3.325 11.7188 3.975C10.7312 4.625 9.9875 5.5 9.4875 6.6L9.1125 7.5H8.175C6.75 7.55 5.53125 8.08125 4.51875 9.09375C3.50625 10.1062 3 11.325 3 12.75C3 14.2 3.5125 15.4375 4.5375 16.4625C5.5625 17.4875 6.8 18 8.25 18Z"
                                fill="#BDBDBD"/>
                        </svg>
                    </IntemperieButton>
                    <IntemperieButton oneVector={true} name={"Forte chaleur"} percentage={"5%"}
                                      cssStyleName={"forteChaleur"}
                                      isActive={getButtonStatus(intemperiesClimatiquesList[1])}
                                      onShow={() => {
                                          modifyActiveButtonsList(intemperiesClimatiquesList[1]);
                                      }}/>
                    {/*<IntemperieButton oneVector={false} name={"Divers"} percentage={"9%"} cssStyleName={"divers"}>*/}
                    {/*    <img src={"src/assets/divers-button.svg"} alt={"divers"}/>*/}
                    {/*</IntemperieButton>*/}
                    <IntemperieButton oneVector={false} name={"Givre / verglas"} percentage={"1%"}
                                      cssStyleName={"verglas"}
                                      isActive={getButtonStatus(intemperiesClimatiquesList[2])}
                                      onShow={() => {
                                          modifyActiveButtonsList(intemperiesClimatiquesList[2]);
                                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M13.5 30V23.775L8.625 28.575L6.525 26.475L13.5 19.5V16.5H10.5L3.525 23.475L1.425 21.375L6.225 16.5H0V13.5H6.225L1.425 8.625L3.525 6.525L10.5 13.5H13.5V10.5L6.525 3.525L8.625 1.425L13.5 6.225V0H16.5V6.225L21.375 1.425L23.475 3.525L16.5 10.5V13.5H19.5L26.475 6.525L28.575 8.625L23.775 13.5H30V16.5H23.775L28.575 21.375L26.475 23.475L19.5 16.5H16.5V19.5L23.475 26.475L21.375 28.575L16.5 23.775V30H13.5Z"
                                fill="#398CD0"/>
                        </svg>
                    </IntemperieButton>
                    <IntemperieButton oneVector={false} name={"Forte pluie"} percentage={"1%"}
                                      cssStyleName={"fortePluie"}
                                      isActive={getButtonStatus(intemperiesClimatiquesList[3])}
                                      onShow={() => {
                                          modifyActiveButtonsList(intemperiesClimatiquesList[3]);
                                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M17.925 29.8224C17.55 30.0222 17.1688 30.0534 16.7812 29.916C16.3937 29.7787 16.1 29.5227 15.9 29.148L13.65 24.6522C13.45 24.2775 13.4188 23.8966 13.5563 23.5095C13.6938 23.1223 13.95 22.8289 14.325 22.629C14.7 22.4292 15.0813 22.398 15.4688 22.5354C15.8562 22.6728 16.15 22.9288 16.35 23.3034L18.6 27.7993C18.8 28.1739 18.8313 28.5548 18.6938 28.942C18.5563 29.3291 18.3 29.6226 17.925 29.8224ZM26.925 29.8224C26.55 30.0222 26.1688 30.0534 25.7812 29.916C25.3937 29.7787 25.1 29.5227 24.9 29.148L22.65 24.6522C22.45 24.2775 22.4188 23.8966 22.5563 23.5095C22.6938 23.1223 22.95 22.8289 23.325 22.629C23.7 22.4292 24.0812 22.398 24.4688 22.5354C24.8563 22.6728 25.15 22.9288 25.35 23.3034L27.6 27.7993C27.8 28.1739 27.8312 28.5548 27.6937 28.942C27.5562 29.3291 27.3 29.6226 26.925 29.8224ZM8.925 29.8224C8.55 30.0222 8.16875 30.0534 7.78125 29.916C7.39375 29.7787 7.1 29.5227 6.9 29.148L4.65 24.6522C4.45 24.2775 4.41875 23.8966 4.55625 23.5095C4.69375 23.1223 4.95 22.8289 5.325 22.629C5.7 22.4292 6.08125 22.398 6.46875 22.5354C6.85625 22.6728 7.15 22.9288 7.35 23.3034L9.6 27.7993C9.8 28.1739 9.83125 28.5548 9.69375 28.942C9.55625 29.3291 9.3 29.6226 8.925 29.8224ZM8.25 20.9806C5.975 20.9806 4.03125 20.1751 2.41875 18.5641C0.80625 16.9531 0 15.0111 0 12.7382C0 10.6651 0.6875 8.8543 2.0625 7.30574C3.4375 5.75717 5.1375 4.84551 7.1625 4.57077C7.9625 3.14709 9.05625 2.02937 10.4438 1.21762C11.8313 0.405874 13.35 0 15 0C17.25 0 19.2063 0.718085 20.8688 2.15426C22.5312 3.59043 23.5375 5.38252 23.8875 7.53053C25.6125 7.68039 27.0625 8.39223 28.2375 9.66605C29.4125 10.9399 30 12.4635 30 14.2368C30 16.1101 29.3438 17.7024 28.0312 19.0136C26.7188 20.3249 25.125 20.9806 23.25 20.9806H8.25ZM8.25 17.9833H23.25C24.3 17.9833 25.1875 17.6212 25.9125 16.8969C26.6375 16.1725 27 15.2858 27 14.2368C27 13.1878 26.6375 12.3011 25.9125 11.5768C25.1875 10.8525 24.3 10.4903 23.25 10.4903H21V8.99167C21 7.3432 20.4125 5.93201 19.2375 4.75809C18.0625 3.58418 16.65 2.99722 15 2.99722C13.8 2.99722 12.7063 3.32192 11.7188 3.97132C10.7312 4.62072 9.9875 5.49491 9.4875 6.59389L9.1125 7.49306H8.175C6.75 7.54302 5.53125 8.07377 4.51875 9.08534C3.50625 10.0969 3 11.3145 3 12.7382C3 14.1869 3.5125 15.4232 4.5375 16.4473C5.5625 17.4713 6.8 17.9833 8.25 17.9833Z"
                                fill="#0000FF"/>
                        </svg>
                    </IntemperieButton>
                    <IntemperieButton oneVector={false} name={"Vent fort"} percentage={"20%"} cssStyleName={"ventFort"}
                                      isActive={getButtonStatus(intemperiesClimatiquesList[4])}
                                      onShow={() => {
                                          modifyActiveButtonsList(intemperiesClimatiquesList[4]);
                                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M14.25 30C13 30 11.9375 29.4853 11.0625 28.4559C10.1875 27.4265 9.75 26.1765 9.75 24.7059H12.75C12.75 25.2059 12.8938 25.625 13.1813 25.9632C13.4688 26.3015 13.825 26.4706 14.25 26.4706C14.675 26.4706 15.0313 26.3015 15.3188 25.9632C15.6063 25.625 15.75 25.2059 15.75 24.7059C15.75 24.2059 15.6063 23.7868 15.3188 23.4485C15.0313 23.1103 14.675 22.9412 14.25 22.9412H0V19.4118H14.25C15.5 19.4118 16.5625 19.9265 17.4375 20.9559C18.3125 21.9853 18.75 23.2353 18.75 24.7059C18.75 26.1765 18.3125 27.4265 17.4375 28.4559C16.5625 29.4853 15.5 30 14.25 30ZM0 12.3529V8.82353H20.25C20.9 8.82353 21.4375 8.57353 21.8625 8.07353C22.2875 7.57353 22.5 6.94118 22.5 6.17647C22.5 5.41176 22.2875 4.77941 21.8625 4.27941C21.4375 3.77941 20.9 3.52941 20.25 3.52941C19.6 3.52941 19.0625 3.77941 18.6375 4.27941C18.2125 4.77941 18 5.41176 18 6.17647H15C15 4.44118 15.5063 2.97794 16.5188 1.78676C17.5312 0.595588 18.775 0 20.25 0C21.725 0 22.9688 0.595588 23.9813 1.78676C24.9938 2.97794 25.5 4.44118 25.5 6.17647C25.5 7.91176 24.9938 9.375 23.9813 10.5662C22.9688 11.7574 21.725 12.3529 20.25 12.3529H0ZM24.75 26.4706V22.9412C25.4 22.9412 25.9375 22.6912 26.3625 22.1912C26.7875 21.6912 27 21.0588 27 20.2941C27 19.5294 26.7875 18.8971 26.3625 18.3971C25.9375 17.8971 25.4 17.6471 24.75 17.6471H0V14.1176H24.75C26.225 14.1176 27.4688 14.7132 28.4813 15.9044C29.4938 17.0956 30 18.5588 30 20.2941C30 22.0294 29.4938 23.4926 28.4813 24.6838C27.4688 25.875 26.225 26.4706 24.75 26.4706Z"
                                fill="#69717F"/>
                        </svg>
                    </IntemperieButton>
                </div>
                <div className={styles.secondIntemperieButtonSection}>
                    <IntemperieButton oneVector={false} name={"Végétation"} percentage={"16%"}
                                      cssStyleName={"vegetation"}
                                      isActive={getButtonStatus(intemperiesClimatiquesList[5])}
                                      onShow={() => {
                                          modifyActiveButtonsList(intemperiesClimatiquesList[5]);
                                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M4.23643 25.7628C2.91254 24.4387 1.8755 22.9086 1.1253 21.1725C0.3751 19.4364 0 17.6415 0 15.7877C0 13.9339 0.353036 12.1022 1.05911 10.2926C1.76518 8.48291 2.91254 6.78361 4.5012 5.19466C5.53089 4.16478 6.80329 3.28203 8.3184 2.5464C9.83351 1.81077 11.6281 1.22963 13.7022 0.802965C15.7763 0.376302 18.1446 0.118832 20.807 0.0305568C23.4695 -0.0577184 26.4482 0.0452694 29.7432 0.33952C29.9786 3.45858 30.0522 6.32752 29.9639 8.94636C29.8756 11.5652 29.6329 13.9266 29.2358 16.0304C28.8386 18.1343 28.2796 19.9734 27.5588 21.5476C26.8381 23.1219 25.9481 24.4387 24.889 25.498C23.3298 27.0575 21.6749 28.1977 19.9244 28.9186C18.174 29.6395 16.3867 30 14.5627 30C12.6504 30 10.7823 29.6248 8.95828 28.8745C7.13426 28.1242 5.56031 27.0869 4.23643 25.7628ZM9.17892 25.0566C10.0321 25.5568 10.9073 25.9173 11.8046 26.138C12.7019 26.3586 13.6213 26.469 14.5627 26.469C15.916 26.469 17.2546 26.1968 18.5785 25.6524C19.9024 25.1081 21.1674 24.2327 22.3736 23.0263C22.9032 22.4966 23.4401 21.7536 23.9844 20.7973C24.5286 19.841 24.9993 18.5904 25.3965 17.0456C25.7937 15.5008 26.0952 13.6323 26.3012 11.4401C26.5071 9.24796 26.5365 6.63649 26.3894 3.6057C24.9478 3.54685 23.3224 3.52478 21.5131 3.5395C19.7038 3.55421 17.9018 3.69398 16.1072 3.9588C14.3127 4.22363 12.6063 4.65029 10.9882 5.2388C9.37015 5.8273 8.04627 6.63649 7.01658 7.66636C5.6927 8.99049 4.78069 10.2999 4.28056 11.5946C3.78042 12.8893 3.53036 14.1399 3.53036 15.3463C3.53036 17.0824 3.86133 18.6051 4.52327 19.9146C5.18521 21.224 5.76625 22.1435 6.26638 22.6732C7.50201 20.3191 9.1348 18.0608 11.1648 15.898C13.1947 13.7353 15.563 11.9624 18.2696 10.5794C16.1514 12.4332 14.3053 14.5298 12.7313 16.8691C11.1574 19.2084 9.97326 21.9375 9.17892 25.0566Z"
                                fill="#31AA35"/>
                        </svg>
                    </IntemperieButton>
                    <IntemperieButton oneVector={false} name={"Orage/Grêle"} percentage={"20%"} cssStyleName={"orage"}
                                      isActive={getButtonStatus(intemperiesClimatiquesList[6])}
                                      onShow={() => {
                                          modifyActiveButtonsList(intemperiesClimatiquesList[6]);
                                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M14.325 30L17.85 26.3523L14.85 24.9886L19.2 20.4545H23.175L19.65 24.1023L22.65 25.4659L18.3 30H14.325ZM5.325 30L8.85 26.3523L5.85 24.9886L10.2 20.4545H14.175L10.65 24.1023L13.65 25.4659L9.3 30H5.325ZM8.25 19.0909C5.975 19.0909 4.03125 18.358 2.41875 16.892C0.80625 15.4261 0 13.6591 0 11.5909C0 9.70455 0.6875 8.05682 2.0625 6.64773C3.4375 5.23864 5.1375 4.40909 7.1625 4.15909C7.9625 2.86364 9.05625 1.84659 10.4438 1.10795C11.8313 0.369318 13.35 0 15 0C17.25 0 19.2063 0.653409 20.8688 1.96023C22.5312 3.26705 23.5375 4.89773 23.8875 6.85227C25.6125 6.98864 27.0625 7.63636 28.2375 8.79545C29.4125 9.95455 30 11.3409 30 12.9545C30 14.6591 29.3438 16.108 28.0312 17.3011C26.7188 18.4943 25.125 19.0909 23.25 19.0909H8.25ZM8.25 16.3636H23.25C24.3 16.3636 25.1875 16.0341 25.9125 15.375C26.6375 14.7159 27 13.9091 27 12.9545C27 12 26.6375 11.1932 25.9125 10.5341C25.1875 9.875 24.3 9.54545 23.25 9.54545H21V8.18182C21 6.68182 20.4125 5.39773 19.2375 4.32955C18.0625 3.26136 16.65 2.72727 15 2.72727C13.8 2.72727 12.7063 3.02273 11.7188 3.61364C10.7312 4.20455 9.9875 5 9.4875 6L9.1125 6.81818H8.175C6.75 6.86364 5.53125 7.34659 4.51875 8.26705C3.50625 9.1875 3 10.2955 3 11.5909C3 12.9091 3.5125 14.0341 4.5375 14.9659C5.5625 15.8977 6.8 16.3636 8.25 16.3636Z"
                                fill="#FFB82B"/>
                        </svg>
                    </IntemperieButton>
                    <IntemperieButton oneVector={false} name={"Neige"} percentage={"8%"} cssStyleName={"neige"}
                                      isActive={getButtonStatus(intemperiesClimatiquesList[7])}
                                      onShow={() => {
                                          modifyActiveButtonsList(intemperiesClimatiquesList[7]);
                                      }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path
                                d="M6 24.2857C5.575 24.2857 5.21875 24.1488 4.93125 23.875C4.64375 23.6012 4.5 23.2619 4.5 22.8571C4.5 22.4524 4.64375 22.1131 4.93125 21.8393C5.21875 21.5655 5.575 21.4286 6 21.4286C6.425 21.4286 6.78125 21.5655 7.06875 21.8393C7.35625 22.1131 7.5 22.4524 7.5 22.8571C7.5 23.2619 7.35625 23.6012 7.06875 23.875C6.78125 24.1488 6.425 24.2857 6 24.2857ZM24 24.2857C23.575 24.2857 23.2188 24.1488 22.9313 23.875C22.6438 23.6012 22.5 23.2619 22.5 22.8571C22.5 22.4524 22.6438 22.1131 22.9313 21.8393C23.2188 21.5655 23.575 21.4286 24 21.4286C24.425 21.4286 24.7812 21.5655 25.0687 21.8393C25.3562 22.1131 25.5 22.4524 25.5 22.8571C25.5 23.2619 25.3562 23.6012 25.0687 23.875C24.7812 24.1488 24.425 24.2857 24 24.2857ZM10.5 30C10.075 30 9.71875 29.8631 9.43125 29.5893C9.14375 29.3155 9 28.9762 9 28.5714C9 28.1667 9.14375 27.8274 9.43125 27.5536C9.71875 27.2798 10.075 27.1429 10.5 27.1429C10.925 27.1429 11.2812 27.2798 11.5688 27.5536C11.8562 27.8274 12 28.1667 12 28.5714C12 28.9762 11.8562 29.3155 11.5688 29.5893C11.2812 29.8631 10.925 30 10.5 30ZM15 24.2857C14.575 24.2857 14.2188 24.1488 13.9313 23.875C13.6438 23.6012 13.5 23.2619 13.5 22.8571C13.5 22.4524 13.6438 22.1131 13.9313 21.8393C14.2188 21.5655 14.575 21.4286 15 21.4286C15.425 21.4286 15.7813 21.5655 16.0688 21.8393C16.3563 22.1131 16.5 22.4524 16.5 22.8571C16.5 23.2619 16.3563 23.6012 16.0688 23.875C15.7813 24.1488 15.425 24.2857 15 24.2857ZM19.5 30C19.075 30 18.7188 29.8631 18.4313 29.5893C18.1438 29.3155 18 28.9762 18 28.5714C18 28.1667 18.1438 27.8274 18.4313 27.5536C18.7188 27.2798 19.075 27.1429 19.5 27.1429C19.925 27.1429 20.2812 27.2798 20.5688 27.5536C20.8563 27.8274 21 28.1667 21 28.5714C21 28.9762 20.8563 29.3155 20.5688 29.5893C20.2812 29.8631 19.925 30 19.5 30ZM8.25 20C5.975 20 4.03125 19.2321 2.41875 17.6964C0.80625 16.1607 0 14.3095 0 12.1429C0 10.1667 0.6875 8.44048 2.0625 6.96429C3.4375 5.4881 5.1375 4.61905 7.1625 4.35714C7.9625 3 9.05625 1.93452 10.4438 1.16071C11.8313 0.386905 13.35 0 15 0C17.25 0 19.2063 0.684524 20.8688 2.05357C22.5313 3.42262 23.5375 5.13095 23.8875 7.17857C25.6125 7.32143 27.0625 8 28.2375 9.21429C29.4125 10.4286 30 11.881 30 13.5714C30 15.3571 29.3438 16.875 28.0312 18.125C26.7188 19.375 25.125 20 23.25 20H8.25ZM8.25 17.1429H23.25C24.3 17.1429 25.1875 16.7976 25.9125 16.1071C26.6375 15.4167 27 14.5714 27 13.5714C27 12.5714 26.6375 11.7262 25.9125 11.0357C25.1875 10.3452 24.3 10 23.25 10H21V8.57143C21 7 20.4125 5.65476 19.2375 4.53571C18.0625 3.41667 16.65 2.85714 15 2.85714C13.8 2.85714 12.7063 3.16667 11.7188 3.78571C10.7312 4.40476 9.9875 5.2381 9.4875 6.28571L9.1125 7.14286H8.175C6.75 7.19048 5.53125 7.69643 4.51875 8.66071C3.50625 9.625 3 10.7857 3 12.1429C3 13.5238 3.5125 14.7024 4.5375 15.6786C5.5625 16.6548 6.8 17.1429 8.25 17.1429Z"
                                fill="#A4D8EB"/>
                        </svg>
                    </IntemperieButton>
                    <IntemperieButton oneVector={false} name={"Tous sélectionner"} percentage={"100%"}
                                      cssStyleName={"tous"}
                                      isActive={getButtonStatus("tous")}
                                      onShow={() => {
                                          modifyActiveButtonsListWhenClickTous();
                                      }}>
                    </IntemperieButton>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", height: "40rem"}}>
                <Line options={options} data={chartData}/>
            </div>
        </div>

    )
}

// Get all incidents record of axe Sud Est > Paris Grenoble OD
function getDataFilteredAxeSudEstParisGrenobleOD() {
    return dataset1.filter((e => e.Axe === "Axe Sud Est"))
        .filter(e => e.OD === "Grenoble BV - Paris-Gare-de-Lyon BV" || e.OD === "Paris-Gare-de-Lyon BV - Grenoble BV");
}

function getDataFiltered() {

}

/* params: name of intemperie
output: {label: nom d'intemperie1,
    data: [nb d'incident each month eg 1,0,15,0,0,0],
    borderColor: color of intemperie,
    backgroundColor: color of intemperie
    }
 */
function getChartDataFilteredByIntemperieNew(intemperie) {
    const monthNbIncidentObj = getObjectContainingMonthsAndNbIncidents();
    const nbIncidentsAllMonths = [];
    const chartObj = {};
    try {
        if (!!dataset1 && Array.isArray(dataset1)) {
            const filtered = getDataFilteredAxeSudEstParisGrenobleOD()
                .filter(e => e.IO_Lib_defaillance === intemperie)
                .map(e => {
                    // with each incident record of a month, increase +1 the value of the respective month key in object holding record {"1": 0, "2":0,...,"12": 0}
                    ++monthNbIncidentObj[e.Mois_circulation]
                })

            for (let key in monthNbIncidentObj) {
                nbIncidentsAllMonths.push(monthNbIncidentObj[key]);
            }

            chartObj.label = intemperie;
            chartObj.data = nbIncidentsAllMonths;
            chartObj.borderColor = getSchemeColor(intemperie);
            chartObj.backgroundColor = chartObj.borderColor;
        }
        return chartObj;
    } catch (e) {
        throw ("Error while getting chart data filtered by intemperie");
    }
}

/* params: list of intemperies
output:      {
    labels: Array[months],
    datasets: Array[
    {label: nom d'intemperie1,
    data: [nb d'incident each month],
    borderColor: color of intemperie,
    backgroundColor: color of intemperie
    },
    {label: nom d'intemperie2,
    data: [nb d'incident each month],
    borderColor: color of intemperie,
    backgroundColor: color of intemperie
    }
    ]
    }
    */
function getChartDataFilteredForMultipleIntemperiesNew(paramList) {
    const datasetsArray = [];

    for (let i = 0; i < paramList.length; ++i) {
        const dataIntemperie = getChartDataFilteredByIntemperieNew(paramList[i]);
        datasetsArray.push(dataIntemperie);
    }

    const monthsArrayInNumber = Array.from("123456789");
    monthsArrayInNumber.push("10");
    const labels = monthsArrayInNumber
        .map(e => convertNumberToMonth(e));
    const result = {
        labels,
        datasets: datasetsArray
    }
    console.log("final data");
    console.log(result.valueOf());
    return result;
}

// output: object containing months and incident number of each month set to 0 {"1": 0, "2":0,...,"12": 0}
function getObjectContainingMonthsAndNbIncidents() {
    const months = Array.from("123456789");
    months.push("10");

    const monthNbIncidentObj = {};

    for (let i = 0; i < months.length; i++) {
        monthNbIncidentObj[months[i]] = 0;
    }
    return monthNbIncidentObj;
}

/* param: key as number (1-10)
ouput: month in French
 */
function convertNumberToMonth(key) {
    let month;
    switch (key) {
        case "1":
            month = "Janvier";
            break;
        case "2":
            month = "Février";
            break;
        case "3":
            month = "Mars";
            break;
        case "4":
            month = "Avril";
            break;
        case "5":
            month = "Mai";
            break;
        case "6":
            month = "Juin";
            break;
        case "7":
            month = "Juillet";
            break;
        case "8":
            month = "Août";
            break;
        case "9":
            month = "Septembre";
            break;
        case "10":
            month = "Octobre";
            break;
        default:
            month = "Unknown month"
    }

    return month;
}

function getSchemeColor(data) {
    const intemperiesClimatiquesList = ["Intempéries - Brouillard",
        "Intempéries - Forte chaleur",
        "Intempéries - Givre / Verglas",
        "Intempéries - Fortes pluies",
        "Intempéries - Vent fort",
        "Végétation",
        "Intempéries - Orage / Grêle",
        "Intempéries - Neige / congères"];

    const colorsList = [
        "#BDBDBD",
        "#F00",
        // "#FF5C00",
        "#398CD0",
        "#0000FF",
        "#69717F",
        "#31AA35",
        "#FFB82B",
        "#A4D8EB",
    ]
    return colorsList[intemperiesClimatiquesList.indexOf(data)];
}

// get distinct OD from original dataset
function getDistinctOD() {
    const odList = new Set();
    dataset1.filter((e => e.Axe === "Axe Sud Est"))
        .map(e => odList.add(e.OD));
    return [...odList];
}

// get one itinerary selected for each two-way trip
function generateItineraryList(originalList) {
    const uniqueRoutes = {};

    originalList.forEach(route => {
        const stations = route.split(" BV - ");
        const reversedRoute = stations.reverse().join(" BV - ");
        if (!uniqueRoutes[reversedRoute]) {
            uniqueRoutes[route] = true;
        }
    });

    const result = [];
    Object.keys(uniqueRoutes).map(route => result.push(route));
    return result;
}

