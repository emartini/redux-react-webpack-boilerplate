module.exports = {
    'extends': 'airbnb',
    'plugins': [
        'react',
        'jsx-a11y',
        'import',
        'chai-expect'
    ],
    'globals': {},
    'env': {
      'browser': true,
      'node': true,
      'mocha': true
    },
    'rules': {
      'arrow-parens': 0,
      'comma-dangle': 0,
      'arrow-body-style' : [2, 'as-needed'],
      'arrow-parens' : 0,
      'quotes': [2, 'single'],
      'prefer-spread': 0,
      'prefer-rest-params': 0,
      'func-names': 0,
      'import/no-unresolved': 0,
      'no-underscore-dangle': 0,
      'no-param-reassign': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-extraneous-dependencies': ['error', {'devDependencies': true, 'optionalDependencies': false, 'peerDependencies': false}],
      'new-cap': [2, {'capIsNewExceptions': ['Map', 'Set', 'List']}],
      'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    }
};
