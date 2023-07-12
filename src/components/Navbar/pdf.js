import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
export const generatePDF = () => {
  const imageUrl = require(`./profile-bg.jpg`);
  var lol = 'Yvan Mutara'
  const getImageDataUrl = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  };

  const createDocumentDefinition = async () => {
    const imageBase64 = await getImageDataUrl(imageUrl);
    const data = [
      { label: 'Swahili', value: 100 },
      { label: 'Rwandeese', value: 100 },
      { label: 'French', value: 90 },
      { label: 'Dutch', value: 80 },
      { label: 'English', value: 70 },
      { label: 'Spanish', value: 10 },
      
    ]; // Sample data for the chart
    return {
      content: [
        {
            text:  "Curriculum Vitae",
            style: 'header',
            alignment: 'center',
            decoration: 'underline'
        },
        {
            alignment: 'justify',
            columns: [  
                {
                    alignment:'justify',
                    stack: [
                       { text: lol,style: 'header2',margin: [ 0, 5, 0, 5 ]},
                       { text: 'Contact & Adres:',style: 'header3',decoration: 'underline',},
                       {text: 'Cell No 1.: +31 6 87621114',style: 'body', margin: [ 0, 5, 0, 0 ]},
                       {text: 'Cell No 2.: +34 604 43 89 58',style: 'body',margin: [ 0, 5, 0, 0 ]},
                       {text: 'E-mail : mutara_yvan@hotmail.com',style: 'body',margin: [ 0, 5, 0, 0 ]},
                       {text: 'Profile-Website : mutara-yvan.com',color: '#4294d6',link:'https://yvanmutara.github.io/Profile2.0/',style: 'body',margin: [ 0, 5, 0, 0 ]},
                       {text: 'Location : Arnhem, Netherland',style: 'body',margin: [ 0, 5, 0, 0 ]},
                    ],
                },
                {
                    image: imageBase64,
                    width: 100,
                    height: 100,
                }
            ],
            // decoration: 'underline'

        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 5,
              x2: 520,
              y2: 5,
              lineWidth: 1,
              lineColor: '#000000', // Change line color if needed
            },
          ],
          margin: [0, 10], // Adjust margins if needed
        },
        {
          text: 'WHO AM I',style: 'header3',margin: [ 0, 5, 0, 5 ],
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 1,
              x2: 520,
              y2: 1,
              lineWidth: 1,
              lineColor: '#000000', // Change line color if needed
            },
          ],
          margin: [0, 2], // Adjust margins if needed
        },
        {
          text: 'Highly skilled Django Python Engineer with 4 years of experience in developing web applications and APIs.Strong understanding of software development principles, database design, security and performance practices. Passionate about creating robust and scalable solutions. Excellent problem-solving and communication skills.',style: 'body',margin: [ 0, 10, 0, 10 ],
        },
        {
          text: 'WORK EXPERIENCE',style: 'header3',margin: [ 0, 10, 0, 10 ],
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 1,
              x2: 520,
              y2: 1,
              lineWidth: 1,
              lineColor: '#000000', // Change line color if needed
            },
          ],
          margin: [0, 2], // Adjust margins if needed
        },
        {
          stack: [
            {text: 'DJANGO PYTHON ENGINEER . FACTORY ZERO B.V 2021-2023 . THE NETHERLANDS',style:'body_title',margin:[ 0, 10, 0, 5 ]},
            {text: '• Develop and maintain web application using Django,Python , Javascript and React.',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Collaborate with cross-functional teams to gather requirements and design scalable solutions.',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Implement RESTful API’S for data retrieval and manipulation.',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Optimize application performance through code refactoring and database query optimization.',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• CI/CD (Continiuousely integration/Continiuousely delivering).',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Analyzing data',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Help team members to understand the fundamentals of application development.',style:'body',margin:[ 5, 5, 0, 0 ]},
            
          ]
        },
        {
          stack: [
            {text: 'TRIDIUM NIAGARA SOFTWARE ENGINEER . REME 2020-2021 . THE NETHERLANDS',style:'body_title',margin:[ 0, 10, 0, 5 ]},
            {text: '• Develop and maintain applications for differents custormers.',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Develop new funtionalities in de Niagara environment to be able to communicate with third part API’S.',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Uderstanding the fundamentals of hardware side (sensors , motors, cables)',style:'body',margin:[ 5, 5, 0, 0 ]},
          ]
        },
        {
          stack: [
            {text: 'FULL STACK DEVELOPER . TRANSIMBIOZE LOGIC S.L VALENCIA 2019-2020 . SPAIN',style:'body_title',margin:[ 0, 10, 0, 5 ]},
            {text: '• Develop and maintain the website.',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Help in maintaining the intranet app inside the compagny.',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Managing social apps for the compagny.',style:'body',margin:[ 5, 5, 0, 0 ]},
            {text: '• Making flyers, video’s, posters for promotions.',style:'body',margin:[ 5, 5, 0, 0 ]},
          ]
        },
        {
          text: 'EDUCATION',style: 'header3',margin: [ 0, 10, 0, 10 ],
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 1,
              x2: 520,
              y2: 1,
              lineWidth: 1,
              lineColor: '#000000', // Change line color if needed
            },
          ],
          margin: [0, 2], // Adjust margins if needed
        },
        {
          stack: [
            {text: 'RIJN IJSSEL 2017-2019 . ARNHEM . THE NETHERLANDS',style:'body_title',margin:[ 0, 10, 0, 5 ]},
            {text: 'Relevant coursework:',style:'body2',margin:[ 5, 5, 0, 0 ]},
            {text: '• Data strutures',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Algorithms.',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Software engineering',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Database Management Systems',style:'body',margin:[ 7, 5, 0, 0 ]},
          ]
        },
        {
          stack: [
            {text: 'DE HAN 2016-2017 . ARNHEM . THE NETHERLANDS',style:'body_title',margin:[ 0, 10, 0, 5 ]},
            {text: 'Relevant coursework:',style:'body2',margin:[ 5, 5, 0, 0 ]},
            {text: '• Mathematics',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Physics.',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• English',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Dutch C1',style:'body',margin:[ 7, 5, 0, 0 ]},
          ]
        },
        {
          stack: [
            {text: 'SCALDA 2013-2014 . VLISSINGEN . THE NETHERLANDS',style:'body_title',margin:[ 0, 10, 0, 5 ]},
            {text: 'Relevant coursework:',style:'body2',margin:[ 5, 5, 0, 0 ]},
            {text: '• Operating systems (Windows,Debian,Linux).',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Servers and Network.',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Security and maintenance of system (Windows & Linux).',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Troubleshouting and problems solving in de system.',style:'body',margin:[ 7, 5, 0, 0 ]},
          ]
        },
        {
          stack: [
            {text: 'ECOLE SECONDAIRE DE UVIRA 2013-2014 . UVIRA . DRC',style:'body_title',margin:[ 0, 10, 0, 5 ]},
            {text: 'Relevant coursework:',style:'body2',margin:[ 5, 5, 0, 0 ]},
            {text: '• Mathematics.',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Physics.',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Chemistry.',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• French.',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: 'Other courses:',style:'body2',margin:[ 5, 10, 0, 0 ]},
            {text: '• History.',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• Geography.',style:'body',margin:[ 7, 5, 0, 0 ]},
            {text: '• General knowledge.',style:'body',margin:[ 7, 5, 0, 0 ]},

          ]
        },
        {
          text: 'Languages & Hobby`s',style: 'header3',margin: [ 0, 10, 0, 10 ],
        },
        {
          canvas: [
            {
              type: 'line',
              x1: 0,
              y1: 1,
              x2: 520,
              y2: 1,
              lineWidth: 1,
              lineColor: '#000000', // Change line color if needed
            },
          ],
          margin: [0, 2], // Adjust margins if needed
        },

        {
          alignment: 'justify',
          columns: [  
              {
                  text: 'Languages:',style: 'header3',decoration: 'underline',margin:[10, 10, 0, 0],
                  columns: [
                    
                    {
                      stack: [
                        // Chart labels
                        ...data.map((item) => ({
                          text: item.label,
                          // style: 'body'
                          margin: [0,5, 0, 0],
                          fontSize: 8,
                        })),
                      ]
                    },
                    {
                      stack: [
                        {canvas: [
                          ...data.map((item, index) => ({
                            type: 'rect',
                            x: 0,
                            y: index * 15,
                            w: item.value,
                            h: 10,
                            color: '#0099ff',
                          })),
                         
                        ],},

                      ]
                    },
                    


                  ],
                  margin: [0,5, 0, 0],
                
              },
              {
                stack: [
                  { text: 'Hobby`s:',style: 'header3',decoration: 'underline',margin:[50, 10, 0, 0]},
                  {text: 'Music production',style: 'body', margin: [ 52, 5, 0, 0 ]},
                  {text: 'Play to football',style: 'body',margin: [ 52, 5, 0, 0 ]},
                  {text: 'Travel',style: 'body',margin: [ 52, 5, 0, 0 ]},
                  {text: 'Learn new things(example: play with electronics devices)',style: 'body',margin: [ 52, 5, 0, 0 ]},
               ],
              }
          ],
          // decoration: 'underline'

      },
      {
        text: 'Computer skills',style: 'header3',margin: [ 0, 20, 0, 10 ],
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 1,
            x2: 520,
            y2: 1,
            lineWidth: 1,
            lineColor: '#000000', // Change line color if needed
          },
        ],
        margin: [0, 2], // Adjust margins if needed
      },
      {
        layout: 'noBorders', // optional
        margin: [ 10, 20, 0, 0 ],
        table: {
          body: [
            [
              { text: 'Programming languages:', bold: true ,style:'body_title',margin: [ 10, 20, 0, 0 ]}, 
              { text: ' PYTHON',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' PHP',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' JAVA',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' C#',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' C++',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' JAVASCRIPT',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' HTML/CSS',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
            ],
            [
              { text: 'Web frameworks:', bold: true ,style:'body_title',margin: [ 10, 20, 0, 0 ]}, 
              { text: ' DJANGO',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' DJANGO REST framework',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' REACT',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' SYMPFONY',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' LARAVEL',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
            ],
            [
              { text: 'Libraries:', bold: true ,style:'body_title',margin: [ 10, 20, 0, 0 ]}, 
              { text: ' JQUERY',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' REDUX',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
            ],
            [
              { text: 'Database management:', bold: true ,style:'body_title',margin: [ 10, 20, 0, 0 ]}, 
              { text: ' POSTGRES',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' MYSQL',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
            ],
            [
              { text: 'Version control system:', bold: true ,style:'body_title',margin: [ 10, 20, 0, 0 ]}, 
              { text: ' GIT (Github)',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
            ],
            [
              { text: 'Testing tool:', bold: true ,style:'body_title',margin: [ 10, 20, 0, 0 ]}, 
              { text: ' PYTEST',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' POSTMAN',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
            ],
            [
              { text: 'Cloud:', bold: true ,style:'body_title',margin: [ 10, 20, 0, 0 ]}, 
              { text: 'AWS Solution architect associate',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: '',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
            ],
            [
              { text: 'Other related technologie skills:', bold: true ,style:'body_title',margin: [ 10, 20, 0, 0 ]}, 
              { text: ' AJAX',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' DOCKER',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' SCRUM (agile methodologie)',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' ARDUINO/RASPBERRY',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: ' LINUX (debian,ubuntu)',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: 'MS OFFICE',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
              { text: 'POWER BI',bold:false, style:'body',margin: [ 10, 20, 0, 0 ]},
            ],
            // [ 'Value 1', 'Value 2'],
            // [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
          ]
        }
      },
      {
        text: 'Project referencies',style: 'header3',margin: [ 0, 20, 0, 10 ],
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 1,
            x2: 520,
            y2: 1,
            lineWidth: 1,
            lineColor: '#000000', // Change line color if needed
          },
        ],
        margin: [0, 2], // Adjust margins if needed
      },
      {
        alignment: 'justify',
        columns: [  
            {
                alignment:'justify',
                stack: [
                   {text: 'Compagny name: SIMBIOZEFOOTBALL',style: 'body_title', margin: [ 0, 5, 0, 0 ]},
                   {text: 'Owner: Transimbioze',style: 'body',margin: [ 0, 5, 0, 0 ]},
                   {text: 'Status : Completed',style: 'body',margin: [ 0, 5, 0, 0 ]},
                   {text: 'www.simbiozefootball.com:',color: '#4294d6',link: 'https://www.simbiozefootball.com/',style: 'body',margin: [ 0, 5, 0, 0 ]},
                ],
            },
            {
              alignment:'justify',
              stack: [
                 {text: 'Compagny name: AFRADEM',style: 'body_title', margin: [ 0, 5, 0, 0 ]},
                 {text: 'Owner: Afradem',style: 'body',margin: [ 0, 5, 0, 0 ]},
                 {text: 'Status : Inprogress',style: 'body',margin: [ 0, 5, 0, 0 ]},
                 {text: 'on process:',color:'#dfe615',link: 'https://yvanmutara.github.io/Profile2.0/404',style: 'body',margin: [ 0, 5, 0, 0 ]},
              ],
            }
        ],
        // decoration: 'underline'

      },
      {
        text: 'Contact referenties',style: 'header3',margin: [ 0, 20, 0, 10 ],
      },
      {
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 1,
            x2: 520,
            y2: 1,
            lineWidth: 1,
            lineColor: '#000000', // Change line color if needed
          },
        ],
        margin: [0, 2], // Adjust margins if needed
      },
      {
        alignment: 'justify',
        columns: [  
            {
                alignment:'justify',
                stack: [
                   {text: 'Name: Renée van Noort ',style: 'body', margin: [ 0, 5, 0, 0 ]},
                   {text: 'Company: Factory zero',style: 'body',margin: [ 0, 5, 0, 0 ]},
                   {text: 'Function: R&D Manager',style: 'body',margin: [ 0, 5, 0, 0 ]},
                   {text: 'Phone: +31 6 38769808',style: 'body',margin: [ 0, 5, 0, 0 ]},
                   
                ],
            },
            {
              alignment:'justify',
              stack: [
                {text: 'Name: Maxime Kusseni ',style: 'body', margin: [ 0, 5, 0, 0 ]},
                {text: 'Company: Transimbioze B.V',style: 'body',margin: [ 0, 5, 0, 0 ]},
                {text: 'Function: Administrator',style: 'body',margin: [ 0, 5, 0, 0 ]},
                {text: 'Phone: +34 664 80 08 28',style: 'body',margin: [ 0, 5, 0, 0 ]},
              ],
          },
        ],

      },
       ],
       footer: {
        text: 'Yvan Mutara ',
        alignment: 'center',
      },
    styles: {
      header: {
        fontSize: 18,
        bold: true
      },
      header2: {
        fontSize: 14,
        bold: true
      },
      header3: {
        fontSize:12,
        bold: true
      },
      body: {
        fontSize: 8,
        bold: false,
      },
      body_title: {
        fontSize: 10,
        bold:true,
      },
      body2: {
        fontSize: 8,
        bold:true,
        italics: true,
      },
      body3: {
        fontSize: 10,
        bold:false,
      }
      
    }
    };
  };

  createDocumentDefinition().then((documentDefinition) => {
    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    pdfDocGenerator.download('Yvan_cv.pdf');
  });
};

