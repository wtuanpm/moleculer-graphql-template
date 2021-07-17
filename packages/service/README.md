# Hello service

Mỗi **service** trong goby là một broker trong molecuer. Hello service chứa các microservice phục vụ chào hỏi ....

## Microservices

Với mỗi **service** sẽ chữa các microservice tương ứng là một Moleculer service. Dưới đây là các microservice trong Hello service

### Hello service

Sử dụng để chào hỏi

## How to start

Copy .env.tmp to .env

scripts

```bash
npm install

npm run dev
```

## Common scripts

```bash
# gen types from schema file (generated-graphql-types.ts)
npm run yarn gen:graphql:types

#or
yarn gen:graphql:types

# run project in dev mode
npm run dev
# or
yarn dev

# gennerate entities from database (database first)
npm run gen:entity
#or
yarn gen:entity

# build to javascript
npm run build
# or
yarn build

# deploy to stating
npm run deploy:staging
#or
yarn deploy:stating

```

## i18n

Translation module with https://www.npmjs.com/package/i18n#i18n__n

Config locales file in `src/locales/*.json` this have been loaded by i18n in `src/utils/i18n.ts` you can define more locale in this file and `locales` dir

#### How to use

Method `i18n.__n` and `i18n.__` is intergrated to the Moleculer context. You can using those by statement

```javascript
ctx.__('Account.Messages.Info.SayHello', { firstName: 'truc' });
```

## Code style, IDE

Goby sử dụng prettier với một config chung giữa các package được định nghĩa trên template này. Mục đích mang đến một format chung và được format hoàn toàn tự động.

Goby sử dụng visual studio code làm IDE chính với các extension được liệt kê dưới đây phục vụ cho auto format code.

- Editor config: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
- Prettier: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- GraphQL: https://marketplace.visualstudio.com/items?itemName=Prisma.vscode-graphql
- Code spell checker: https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

với settings.json

```
{
    "editor.formatOnSave": true
}
```

Việc này sẽ giúp code của bạn tự format khi save.

**_Lưu ý_**: commit settings.json nếu bạn thay đổi nó
