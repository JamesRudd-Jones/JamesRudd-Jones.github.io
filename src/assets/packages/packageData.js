// src/data/packageData.js
export const allPackages = [
        {
          id: '4',
          title: 'Jax Model-Based RL',
          abstract: "A centralised location for a wide range of SOTA Model-Based RL algorithms. Although Jax is less amenable here than in Model-Free methods \
          the speed-ups are still significant. ",
          codeLink: "https://github.com/JamesRudd-Jones/JaxModel-BasedRL",
          image: require('../images/aamas_paper_image.png'), 
        },
        {
          id: '3',
          title: 'Jax Multi-Agent RL',
          abstract: "Jax based repository containing a wide range of MARL approaches. The use of Jax enables incredible computational speed-ups compared to \
          traditional approaches. Focuses on decentralised Multi-Agent RL algorithms but is also able to benchmark centralised MARL and Single-Agent RL algorithms.",
          codeLink: 'https://github.com/JamesRudd-Jones/JaxMulti-AgentRL',
          image: require('../images/water_gif.gif'),
        },
        {
          id: '2',
          title: 'Wind Chime Length Calculation',
          abstract: "Knapsack type problem to calculate the cutting dimensions of a set scale of notes for a wind chime from a set length of rods. Can also \
          calculate the highest and lowest version of a scale given the array of rods available. An essential part of any custom wind chime design.",
          codeLink: 'https://github.com/JamesRudd-Jones/windchime_length_calc',
          image: require('../images/wind_chimes.gif'),
        },
        {
          id: '1',
          title: 'Multi-Agent Reinforcement Learning to Generate Fluid Flows',
          abstract: "Repository from my 3rd year thesis.  An application of MARL \
          within a Lagrangian based particle fluid simulator in which the algorithm begun to learn and implement divergence free fluid flow.",
          codeLink: 'https://github.com/JamesRudd-Jones/IP_Simple_Pygame_Fluid_Sim',
          image: require('../images/og_div_flow_field.png'),
        },
        {
          id: '0',
          title: 'RL 2D Sailing',
          abstract: "A simple 2D sailing environment using RL to control a sailboat round the course. The environment is designed to be simple and easy to use with much \
          scope for improvement.",
          codeLink: 'https://github.com/JamesRudd-Jones/Reinforcement-Learning-2d-Sailing',
          image: require('../images/better_one_2.gif'),
        },
      ];