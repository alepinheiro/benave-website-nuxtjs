// eslint.config.mjs
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginAccessibility from 'eslint-plugin-jsx-a11y'

export default withNuxt([
  {
    // Configurações globais
    ignores: [
      '**/node_modules/**',
      '.nuxt/**',
      'dist/**'
    ],
  },
  {
    // Regras de Vue
    ...pluginVue.configs['flat/recommended'],
    rules: {
      'vue/multi-word-component-names': 'error',
      'vue/no-reserved-component-names': 'error',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/html-self-closing-tags': 'error',
    }
  },
  {
    // Regras de Acessibilidade
    plugins: {
      'jsx-a11y': eslintPluginAccessibility
    },
    rules: {
      // Regras de acessibilidade para Vue
      'vue/no-static-inline-styles': 'warn', // Evita estilos inline
      'vue/attributes-order': ['error', {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS'
        ]
      }],

      // Regras de acessibilidade do jsx-a11y adaptadas para Vue
      'jsx-a11y/alt-text': 'error', // Garante alt em imagens
      'jsx-a11y/aria-role': 'error', // Valida atributos ARIA
      'jsx-a11y/heading-has-content': 'error', // Cabeçalhos devem ter conteúdo
      'jsx-a11y/no-static-element-interactions': 'warn', // Evita interações em elementos estáticos
      'jsx-a11y/click-events-have-key-events': 'warn', // Eventos de clique devem ter eventos de teclado
    }
  },
  {
    // Regras de TypeScript
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }]
    }
  },
  {
    // Regras de Performance e Boas Práticas
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',
      'complexity': ['warn', 10], // Limite de complexidade ciclomática
      'max-lines-per-function': ['warn', 50], // Limita tamanho de funções
      'max-depth': ['warn', 4], // Limita profundidade de aninhamento
    }
  }
])