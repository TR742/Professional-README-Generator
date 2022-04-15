// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Modzilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Modzilla') {
    return 'https://www.mozilla.org/en-US/MPL/2.0/';
  } else if (license === 'Apache') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else {
    return 'https://www.boost.org/users/license.html';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license[0])}

## Table of Contents

- [Description](#description)
- [Installation Process](#install)
- [How to use](#usage)
- [Contributors](#contributors)
- [Test](#test)
- [License](#license)

## Description
    
${data.description}

## Install

${data.install}

## Usage

${data.usage}

## Contributors

${data.contributors}

## Test

${data.test}

## License

Application covered by licence: ${data.license}

${renderLicenseLink(data.license[0])}

## Questions

Questions? Please contact the contributors through either GitHub: ${data.username} - ${data.gblink} or Email address: ${data.email}`;
}

module.exports = generateMarkdown;