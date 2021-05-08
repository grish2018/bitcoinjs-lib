var test = process.argv[0] == 'test' ? true : false


module.exports = {
    compilerOptions: {
      target: "ES2015",
      module: "commonjs",
      outDir: test ? "./src/test" : "./src/production",
      declaration: true,
      declarationDir: "./types",
      rootDir: "./ts_src",
      types: [
        "node"
      ],
      allowJs: false,
      strict: true,
      noImplicitAny: true,
      strictNullChecks: true,
      strictFunctionTypes: true,
      strictBindCallApply: true,
      strictPropertyInitialization: true,
      noImplicitThis: true,
      alwaysStrict: true,
      esModuleInterop: false,
      noUnusedLocals: true,
      noUnusedParameters: true
    },
    include: [
        "ts_src/**/*.ts"
    ],
    exclude: [
        "**/*.spec.ts",
        "node_modules/**/*"
    ]
}
  