## <ins>Data Visualization Project</ins> by Maria Funmi A Frazier, Mitch Murray, and Yvens Joseph

#### The objective of this assignment is to visually depict variations in Health Coverage across the United States. These variations will be analyzed based on factors such as gender, race/ethnicity, and income in relation to the origin of coverage. We hope that this research will provide insights into any existing weaknesses in Healthcare Coverage, fostering a better understanding of the current landscape.

#### The data for this visual depiction was collect from KFF, which is an independent source for health policy research, polling, and news. The main reason why KFF is the source is because the ethical mean that their work and policy are done. Based on their [About US,](https://www.kff.org/about-us/) "KFF is the independent source for health policy research, polling, and journalism. Our mission is to serve as a nonpartisan source of information for policymakers, the media, the health policy community, and the public." Looking through their data used for this project, it can be said that the information collected meets data ethical standards as none of the data collected violates privacy issues.  More detailed information that is dataset is collected from is available at [State Health Facts: Health Coverage & Uninsured](https://www.kff.org/state-category/health-coverage-uninsured/ ). KFF. (2023, October 27.).

##  <ins>Content Reference</ins> - To navigate project process

### <ins>Images<ins> 

  [hc](/Images/)
  used on the Jumbotron on index.html (style.css) – graphic design by (Funmi A-Frazier)
  
  [hc3](/images/) 
  used on index.html as background on webpage (style.css) 
  Source: Image Description: Cut out people holding hands, heart shape, with stethoscope 2023 Bridging Healthcare Pty Ltd accessed on 2 Feb 2024,   
  [source](https://www.bridginghealth.com.au/offsite/diagnostics/);
  
### <ins>Part-One: Convent CSV to JSON</ins>

[convert_CSV_to_JSON.ipynb](/Part_One_Convert_CSV_to_JSON/)

### <ins>Part- Two: Created HTML<ins>

•	[<ins>Script</ins>](Part_Two_Create_html/script/)

        o	dataBelow100.js – script for JSON file for 100% below Federal Poverty Level (FPL)
        o	dataBelow200.js – script for JSON file for 200% below Federal Poverty Level (FPL)
        o	employer.js – script for JSON file for Employer Healthcare Coverage in USA by Race Demographic
        o	genderchart.js – script for Tree map for indexGender.html
        o	GenderMen.js – script for JSON file for Healthcare Coverage in USA by Gender(Men)
        o	gendersytle.css – style for Tree map for indexGender.html
        o	GenderWomen.js – script for JSON file for Healthcare Coverage in USA by Gender(Men)
        o	medicaid.js – script for JSON file for Medicaid Healthcare Coverage in USA by Race Demographic
        o	medicare.js – script for JSON file for Medicare Healthcare Coverage in USA by Race Demographic
        o	population.js – script for JSON file for Healthcare Coverage in USA by Total Population
        o	style.css – style for index.html (main webpage) include styling for background image and jumbotron
        o	styles_income.css – style for pie charts in income.html
        o	uninsured.js – script for JSON file for uninsured Healthcare Coverage in USA by Race Demographic
        
•	[chart.html](/Part_Two_Create_html/chart.html/) – code for webpage displays an interactive combined bar graph showing percentage of Healthcare Coverage in USA by Race Demographic. Coverage type by Employer, Medicaid ,Medicare, and uninsured.

•	[Healthcare.html](/Part_Two_Create_html/Healthcare.html/) – code for webpage displays a pie chart displaying Healthcare Coverage in USA by Total Population

•	[Income.html](/Part_Two_Create_html/Income.html/) – code for webpage displays an interactive pie chart displaying the percentage of coverage type for income that are 100% and 200% below the Federal Poverty Level (FPL) in USA

•	[Index.html](/Part_Two_Create_html/index.html/) – code for main webpage that gives overview of Data Visualization project and holds links to other html webpage and link to project’s GitHub

•	[indexGender.html](/Part_Two_Create_html/indexGender.html/) – code for webpage that displays an interactive tree map for the percentage of coverage type by Gender for Healthcare in the USA

### [<ins>Resources CSV Files</ins>](/Resources/)

      •	Coverage_Gender_Men.CSV
      •	Coverage_Gender_Women.CSV
      •	Health_Coverage_Income_below100.CSV
      •	Health_Coverage_Income_below200.CSV
      •	Health_Coverage_Population.CSV
      •	Race_Ethnicity_Employer.CSV
      •	Race_Ethnicity_Medicaid.CSV
      •	Race_Ethnicity_Medicare.CSV
      •	Race_Ethnicity_Uninsured.CSV
      
  #### CSV file Source:
      
    Health Insurance Coverage of Men 19-64. KFF. (2023, October 27). 
    https://www.kff.org/other/state-indicator/health-insurance-coverage-of-nonelderly-adult-men/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D
   
    Health Insurance Coverage of Women 19-64. KFF. (2023, October 27). 
    https://www.kff.org/other/state-indicator/health-insurance-coverage-of-nonelderly-adult-women/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D
   
    Health Insurance Coverage of the Nonelderly (0-64) with Incomes below 100% Federal Poverty Level (FPL). KFF. (2023, October 27). 
    https://www.kff.org/other/state-indicator/nonelderly-up-to-100-fpl/?currentTimeframe=0&sortModel=%7B%22colId%22%3A%22Location%22%2C%22sort%22%3A%22asc%22%7D
    
    Health Insurance Coverage of the Nonelderly (0-64) with Incomes below 200% Federal Poverty Level (FPL). KFF. (2023, October 27). 
    https://www.kff.org/other/state-indicator/nonelderly-up-to-200-fpl/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D
     
    Health Insurance Coverage of the Total Population. KFF. (2023, October 27). 
    https://www.kff.org/other/state-indicator/total-population/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D
    
     Employer-Sponsored Coverage Rates for the Nonelderly by Race/Ethnicity. KFF. (2023, October 27). 
     https://www.kff.org/other/state-indicator/nonelderly-employer-coverage-rate-by-raceethnicity/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D
    
    Uninsured Rates for the Nonelderly by Race/Ethnicity. KFF. (2023, October 27).  
    https://www.kff.org/uninsured/state-indicator/nonelderly-uninsured-rate-by-raceethnicity/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D
    
    Medicaid Coverage Rates for the Nonelderly by Race/Ethnicity. KFF. (2023, October 27). 
    https://www.kff.org/medicaid/state-indicator/nonelderly-medicaid-rate-by-raceethnicity/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D
    
    Distribution of Medicare Beneficiaries by Race/Ethnicity. KFF. (2023, October 27).  
    https://www.kff.org/medicare/state-indicator/medicare-beneficiaries-by-raceethnicity/?currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D

    Uninsured Rates for the Nonelderly by Race/Ethnicity. KFF. (2023, October 27).  
    https://www.kff.org/uninsured/state-indicator/nonelderly-uninsured-rate-by-raceethnicity/?  currentTimeframe=0&sortModel=%7B%22colId%22:%22Location%22,%22sort%22:%22asc%22%7D

  Complete collection Healthcare Coverage can be found at: 
    [State Health Facts](https://www.kff.org/state-category/health-coverage-uninsured/). Health Coverage & Uninsured. KFF. (2023, October 27.). 
    https://www.kff.org/state-category/health-coverage-uninsured/ 

### [<ins>Resources JSON files</ins>](/Resources_json/)

    •	Coverage_Gender_Men_json.json
    •	Coverage_Gender_Women_json.json
    •	Health_Coverage_Income_below100_json.json
    •	Health_Coverage_Income_below200_json.json
    •	Health_Coverage_Population_json.json
    •	Race_Ethnicity_Employer_json.json
    •	Race_Ethnicity_Medicaid_json.json
    •	Race_Ethnicity_Medicare_json.json
    •	Race_Ethnicity_Uninsured. _json.json



