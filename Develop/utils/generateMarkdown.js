// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.license ? data.license : ''} 
  ${data.language ? data.language : ''}

  ## Table of Contents 
  [Description](#description)<br />
  [Installation](#installation)<br />
  [Usage-Information](#usage)<br />
  [Contribution](#contribution)<br />
  [Testing-Information](#test)<br />
  [Questions](#questions)  

  ## Description 
    ${data.description}


  ## Installation Instructions 
    ${data.installation}
  

  ## Usage-Information
    ${data.usage}


  ## Contribution
    ${data.contribution}


  ## Testing-Information
    ${data.test}
    
    
  ## Questions 
    Email: ${data.email}
    GitHub: https://github.com/${data.github}  
`;
}

module.exports = generateMarkdown;