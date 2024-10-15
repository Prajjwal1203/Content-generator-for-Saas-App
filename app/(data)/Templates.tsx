export default[
  {
    name:'Blog Title',
    desc:'An Ai Tool that generate Blog Title depends on your blog information',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/6114/6114045.png',
    aiPrompt:'Give me 5 blog topic idea in bullet wise given only based on give niche & outline topic and give me result in rich text editor format ',
    slug:'generate-blog-title',
    form:
    [ 
      {
        label:'Enter your blog ',
        field:'input',
        name:'niche',
        required:true
      },
      {
        label:'Enter blog outline',
        field:'textarea',
        name:'outline'
      }
    ] 
  },

  {
    name:'Blog Content',
    desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/2065/2065213.png',
    aiPrompt:'Generate Blog Content based on topic and outline in rich text editor format',
    slug:'generate-blog-content',
    form:
    [ 
      {
        label:'Enter your blog ',
        field:'input',
        name:'niche',
        required:true
      },
      {
        label:'Enter blog Content',
        field:'textarea',
        name:'outline'
      }
    ] 
  },


  {
    name:'Blog Topic Ideas',
    desc:'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/7466/7466047.png',
    aiPrompt:'Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format ',
    slug:'generate-blog-topic-ideas',
    form:
    [ 
      {
        label:'Enter your niche ',
        field:'input',
        name:'niche',
        required:true
      },
     {/* {
        label:'Enter Blog Topic Ideas',
        field:'textarea',
        name:'outline'
      } */}
    ] 
  },


  {
    name:'Youtube SEO Title',
    desc:'An Ai Tool that will help you to generate title for your youtube video that will be seo friendly',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/15302/15302398.png',
    aiPrompt:'Give me Best SEO optimized high ranked 5 title in bullet point only based on niche in rich text-editor format.',
    slug:'generate-Youtube-seo-title',
    form:
    [ 
      {
        label:'Enter your blog ',
        field:'input',
        name:'niche',
        required:true
      },
      {
        label:'Enter Youtube SEO Title',
        field:'textarea',
        name:'outline'
      }
    ] 
  },


  {
    name:'Youtube Description',
    desc:'An Ai Tool that provide the description of your youtube videos.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/10101/10101391.png',
    aiPrompt:'Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich  text editor format',
    slug:'generate-youtube-description',
    form:
    [ 
      {
        label:'Enter your blog ',
        field:'input',
        name:'niche',
        required:true
      },
      {
        label:'Enter Youtube Description',
        field:'textarea',
        name:'outline'
      }
    ] 
  },

  {
    name:'YouTube Tags',
    desc:'An Ai Tool that will provide tags to your video that will help the creater to be appeared more on the user section ',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/725/725300.png',
    aiPrompt:'Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format ',
    slug:'generate-youtube-tags',
    form:
    [ 
      {
        label:'Enter your blog ',
        field:'input',
        name:'niche',
        required:true
      },
      {
        label:'Enter Youtube Tags here',
        field:'textarea',
        name:'outline'
      }
    ] 
  },


  {
    name:'Rewrite articles(Plagiarism Free)',
    desc:'Use this tool to rewrite existing article or blog postwhich can bypass Ai detectors and also enhance the quality of your text.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/8980/8980709.png',
    aiPrompt:'Rewrite give article without any Plagiarism in rich text editor format ',
    slug:'rewrite-articles',
    form:
    [ 
      {
        label:'🤖 Provide your Article/Blogpost or any other content to rewrite. ',
        field:'input',
        name:'niche',
        required:true
      },
    ] 
  },


  {
    name:'Text Improver',
    desc:'This handy tool refines your writng,elimniating errors and redundancies for a clear,redable result.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/4698/4698699.png',
    aiPrompt:'Give me 5 blog topic idea in bullet wise given only based on given topic and give me result in rich text editor format ',
    slug:'generate-text-improver',
    form:
    [ 
     {
        label:'Enter text that you want to re-write or improve',
        field:'textarea',
        name:'Text to improve'
      }
    ] 
  },

  {
    name:'Add Emojis to text',
    desc:'This tool will help you to add emojis to your text making it more beautiful and attractive.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/1791/1791320.png',
    aiPrompt:'Add Emoji to outline text depends on outline and rewrite it in rich text editor format',
    slug:'generate-emojis',
    form:
    [ 
     
      {
        label:'Enter Emojis to be added',
        field:'textarea',
        name:'outline'
      }
    ] 
  },


  {
    name:'Instagram Post generator',
    desc:'This will generate Post captions for your instagram pics generating viral and worthy catchy titles.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/2504/2504918.png',
    aiPrompt:'Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format',
    slug:'generate-instagram-post',
    form:
    [ 
      {
        label:'Enter keywords for your post ',
        field:'input',
        name:'niche',
        required:true
      },
    ] 
  },


  {
    name:'Instagram Hashtag generator',
    desc:'This will generate hashtags for your instagram post making it more appearable to others feed.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/1628/1628649.png',
    aiPrompt:'Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format',
    slug:'generate-instagram-post',
    form:
    [ 
      {
        label:'Enter keywords for your post ',
        field:'input',
        name:'niche',
        required:true
      },
    ] 
  },

  {
    name: 'Instagram Post/Reel Idea',
    desc: 'An AI tool that generate New and trending instagram idea depends on your niche',
    icon: 'https://cdn-icons-png.flaticon.com/128/1029/1029183.png',
    category: 'instagram',
   
    slug: 'instagram-post-idea-generator',
    aiPrompt: 'Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format',
    form: [
        {
            label: 'Enter Keywords / Niche for your instagram idea',
            field: 'input',
            name: 'keywords',
            required:true
        },
       
    ]
},

{
  name: 'English Grammer Check',
  desc: 'AI Model to Correct your english grammer by providing the text',
  icon:'https://cdn-icons-png.flaticon.com/128/12596/12596700.png',
  category: 'english',
 
  slug: 'english-grammer-checker',
  aiPrompt: 'Rewrite the inputText by correcting the grammer and give output in  in rich text editor format',
  form: [
      {
          label: 'Enter text to correct the grammer',
          field: 'input',
          name: 'inputText',
          required:true
      },
     
  ]
},

{
  name: 'Explain Code',
  desc: 'AI Model to explain programming code in any language',
  icon:'https://cdn-icons-png.flaticon.com/128/8488/8488751.png',
  category: 'Coding',
 
  slug: 'explain-code',
  aiPrompt: 'Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ',
  form: [
      {
          label: 'Enter code which you want to understand',
          field: 'textarea',
          name: 'codeDesscripton',
          required:true
      },
     
  ]
},
{
  name: 'Code Bug Detector',
  desc: 'This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.',
  icon:'https://cdn-icons-png.flaticon.com/128/4426/4426267.png',
  category: 'code-bug-detector',
 
  slug: 'code-bug-detector',
  aiPrompt: 'Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ',
  form: [
      {
          label: 'Enter code which you want to test bug',
          field: 'textarea',
          name: 'codeInput',
          required:true
      },
     
  ]
},
{
  name: 'Tagline Generator',
  desc: 'Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.',
  icon:'https://cdn-icons-png.flaticon.com/128/2178/2178616.png',
  category: 'Marketting',
 
  slug: 'tagline-generator',
  aiPrompt: 'Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ',
  form: [
      {
          label: 'Product/Brand Name',
          field: 'input',
          name: 'productName',
          required:true
      },
      {
          label: 'What you are selling / Marketting',
          field: 'textarea',
          name: 'outline',
          required:true
      },
     
  ]
},
{
  name: 'Product Description',
  desc: 'This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.',
  icon:'https://cdn-icons-png.flaticon.com/128/679/679922.png',
  category: 'Marketting',
 
  slug: 'product-description',
  aiPrompt: 'Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ',
  form: [
      {
          label: 'Product Name',
          field: 'input',
          name: 'productName',
          required:true
      },
      {
          label: 'Product Details',
          field: 'textarea',
          name: 'outline',
          required:true
      },
     
  ]
},

]


