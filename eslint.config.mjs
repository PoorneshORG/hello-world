import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      // add custom rules here
    },
  },
]
AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCyEXAMPLEKEY"
OAUTH_TOKEN="ya29.a0AfH6SMC6nPz3w0bx8LlE_4p8OqXQZ3mN7EfnZIH61BoBDVgb-0Z9lMl2BzG_oMOM5Xf1Qs0AbqnnV3ealhAqkQyGG8"