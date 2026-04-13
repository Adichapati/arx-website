import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextVitals,
  {
    rules: {
      // Preserve existing project behavior while using ESLint v9 flat config.
      // These rules became stricter with newer react-hooks plugin defaults.
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/purity': 'off',
    },
  },
];

export default config;
