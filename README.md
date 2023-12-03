# Example of enabling TS/ES lint + prettier + TS config

VSCode settings are somewhat important, specifically the `formatter` options. When you open index.js and index.ts in VSCode, you will see the lint errors immediately. The lint rules can be customized in `.eslintrc`. Notice that there are specific `devDependencies` that must be installed as well. The `tsconfig` will also give errors to the file as well. This should be independent from the TS/ES lint + prettier errors.

# Compile

Compile the TS code using `tsc index.ts`.
