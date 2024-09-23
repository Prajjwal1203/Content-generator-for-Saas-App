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
    desc:'An Ai Tool that serves as your personal blog post title writer,generating catchy and viral title for your blog post.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/2065/2065213.png',
    aiPrompt:'Give me 5 blog content idea in bullet wise given only based on given topic and give me result in rich text editor format ',
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
    desc:'An Ai Tool that will provide you topic ideas for your blog posts which are viral and currently trending.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/7466/7466047.png',
    aiPrompt:'Give me 5 blog topic idea in bullet wise given only based on given topic and give me result in rich text editor format ',
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
    aiPrompt:'Give me the idea about the best youtube description in bullet points not more than 5 points based on niche in rich text editor format',
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
    aiPrompt:'Give me 5 blog topic idea in bullet wise given only based on given topic and give me result in rich text editor format ',
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
    aiPrompt:'Give me 5 blog topic idea in bullet wise given only based on given topic and give me result in rich text editor format ',
    slug:'generate-articles',
    form:
    [ 
      {
        label:'Enter your blog ',
        field:'input',
        name:'niche',
        required:true
      },
      {
        label:'Enter the Articles',
        field:'textarea',
        name:'outline'
      }
    ] 
  },


  {
    name:'Text Improver',
    desc:'This handy tool refines your writng,elimniating errors and redundancies for a clear free text.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/4698/4698699.png',
    aiPrompt:'Give me 5 blog topic idea in bullet wise given only based on given topic and give me result in rich text editor format ',
    slug:'generate-text-improver',
    form:
    [ 
      {
        label:'Enter your blog ',
        field:'input',
        name:'niche',
        required:true
      },
     {/* {
        label:'Enter the Text Outline',
        field:'textarea',
        name:'outline'
      }*/}
    ] 
  },

  {
    name:'Add Emojis to text',
    desc:'This tool will help you to add emojis to your text making it more beautiful and attractive.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/1791/1791320.png',
    aiPrompt:'Give me 5 blog topic idea in bullet wise given only based on given topic and give me result in rich text editor format ',
    slug:'generate-emojis',
    form:
    [ 
      {/*{
        label:'Enter your blog ',
        field:'input',
        name:'niche',
        required:true
      },*/},
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
    aiPrompt:'Give me 5 Instagram Post in bullet wise given only based on given topic and give me result in rich text editor format ',
    slug:'generate-instagram-post',
    form:
    [ 
      {
        label:'Enter keywords for your post ',
        field:'input',
        name:'niche',
        required:true
      },
    { /* {
        label:'Enter the out of your Post',
        field:'textarea',
        name:'outline'
      } */}
    ] 
  },


  {
    name:'Instagram Hashtag generator',
    desc:'This will generate hashtags for your instagram post making it more appearable to others feed.',
    category:'Blog',
    icon:'https://cdn-icons-png.flaticon.com/128/1628/1628649.png',
    aiPrompt:'Give me 5 Instagram hashtags that are trending in bullet wise given only based on given topic and give me result in rich text editor format ',
    slug:'generate-instagram-post',
    form:
    [ 
      {
        label:'Enter keywords for your post ',
        field:'input',
        name:'niche',
        required:true
      },
    { /* {
        label:'Enter the out of your Post',
        field:'textarea',
        name:'outline'
      } */}
    ] 
  },

]


