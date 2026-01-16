import nextConfig from 'eslint-config-next';

export default [
  ...nextConfig,
  {
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
];
