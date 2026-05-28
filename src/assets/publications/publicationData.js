// src/data/publicationsData.js
export const allPublications = [
        {
          id: '0',
          title: 'On Distributional Reinforcement Learning in Chaotic Dynamical Systems',
          authors: 'James Rudd-Jones, Mirco Musolesi, María Pérez-Ortiz',
          conference: "arXiv preprint",
          paperLink: "",
          image: require('../images/double_gyre_flow_2d_landscape_plots_new-1.png'), 
        },
        {
          id: '1',
          title: 'An Agent-Centric Dynamical Systems Perspective on Multi-Agent Reinforcement Learning',
          authors: 'James Rudd-Jones, María Pérez-Ortiz, Mirco Musolesi',
          conference: "Reinforcement Learning Conference (RLC'2026)",
          paperLink: "",
          image: require('../images/EXP5_5_hyperparms_sweeps_recurrence-1-1.png'), 
        },
        {
          id: '2',
          title: 'Multi-Agent Reinforcement Learning Simulation for Environmental Policy Synthesis',
          authors: 'James Rudd-Jones, Mirco Musolesi, María Pérez-Ortiz',
          conference: "24th International Conference on Autonomous Agents and Multiagent Systems Blue Sky Ideas Track (AAMAS'2025)",
          paperLink: "https://dl.acm.org/doi/abs/10.5555/3709347.3744041",
          image: require('../images/aamas_paper_image.png'), 
        },
        {
          id: '3',
          title: 'Crafting Desirable Climate Trajectories with RL Explored Socio-Environmental Simulations',
          authors: 'James Rudd-Jones, Fiona Thendean, María Pérez-Ortiz',
          journal: 'Environmental Data Science (EDS) Journal 2025',
          year: 2022,
          paperLink: 'https://www.cambridge.org/core/journals/environmental-data-science/article/crafting-desirable-climate-trajectories-with-reinforcement-learning-explored-socioenvironmental-simulations/8D0AF74D262AB2FAC25F08B99CC9860D',
          codeLink: 'https://github.com/JamesRudd-Jones/multi_agent_climate_pathways',
          // posterLink: '#',
          // bibtexLink: '#',
          image: require('../images/eds_paper_image.png'),
        },
      ];