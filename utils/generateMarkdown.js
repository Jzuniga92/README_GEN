// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    switch (license.toLowerCase()) {
    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "gnu":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    default:
      return "";
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return ""; 
  } else {
    switch (license.toLowerCase()) {
      case "mit":
        return "https://opensource.org/licenses/MIT";
      case "apache":
        return "https://opensource.org/licenses/Apache-2.0";
      case "gnu":
        return "https://www.gnu.org/licenses/gpl-3.0";
      default:
        return "";
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return "";
  } else {
    return `## License
    This project is licensed under the [${license} license](${renderLicenseLink(license)}). ${renderLicenseBadge(license)}`;
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by ${data.name}
##Table of Contents
${data.TableofContents}
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
## Installation
${data.installations}
##Description
${data.discription}
## Usage
${data.usage}
## Credits
${data.contributions}
## License
${data.license}
## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## Features

*contact
*GitHub: ${data.git}
*Email: ${data.email}
`;
}

module.exports = generateMarkdown;