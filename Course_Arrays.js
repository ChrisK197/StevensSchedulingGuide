const Required_Math= ["MA 121/MA 122", "MA 125/MA 126", "MA 222", "MA 331"]
const Required_CAL= ["CAL 103", "CAL 105", "HSS 371"]
const Required_map = new Map();
CS_map.set('CS 101', 1);
CS_map.set('CS 115', 1);
CS_map.set('CS 135', 2);
CS_map.set('CS 284', 2);
CS_map.set('CS 382', 3);
CS_map.set('CS 385', 3);
CS_map.set('CS 392', 4); 
CS_map.set('CS 496', 4);
CS_map.set('CS 334', 5);
CS_map.set('CS 396', 5);
const Gen_Bus_low= ["BT 200: Financial Accounting", "BT 221 Statistics", "BT 243 Macroeconomics", "BT 244 Microeconomics"]
const Gen_Bus_upp= ["BT 301 Strategy", "BT 350 Marketing", "BT 353 Project Management", "BT 370 Human Centered Design"]
const Gen_Sci_low= ["BIO 181 Biology and Biotechnology", "BIO 101 Introduction to Biology for Non-Science and Non-Engineering majors", "PEP 151 Introduction to Astronomy", "PEP 152 Introduction to Astrobiology"]
const Gen_Sci_upp= ["CH 325 Physical Chemistry", "CH 370 Principles of Polymer Chemistry", "PEP 320 Analytical Mechanics", "PEP 345 Modeling and Simulation"]
const Gen_Eng_low= ["CE 240 Introduction to Geosciences", "CHE 226 Chemical Engineering Thermodynamics", "EE 250 Mathematics for Electrical Engineers"]
const Gen_Eng_upp= ["CE 345 Modeling and Simulation", "CE 410 Transportation Engineering Design", "CHE 421 Energy Conversion"]
const Gen_Hum_low= ["HAR 144 Introduction to Photography", "HAR 260 Game Design 1", "HHS 125 U.S. History to 1865", "HHS 126 U.S. History since 1865", "HLI 116 Analysis of Literary Forms", "HLI 227 Introduction to Poetry Writing", "HMU 192 Music Appreciation I", "HMU 201 Music Theory I", "HQSS 141 Introduction to Sociology", "HQSS 175 Introduction to Psychology"]
const Gen_Hum_upper= ["HAR 345 Typography", "HAR 380 Media Culture and Theory", 
"HHS 310 Social History of Science", "HHS 322 American Cultural History", "HLI 312 Modern Literature", "HLI 318 Caribbean Literature and Culture", "HQSS 365 Health Politics", "HQSS 370 Data Storytelling", "HSSC 357 Aging and Ageism", "HSSC 375 History of Psychology"]
const Tech_AI= ["CS 541 Artificial Intelligence", "CS 544 Health Informatics", "CS 557 Introduction to Natural Language Processing", "CS 559 Machine Learning: Fundamentals and Applications", "CS 582 Causal Inference", "CS 583 Deep Learning", "CS 584 Natural Language Processing"]
const Tech_App= ["CS 522 Mobile Systems and Applications", "CS 546 Web Programming", "CS 545 Human-Computer Interaction", "CS 566 Smartphone and Mobile Security", "CS 146 Introduction to Web Programming and Project Development", "CS 370 Creative Problem Solving and Team Programming", "CS 574 Object-Oriented Analysis and Design", "CS 537 Interactive Computer Graphics", "CS 526 Enterprise and Cloud Computing", "CS 548 Enterprise Software Architecture and Design", "CS 597 User Experience Design and Programming", "CS 609 Data Management and Exploration on the Web"]
const Tech_Syst= ["CS 522 Mobile Systems and Applications", "CS 546 Web Programming", "CS 545 Human-Computer Interaction", "CS 566 Smartphone and Mobile Security", "CS 146 Introduction to Web Programming and Project Development", "CS 370 Creative Problem Solving and Team Programming", "CS 574 Object-Oriented Analysis and Design", "CS 537 Interactive Computer Graphics", "CS 526 Enterprise and Cloud Computing", "CS 548 Enterprise Software Architecture and Design", 
"CS 597 User Experience Design and Programming ", "CS 609 Data Management and Exploration on the Web"]
const Tech_Theory= ["CS 442 Database Management Systems ", "CS 503 Discrete Mathematics for Cryptography", "CS 579 Foundations of Cryptography", "CS 643 Formal Verification of Software", "CS 601 Algorithmic Complexity"]
const Tech_Security= ["CS 503 Discrete Mathematics for Cryptography", "CS 696 Database Security"]
const Hum_Social_low= ["HSSC 121 Introduction to Urban Studies", "HSSC 131 Introduction to Anthropology",]
const Hum_Social_upp= ["HSSC 321 Modern Urban Policy", "HSSC 324 Comparative Ethnic Culture", "HSSC 330 Development Psychology", "HSSC 331 Biological Psychology", "HSSC 357 Aging and Ageism", "HSSC 366 Political Theory", "HSSC 375 History of Psychology", "HSSC 376 Theories of Personality", "HSSC 379 International Politics", "HSSC 401 Seminar in Leadership Series", "HSSC 477 Psychology of Religion", "HSSC 478 Psychology of Gender"]
const Hum_Lit_low= ["HLI 105 Special Topics in Literature", "HLI 113 Western Literature: Classical Literature", "HLI 114 Western Literature: Classical Literature", "HLI  115 The English Language: Language of Ideas", "HLI 116 Analysis of Literary Forms", "HLI 117 Colonial and Romantic American Literature", "HLI 201 Introduction to Theater", "HLI 220 Images of Science in Literature", "HLI 221 Introduction to Cinema", "HLI 221 Introduction to Cinema", "HLI 223 Introduction to Fiction Writing", "HLI 225 Introduction to Screenwriting", "HLI 227 Introduction to Poetry Writing", "HLI 229 Nature Writing: Identity and Place"]
const Hum_Lit_Upp= ["HLI 302 African-American Cinema", "HLI 305 Director as Auteur", "HLI 307 Afrofuturism", "HLI 312 Modern Literature", "HLI 313 Wordsworth and English Romanticism", "HLI 314 19th Century English Literature: Victorians", "HLI 316 Science Fiction", "HLI 318 Caribbean Literature and Culture", "HLI 319 Ethnicity and Literature", "HLI 321 Literature, Science, and Technology", "HLI 330 Classical Mythology", "HLI 331 Shakespeare"]
const Hum_Quant_low= ["HQSS 127 Introduction to Political Science: American Government", "HQSS 141 Introduction to Sociology", "HQSS 175 Introduction to Psychology", "HQSS 280 Social Psychology"]
const Hum_Quant_Upp= ["HQSS 300 Data Analysis for Quantitative Social Science", "HQSS 317 Quantitative Social Science", "HQSS 333 Psychology of Prejudice", "HQSS 361 The U.S. Congress", "HQSS 363 Judicial Process", "HQSS 370 Data Storytelling", "HQSS 373 Social Choice Theory", "HQSS 402 Political Psychology and the Media", "HQSS 458 Sociology of Science and Technology"]
const Hum_SciTech_low= ["HST 120 Introduction to Science and Technology Studies", "HST 137 Introduction to Environmental Studies", "HST 140 Failure", "HST 160 Introduction to Science Communication", "HST 250 Medical Humanities"]
const Hum_SciTech_upp= ["HST 320 Science and Media", "HST 330 Environmental Communication", "HST 340 Global Public Health", "HST 355 Technology and Medicine", "HST 370 Biology and Society", "HST 385 Internet Protocols and Politics", "HST 401 Seminar in Science Writing", "HST 411 Nuclear Energy and Society", "HST 415 The Nuclear Era", "HST 450 The History of Stevens"]
const Hum_Phil_low= ["HPL 111 Philosophy I: Theories of Human Nature", "HPL 112 Science and Metaphysics",  "HPL 210 Eastern Philosophy"]
const Hum_Phil_upp= ["HPL 339 Ethics", "HPL 341 Philosophies of Good and Evil", "HPL 347 Theories of Knowledge and Reality", "HPL 350 Ancient and Medieval Philosophy", "HPL 367 Philosophy of Biology", "HPL 369 Science Religion", "HPL 371 Philosophy of Time", "HPL 442 Logic", "HPL 445 The History of Philosophy", "HPL 450 Global and International Ethics", "HPL 456 Ethics of Business and Technology", "HPL 460 Philosophy and Feminism", "HPL 464 Philosophy in Film"]
const Hum_Scimath_low= ["BIO 181 Biology and Biotechnology", "BIO 101 Introduction to Biology for Non-Science and Non-Engineering majors", "PEP 151 Introduction to Astronomy", "PEP 152 Introduction to Astrobiology", "MA 221 Differential Equations", "MA 225 Infinite Series", "MA 226 Multivariable Calculus II", "MA 232 Linear Algebra", "MA 236 Introduction Mathematical Logic"]
const Hum_Scimath_upp= ["CH 325 Physical Chemistry", "CH 370 Principles of Polymer Chemistry", "PEP 320 Analytical Mechanics", "PEP 345 Modeling and Simulation", "MA 336 Modern Algebra ", "MA 410 Differential Geometry"]
const Sci_phys= ["PEP 111 Mechanics", "PEP 112 Electricity and Magnetism"]
const Sci_chem= ["CH 115 General Chemistry I", "CH 116 General Chemistry II"]
const Sci_bio= ["BIO 101 Introduction to Biology for Non-Science and Non-Engineering Majors"]