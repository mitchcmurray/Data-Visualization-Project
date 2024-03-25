// Contents - Healthcare Coverage By Race - Medicare
const medicareData = [
    {"Location":"Alabama","White":0.726,"Black":0.228,"Hispanic":0.012,"Asian\/Native Hawaiian and Pacific Islander":0.006,"American Indian\/Alaska Native":0.003,"Multiple Races":0.024},
    {"Location":"Alaska","White":0.721,"Black":0.023,"Hispanic":0.03,"Asian\/Native Hawaiian and Pacific Islander":0.058,"American Indian\/Alaska Native":0.105,"Multiple Races":0.062},
    {"Location":"Arizona","White":0.766,"Black":0.027,"Hispanic":0.139,"Asian\/Native Hawaiian and Pacific Islander":0.024,"American Indian\/Alaska Native":0.02,"Multiple Races":0.024},
    {"Location":"Arkansas","White":0.801,"Black":0.127,"Hispanic":0.023,"Asian\/Native Hawaiian and Pacific Islander":0.006,"American Indian\/Alaska Native":0.003,"Multiple Races":0.041},
    {"Location":"California","White":0.515,"Black":0.054,"Hispanic":0.236,"Asian\/Native Hawaiian and Pacific Islander":0.161,"American Indian\/Alaska Native":0.003,"Multiple Races":0.03},
    {"Location":"Colorado","White":0.796,"Black":0.029,"Hispanic":0.125,"Asian\/Native Hawaiian and Pacific Islander":0.022,"American Indian\/Alaska Native":0.004,"Multiple Races":0.025},
    {"Location":"Connecticut","White":0.795,"Black":0.066,"Hispanic":0.087,"Asian\/Native Hawaiian and Pacific Islander":0.024,"American Indian\/Alaska Native":0.0,"Multiple Races":0.027},
    {"Location":"Delaware","White":0.754,"Black":0.151,"Hispanic":0.037,"Asian\/Native Hawaiian and Pacific Islander":0.023,"American Indian\/Alaska Native":0.0,"Multiple Races":0.033},
    {"Location":"District of Columbia","White":0.305,"Black":0.569,"Hispanic":0.07,"Asian\/Native Hawaiian and Pacific Islander":0.025,"American Indian\/Alaska Native":0.0,"Multiple Races":0.031},
    {"Location":"Florida","White":0.697,"Black":0.095,"Hispanic":0.162,"Asian\/Native Hawaiian and Pacific Islander":0.019,"American Indian\/Alaska Native":0.001,"Multiple Races":0.025},
    {"Location":"Georgia","White":0.645,"Black":0.268,"Hispanic":0.033,"Asian\/Native Hawaiian and Pacific Islander":0.028,"American Indian\/Alaska Native":0.001,"Multiple Races":0.025},
    {"Location":"Hawaii","White":0.258,"Black":0.007,"Hispanic":0.038,"Asian\/Native Hawaiian and Pacific Islander":0.572,"American Indian\/Alaska Native":0.0,"Multiple Races":0.124},
    {"Location":"Idaho","White":0.902,"Black":0.0,"Hispanic":0.045,"Asian\/Native Hawaiian and Pacific Islander":0.009,"American Indian\/Alaska Native":0.006,"Multiple Races":0.037},
    {"Location":"Illinois","White":0.724,"Black":0.124,"Hispanic":0.084,"Asian\/Native Hawaiian and Pacific Islander":0.045,"American Indian\/Alaska Native":0.001,"Multiple Races":0.023},
    {"Location":"Indiana","White":0.863,"Black":0.071,"Hispanic":0.03,"Asian\/Native Hawaiian and Pacific Islander":0.01,"American Indian\/Alaska Native":0.001,"Multiple Races":0.025},
    {"Location":"Iowa","White":0.93,"Black":0.018,"Hispanic":0.017,"Asian\/Native Hawaiian and Pacific Islander":0.014,"American Indian\/Alaska Native":0.002,"Multiple Races":0.018},
    {"Location":"Kansas","White":0.87,"Black":0.045,"Hispanic":0.04,"Asian\/Native Hawaiian and Pacific Islander":0.014,"American Indian\/Alaska Native":0.004,"Multiple Races":0.027},
    {"Location":"Kentucky","White":0.899,"Black":0.059,"Hispanic":0.011,"Asian\/Native Hawaiian and Pacific Islander":0.006,"American Indian\/Alaska Native":0.0,"Multiple Races":0.025},
    {"Location":"Louisiana","White":0.66,"Black":0.271,"Hispanic":0.027,"Asian\/Native Hawaiian and Pacific Islander":0.012,"American Indian\/Alaska Native":0.004,"Multiple Races":0.027},
    {"Location":"Maine","White":0.946,"Black":0.0,"Hispanic":0.009,"Asian\/Native Hawaiian and Pacific Islander":0.0,"American Indian\/Alaska Native":0.002,"Multiple Races":0.035},
    {"Location":"Maryland","White":0.608,"Black":0.271,"Hispanic":0.041,"Asian\/Native Hawaiian and Pacific Islander":0.051,"American Indian\/Alaska Native":0.002,"Multiple Races":0.026},
    {"Location":"Massachusetts","White":0.819,"Black":0.045,"Hispanic":0.062,"Asian\/Native Hawaiian and Pacific Islander":0.043,"American Indian\/Alaska Native":0.0,"Multiple Races":0.03},
    {"Location":"Michigan","White":0.827,"Black":0.107,"Hispanic":0.022,"Asian\/Native Hawaiian and Pacific Islander":0.016,"American Indian\/Alaska Native":0.003,"Multiple Races":0.025},
    {"Location":"Minnesota","White":0.911,"Black":0.027,"Hispanic":0.013,"Asian\/Native Hawaiian and Pacific Islander":0.021,"American Indian\/Alaska Native":0.004,"Multiple Races":0.023},
    {"Location":"Mississippi","White":0.639,"Black":0.316,"Hispanic":0.01,"Asian\/Native Hawaiian and Pacific Islander":0.006,"American Indian\/Alaska Native":0.0,"Multiple Races":0.025},
    {"Location":"Missouri","White":0.851,"Black":0.084,"Hispanic":0.016,"Asian\/Native Hawaiian and Pacific Islander":0.011,"American Indian\/Alaska Native":0.0,"Multiple Races":0.037},
    {"Location":"Montana","White":0.923,"Black":0.0,"Hispanic":0.009,"Asian\/Native Hawaiian and Pacific Islander":0.0,"American Indian\/Alaska Native":0.027,"Multiple Races":0.036},
    {"Location":"Nebraska","White":0.895,"Black":0.025,"Hispanic":0.042,"Asian\/Native Hawaiian and Pacific Islander":0.008,"American Indian\/Alaska Native":0.004,"Multiple Races":0.026},
    {"Location":"Nevada","White":0.662,"Black":0.072,"Hispanic":0.127,"Asian\/Native Hawaiian and Pacific Islander":0.097,"American Indian\/Alaska Native":0.007,"Multiple Races":0.036},
    {"Location":"New Hampshire","White":0.941,"Black":0.0,"Hispanic":0.015,"Asian\/Native Hawaiian and Pacific Islander":0.009,"American Indian\/Alaska Native":0.0,"Multiple Races":0.027},
    {"Location":"New Jersey","White":0.677,"Black":0.104,"Hispanic":0.125,"Asian\/Native Hawaiian and Pacific Islander":0.07,"American Indian\/Alaska Native":0.001,"Multiple Races":0.024},
    {"Location":"New Mexico","White":0.521,"Black":0.012,"Hispanic":0.369,"Asian\/Native Hawaiian and Pacific Islander":0.008,"American Indian\/Alaska Native":0.057,"Multiple Races":0.033},
    {"Location":"New York","White":0.649,"Black":0.12,"Hispanic":0.129,"Asian\/Native Hawaiian and Pacific Islander":0.073,"American Indian\/Alaska Native":0.002,"Multiple Races":0.028},
    {"Location":"North Carolina","White":0.744,"Black":0.183,"Hispanic":0.027,"Asian\/Native Hawaiian and Pacific Islander":0.015,"American Indian\/Alaska Native":0.009,"Multiple Races":0.022},
    {"Location":"North Dakota","White":0.924,"Black":0.0,"Hispanic":0.0,"Asian\/Native Hawaiian and Pacific Islander":0.0,"American Indian\/Alaska Native":0.028,"Multiple Races":0.0},
    {"Location":"Ohio","White":0.844,"Black":0.097,"Hispanic":0.019,"Asian\/Native Hawaiian and Pacific Islander":0.012,"American Indian\/Alaska Native":0.001,"Multiple Races":0.027},
    {"Location":"Oklahoma","White":0.78,"Black":0.058,"Hispanic":0.033,"Asian\/Native Hawaiian and Pacific Islander":0.011,"American Indian\/Alaska Native":0.055,"Multiple Races":0.062},
    {"Location":"Oregon","White":0.879,"Black":0.009,"Hispanic":0.043,"Asian\/Native Hawaiian and Pacific Islander":0.025,"American Indian\/Alaska Native":0.006,"Multiple Races":0.038},
    {"Location":"Pennsylvania","White":0.846,"Black":0.078,"Hispanic":0.036,"Asian\/Native Hawaiian and Pacific Islander":0.02,"American Indian\/Alaska Native":0.001,"Multiple Races":0.019},
    {"Location":"Rhode Island","White":0.848,"Black":0.024,"Hispanic":0.078,"Asian\/Native Hawaiian and Pacific Islander":0.014,"American Indian\/Alaska Native":0.0,"Multiple Races":0.036},
    {"Location":"South Carolina","White":0.726,"Black":0.223,"Hispanic":0.019,"Asian\/Native Hawaiian and Pacific Islander":0.009,"American Indian\/Alaska Native":0.002,"Multiple Races":0.02},
    {"Location":"South Dakota","White":0.91,"Black":0.0,"Hispanic":0.017,"Asian\/Native Hawaiian and Pacific Islander":0.0,"American Indian\/Alaska Native":0.035,"Multiple Races":0.024},
    {"Location":"Tennessee","White":0.825,"Black":0.127,"Hispanic":0.013,"Asian\/Native Hawaiian and Pacific Islander":0.009,"American Indian\/Alaska Native":0.001,"Multiple Races":0.026},
    {"Location":"Texas","White":0.575,"Black":0.107,"Hispanic":0.25,"Asian\/Native Hawaiian and Pacific Islander":0.041,"American Indian\/Alaska Native":0.002,"Multiple Races":0.025},
    {"Location":"Utah","White":0.885,"Black":0.003,"Hispanic":0.061,"Asian\/Native Hawaiian and Pacific Islander":0.026,"American Indian\/Alaska Native":0.006,"Multiple Races":0.018},
    {"Location":"Vermont","White":0.945,"Black":0.004,"Hispanic":0.0,"Asian\/Native Hawaiian and Pacific Islander":0.0,"American Indian\/Alaska Native":0.0,"Multiple Races":0.034},
    {"Location":"Virginia","White":0.723,"Black":0.174,"Hispanic":0.032,"Asian\/Native Hawaiian and Pacific Islander":0.046,"American Indian\/Alaska Native":0.002,"Multiple Races":0.023},
    {"Location":"Washington","White":0.816,"Black":0.026,"Hispanic":0.042,"Asian\/Native Hawaiian and Pacific Islander":0.07,"American Indian\/Alaska Native":0.007,"Multiple Races":0.039},
    {"Location":"West Virginia","White":0.929,"Black":0.03,"Hispanic":0.007,"Asian\/Native Hawaiian and Pacific Islander":0.005,"American Indian\/Alaska Native":0.0,"Multiple Races":0.029},
    {"Location":"Wisconsin","White":0.906,"Black":0.036,"Hispanic":0.028,"Asian\/Native Hawaiian and Pacific Islander":0.008,"American Indian\/Alaska Native":0.006,"Multiple Races":0.017},
    {"Location":"Wyoming","White":0.895,"Black":0.0,"Hispanic":0.058,"Asian\/Native Hawaiian and Pacific Islander":0.0,"American Indian\/Alaska Native":0.011,"Multiple Races":0.03}
];
