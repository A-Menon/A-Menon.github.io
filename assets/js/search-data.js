// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Some cool things I&#39;ve worked on",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-academics",
          title: "Academics",
          description: "The most insightful courses I&#39;ve taken at Princeton",
          section: "Navigation",
          handler: () => {
            window.location.href = "/academics/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-enhancing-transformer-programs-with-structured-biases",
          title: 'Enhancing Transformer Programs with Structured Biases',
          description: "a performance-enhancing modular extension of Transformer Programs (Transformers designed for mechanistic interpretability)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/BiasedTransformerPrograms/";
            },},{id: "projects-llm-homogenization-in-creative-writing",
          title: 'LLM Homogenization in Creative Writing',
          description: "investigating levels of homogenization by LLMs in creative writing and exploring methods to achieve human-like levels of stylistic and semantic diversity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LLMHomogenization/";
            },},{id: "projects-profile-kernel",
          title: 'Profile-Kernel',
          description: "a CLI tool to profile CUDA kernels and automatically identify performance bottlenecks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ProfileKernel/";
            },},{id: "projects-rotoslam",
          title: 'RotoSLAM',
          description: "improving SLAM scale consistency for rotational motion via depth estimation augmentation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RotoSLAM/";
            },},{id: "projects-video-reverse-engineering-in-frontier-foundation-models",
          title: 'Video Reverse-Engineering in Frontier Foundation Models',
          description: "an examination of modern foundation models’ visual analytical capabilities",
          section: "Projects",handler: () => {
              window.location.href = "/projects/VideoReverse-Engineering/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%72%6D%65%6E%6F%6E@%70%72%69%6E%63%65%74%6F%6E.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/A-Menon", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/arjun-menon-6b1079215", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=VVHPYe0AAAAJ", "_blank");
        },
      },];
