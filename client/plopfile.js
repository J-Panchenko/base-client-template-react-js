function requireField(fieldName) {
  return value => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
}

export default (plop) => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile:
          'plop-templates/Component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile:
          'plop-templates/Component/Component.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/index.ts',
        templateFile: 'plop-templates/injectable-index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
        validate: requireField('name')
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile:
          'plop-templates/Page/Page.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/pages/{{pascalCase name}}/{{pascalCase name}}.scss',
        templateFile:
          'plop-templates/Page/Page.scss.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Page/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/index.ts',
        templateFile: 'plop-templates/injectable-index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/pages/index.ts',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/pages/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  })
}
