const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    //'Sass'
  ];

  // module.exports = webTechs;

  let sass = 'Sass';
  let search = webTechs.includes(sass);

  if(search) return console.log('Sass es un preproceso de CSS');
  else webTechs.push(sass);

  // console.log(webTechs)
