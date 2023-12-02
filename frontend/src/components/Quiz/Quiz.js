import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
//For connection to backend

// I want to make a question components where I can send the answers through json to the backend
// input is going to be integers and booleans
// going to need validation for the numbers

function Question(props) {
    // type of answer (integer, boolean)
    // question going to be a string
    // if integer, then validate whether it is valid
    // if boolean, then have a true and false button
    // pass state to the parent
    // each question will have an answer
    // you're alowed to submit the form

    var answer = props.answer;
    var setAnswer = props.setQuestion;
    //  [answer, setAnswer] = useState("unanswered");

    if (props.answerType === "integer") {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="col-6 py-3">
                    <div className="row">
                        <div className="card text-center">
                            <div className="card-body">
                                <div className="card-text py-3">
                                    <h3>{props.questionText}</h3>
                                    <br />
                                    <input
                                        type="number"
                                        value={answer}
                                        min={props.min}
                                        max={props.max}
                                        onChange={(e) => {
                                            setAnswer(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.answerType === "multi") {

        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                {/*added inline css styling, flex is basically any element, but it is much more customizable in terms of placement, so it was nice in this case to just be able to place it in the middle. JustifyContent is self-explanatory*/}
                <div className="col-6 pt-3 pb-3">
                    {/*Basically there are 12 columns on a webpage for react, so I just said that I want my card to take up 6 of these 12. That means there
        are 3 empty columns on each side since we justified it to the middle.*/}
                    <div className="row">
                        {/* added a row next */}
                        <div className="card text-center" style={{ backgroundImage: `` }}>
                            <div className="card-body">
                                <div className="card-text pt-3">
                                    <h3>{props.questionText}</h3>
                                    <br />
                                    <div className="row pb-3">
                                        <select multiple={true} onChange={(e) => setAnswer(e.target.value)}>
                                            <option value="football" selected>Football</option>
                                            <option value="baseball">Baseball</option>
                                            <option value="basketball">Basketball</option>
                                            <option value="americanfootball">American Football</option>
                                            <option value="hockey">Hockey</option>
                                            <option value="volleyball">Volleyball</option>
                                            <option value="tennis">Tennis</option>
                                            <option value="badminton">Badminton</option>
                                            <option value="cricket">Cricket</option>
                                            <option value="golf">Golf</option>
                                            <option value="dance">Dance</option>
                                            <option value="gymnastics">Gymnastics</option>
                                            <option value="swimming">Swimming</option>
                                            <option value="cycling">Cycling</option>
                                            <option value="track">Track and Field</option>
                                            <option value="martialarts">Martial Arts</option>
                                            <option value="weightlifting">Weightlifting</option>
                                            <option value="archery">Archery</option>
                                            <option value="sailing">Sailing</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.answerType === "select") {

        var country = (props.questionText === "What is your major?" ? "d-none" : "")
        var major = (props.questionText === "What is your major?" ? "" : "d-none")
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                {/*added inline css styling, flex is basically any element, but it is much more customizable in terms of placement, so it was nice in this case to just be able to place it in the middle. JustifyContent is self-explanatory*/}
                <div className="col-6 pt-3 pb-3">
                    {/*Basically there are 12 columns on a webpage for react, so I just said that I want my card to take up 6 of these 12. That means there
        are 3 empty columns on each side since we justified it to the middle.*/}
                    <div className="row">
                        {/* added a row next */}
                        <div className="card text-center" style={{ backgroundImage: `` }}>
                            <div className="card-body">
                                <div className="card-text pt-3">
                                    <h3>{props.questionText}</h3>
                                    <br />
                                    <div className="row pb-3">
                                        <select className={country} onChange={(e) => setAnswer(e.target.value)}>
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="American Samoa">American Samoa</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Anguilla">Anguilla</option>
                                            <option value="Antartica">Antarctica</option>
                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Aruba">Aruba</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bermuda">Bermuda</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Bouvet Island">Bouvet Island</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Cape Verde">Cape Verde</option>
                                            <option value="Cayman Islands">Cayman Islands</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Christmas Island">Christmas Island</option>
                                            <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo">Congo</option>
                                            <option value="Congo">Congo, the Democratic Republic of the</option>
                                            <option value="Cook Islands">Cook Islands</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                                            <option value="Croatia">Croatia (Hrvatska)</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="East Timor">East Timor</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Falkland Islands">Falkland Islands (Malvinas)</option>
                                            <option value="Faroe Islands">Faroe Islands</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="France Metropolitan">France, Metropolitan</option>
                                            <option value="French Guiana">French Guiana</option>
                                            <option value="French Polynesia">French Polynesia</option>
                                            <option value="French Southern Territories">French Southern Territories</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Gibraltar">Gibraltar</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Greenland">Greenland</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guadeloupe">Guadeloupe</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
                                            <option value="Holy See">Holy See (Vatican City State)</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="India">India</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Iran">Iran (Islamic Republic of)</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
                                            <option value="Korea">Korea, Republic of</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Lao">Lao People's Democratic Republic</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon" selected>Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Macau">Macau</option>
                                            <option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Martinique">Martinique</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mayotte">Mayotte</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Micronesia">Micronesia, Federated States of</option>
                                            <option value="Moldova">Moldova, Republic of</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montserrat">Montserrat</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Namibia">Namibia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherlands">Netherlands</option>
                                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                                            <option value="New Caledonia">New Caledonia</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="Niue">Niue</option>
                                            <option value="Norfolk Island">Norfolk Island</option>
                                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau">Palau</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Philippines">Philippines</option>
                                            <option value="Pitcairn">Pitcairn</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Reunion">Reunion</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russia">Russian Federation</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                            <option value="Saint LUCIA">Saint LUCIA</option>
                                            <option value="Saint Vincent">Saint Vincent and the Grenadines</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Slovakia">Slovakia (Slovak Republic)</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="South Georgia">South Georgia and the South Sandwich Islands</option>
                                            <option value="Span">Spain</option>
                                            <option value="SriLanka">Sri Lanka</option>
                                            <option value="St. Helena">St. Helena</option>
                                            <option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Svalbard">Svalbard and Jan Mayen Islands</option>
                                            <option value="Swaziland">Swaziland</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syria">Syrian Arab Republic</option>
                                            <option value="Taiwan">Taiwan, Province of China</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania">Tanzania, United Republic of</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tokelau">Tokelau</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Turks and Caicos">Turks and Caicos Islands</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="United States">United States</option>
                                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                            <option value="Uruguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Vietnam">Viet Nam</option>
                                            <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                            <option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
                                            <option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
                                            <option value="Western Sahara">Western Sahara</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Serbia">Serbia</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                        <select className={major} onChange={(e) => setAnswer(e.target.value)}>
                                            <option value="undeclared">Undeclared</option>
                                            <option value="business">Business</option>
                                            <option value="computer_science">Computer Science</option>
                                            <option value="engineering">Engineering</option>
                                            <option value="psychology">Psychology</option>
                                            <option value="biology">Biology</option>
                                            <option value="chemistry">Chemistry</option>
                                            <option value="physics">Physics</option>
                                            <option value="mathematics">Mathematics</option>
                                            <option value="political_science">Political Science</option>
                                            <option value="economics">Economics</option>
                                            <option value="communications">Communications</option>
                                            <option value="english">English</option>
                                            <option value="history">History</option>
                                            <option value="art">Art</option>
                                            <option value="music">Music</option>
                                            <option value="health_sciences">Health Sciences</option>
                                            <option value="nursing">Nursing</option>
                                            <option value="education">Education</option>
                                            <option value="environmental_science">Environmental Science</option>
                                            <option value="social_work">Social Work</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div style={{ display: "flex", justifyContent: "center" }}>
                {/*added inline css styling, flex is basically any element, but it is much more customizable in terms of placement, so it was nice in this case to just be able to place it in the middle. JustifyContent is self-explanatory*/}
                <div className="col-6 pt-3 pb-3">
                    {/*Basically there are 12 columns on a webpage for react, so I just said that I want my card to take up 6 of these 12. That means there
        are 3 empty columns on each side since we justified it to the middle.*/}
                    <div className="row">
                        {/* added a row next */}
                        <div className="card text-center" style={{ backgroundImage: `` }}>
                            <div className="card-body">
                                <div className="card-text pt-3">
                                    <h3>{props.questionText}</h3>
                                    <br />
                                    <div className="row pb-3">
                                        <div className="col-6">
                                            <div>
                                                <input
                                                    type="radio"
                                                    name={props.questionText}
                                                    value={true}
                                                    onChange={(e) => setAnswer(e.target.value)}
                                                />
                                                <br />
                                                <label>
                                                    {props.questionText === "What is your gender?"
                                                        ? "Male"
                                                        : "Yes  "}
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="pr-3">
                                                <input
                                                    type="radio"
                                                    name={props.questionText}
                                                    value={false}
                                                    onChange={(e) => setAnswer(e.target.value)}
                                                />
                                                <br />
                                                <label>
                                                    {props.questionText === "What is your gender?"
                                                        ? "Female"
                                                        : "No"}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function SubmitButton(props) {
    {/* var getSubmit = () => {
        if (props.checked()) {
            // send the answers to the backend
            // use props.answersArr
            // idk if this will actually work; need to make endpoint for /result
            fetch("http://localhost:5000/quiz", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: props.answersArr,
            })
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    props.setResult(response);
                    console.log(response);
                });
        } else console.log("answered"); 
    }; */}

    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);

    const handleQuizNavigation = () => {
        // Assuming you want to show the popup before navigating to the Dashboard
        setShowPopup(true);
        // If needed, you can perform other actions here before showing the popup
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        navigate(`/Dashboard/Dashboard`); // Redirect to the Dashboard on popup close
    };
      
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "0.6em",
                paddingBottom: "1.5em",
            }}
        >
            <button onClick={handleQuizNavigation}
                style={{
                    display: 'inline-block',
                    padding: '10px',
                    margin: '0 15px',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s ease',
                    backgroundColor: '#008000', // Dark green background color
                }}>
                Submit</button>
                {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Thank you! Your registration has been successful. Click OK to be redirected to the dashboard.</p>
                        <button onClick={handlePopupClose}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default function Quiz() {
    // Make questions with types
    //3 age
    //4 gender
    //9 chest pain
    //18 history of heart disease
    //33 resting heart rate; show how to find it out
    //Height and weight to calculate BMI

    const [answer1, setQuestionsAnswered1] = useState("unanswered");
    const [answer2, setQuestionsAnswered2] = useState("unanswered");
    const [answer3, setQuestionsAnswered3] = useState("unanswered");
    const [answer4, setQuestionsAnswered4] = useState("unanswered");
    const [answer5, setQuestionsAnswered5] = useState("unanswered");
    const [answer6, setQuestionsAnswered6] = useState("unanswered");
    const [result, setResult] = useState("unanswered");
    const questions = [
        {
            questionText: "What is your (international) age?",
            answerType: "integer",
            answer: answer1,
            min: 0,
            max: 120,
            func: setQuestionsAnswered1,
        },
        {
            questionText: "What is your gender?",
            answerType: "boolean",
            answer: answer2,
            func: setQuestionsAnswered2,
        },
        {
            questionText: "What is your major?",
            answerType: "select",
            answer: answer4,
            func: setQuestionsAnswered3,
        },
        {
            questionText: "Are you a foreign student?",
            answerType: "boolean",
            answer: answer4,
            func: setQuestionsAnswered4,
        },
        {
            questionText: "What country are you from?",
            answerType: "select",
            answer: answer5,
            func: setQuestionsAnswered5,
        },
        {
            questionText: "Please choose your favorite sports",
            answerType: "multi",
            answer: answer6,
            min: 0,
            max: 100,
            func: setQuestionsAnswered6,
        }
        //Height and weight to calculate BMI
    ];

    const answersArr = [
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
    ];
    var checked = () => {
        console.log("Answer 1: " + answer1)
        console.log("Answer 2: " + answer2)
        console.log("Answer 3: " + answer3)
        console.log("Answer 4: " + answer4)
        console.log("Answer 5: " + answer5)
        console.log("Answer 6: " + answer6)
        if (
            answer1 === "unanswered" ||
            answer2 === "unanswered" ||
            answer3 === "unanswered" ||
            answer4 === "unanswered" ||
            answer5 === "unanswered" ||
            answer6 === "unanswered"
        ) {
            console.log("RETURN FALSE IN CHECKED")
            return false;
        } else {
            console.log("RETURN TRUE IN CHECKED")
            return true;
        }
    };

    if (result === "unanswered") {
        return (
            <div>
                {questions.map((e) => {
                    return (
                        <Question
                            answer={e.answer}
                            setQuestion={e.func}
                            questionText={e.questionText}
                            answerType={e.answerType}
                            min={e.min}
                            max={e.max}
                        />
                    );
                })}
                <SubmitButton
                    result={result}
                    setResult={setResult}
                    checked={checked}
                    answersArr={answersArr}
                />
            </div>
        );
    } else {
        return (
            <div>
                <Result result={result} />
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <NavLink to="/dashboard">Return to Dashboard</NavLink>
                </div>
            </div>
        );
    }
}

function Result(props) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="col-6 pt-3 pb-3">
                <div className="row">
                    <div className="card text-center">
                        <div className="card-body">
                            <div className="card-text pt-2">
                                <h3>Thank you!</h3>
                                <h4>You have successfully sumbitted your preferences. Please return to the dashboard to see your updated recommendations.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Define a custom NavLink component
const NavLink = ({ to, children }) => {
    return (
        <Link
            to={to}
            style={{
                display: 'inline-block',
                padding: '10px',
                margin: '0 15px',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease',
                backgroundColor: '#008000', // Dark green background color
            }}
        >
            {children}
        </Link>
    );
}