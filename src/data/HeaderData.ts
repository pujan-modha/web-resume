export const HeaderFirstName = "John";
export const HeaderLastName = "Doe";
export const HeaderFancyName = true;
export const HeaderTitle = "Data Analyst / ML Researcher";
export const HeaderAddress = "Mumbai, Maharashtra, India";

// For Fancy Name Style

export const HeaderFirstLetterFN = HeaderFirstName.substring(0, 1).toUpperCase();
export const HeaderNoFirstLetterFN = HeaderFirstName.slice(1);
export const HeaderFirstLetterLN = HeaderLastName.substring(0, 1).toUpperCase();
export const HeaderNoFirstLetterLN = HeaderLastName.slice(1);

// For Website Title

export const HeaderFullName = (HeaderFirstLetterFN)+(HeaderNoFirstLetterFN).toLowerCase()+" "+(HeaderFirstLetterLN)+(HeaderNoFirstLetterLN).toLowerCase();