// src/data/publicationsData.js
export const allPublications = [
        {
          id: '1',
          title: 'Multi-Agent Reinforcement Learning Simulation for Environmental Policy Syntehsis',
          authors: 'James Rudd-Jones, Mirco Musolesi, María Pérez-Ortiz',
          conference: "24th International Conference on Autonomous Agents and Multiagent Systems Blue Sky Ideas Track (AAMAS'2025)",
          // paperLink: "#",
          image: require('../images/aamas_paper_image.png'), 
        },
        {
          id: '0',
          title: 'Crafting Desirable Climate Trajectories with RL Explored Socio-Environmental Simulations',
          authors: 'James Rudd-Jones, Fiona Thendean, María Pérez-Ortiz',
          journal: 'Environmental Data Science (EDS) Journal 2025',
          year: 2022,
          paperLink: 'https://arxiv.org/abs/2410.07287',
          codeLink: 'https://github.com/JamesRudd-Jones/multi_agent_climate_pathways',
          // posterLink: '#',
          // bibtexLink: '#',
          image: require('../images/eds_paper_image.png'),
        },
        // ... more publications
      ];