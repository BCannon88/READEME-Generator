//const licenseBadges = require("./badges&license");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = licenseChoices => {

  if(!licenseChoices){
    return ''
  }
  return `<img src="https://img.shields.io/badge/mybadge-${licenseChoices}-blue" alt="badge with license name"/>`
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = licenseLink => {
  if(!licenseLink){
    return ''
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if(!license){
    return ''
  }
}
// TODO: Create a function to generate markdown for README
const generateMarkdown =(data) => {

  //data.licenseBadge = licenseBadges[data.license];
  return `
  # **${data.title}**

  ${renderLicenseBadge(data.license)}

  ## Description

  ## ${data.description}

  ## Table of Contents        
   * [Installation](#Installation)
   * [Usage](#Usage)       
   * [Credits](#Credits)       
   * [License](#License)   
       
   ## Instillation

    ${data.installation}       

   ## Usage

    ${data.usage}       

   ## Credits

    ${data.credits}       

   ## License

    This application is covered under ${data.license}       

   ## Badges

   ${renderLicenseBadge(data.license)}      
 
   ## Features

    ${data.features}       

   ## Contributing

    ${data.contributing}       

   ## Test

    ${data.test}    
    
   ## Questions
    ${data.questions}
`;
}

module.exports = generateMarkdown;
