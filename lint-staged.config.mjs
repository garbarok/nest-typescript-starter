export default {
  'src/**/*.ts': ['eslint --fix --no-ignore', 'vitest related --run'],
  '*.{md,json}': ['prettier --write'],
  '*.{yml,yaml}': ['prettier --write'],
};
