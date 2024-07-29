This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```
urstyle
├─ .env
├─ .eslintrc.json
├─ app
│  ├─ (protected)
│  │  └─ admin
│  │     ├─ layout.tsx
│  │     └─ product
│  │        ├─ page.tsx
│  │        ├─ productadd
│  │        │  └─ page.tsx
│  │        ├─ productfetch
│  │        │  └─ page.tsx
│  │        └─ productUpdate
│  │           ├─ page.tsx
│  │           └─ [index]
│  │              └─ page.tsx
│  ├─ (unprotected)
│  │  ├─ details
│  │  │  ├─ page.tsx
│  │  │  └─ [index]
│  │  │     └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ moredetails
│  │  │  ├─ page.tsx
│  │  │  └─ [...productid]
│  │  │     └─ page.tsx
│  │  ├─ signin
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ signout
│  │  │  └─ [url]
│  │  │     └─ page.tsx
│  │  └─ signup
│  │     ├─ layout.tsx
│  │     └─ page.tsx
│  ├─ api
│  │  └─ trpc
│  │     └─ [trpc]
│  │        └─ route.ts
│  ├─ config.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components
│  ├─ admin
│  │  └─ product
│  │     ├─ productadd
│  │     │  └─ productAdd.tsx
│  │     ├─ productFetch
│  │     │  └─ productFetch.tsx
│  │     ├─ productFunctions
│  │     │  ├─ apiFetchProducts.ts
│  │     │  ├─ apiUpdateProduct.ts
│  │     │  ├─ apiUploadProducts.ts
│  │     │  ├─ fetchDataFun.ts
│  │     │  └─ postApiCall.ts
│  │     ├─ productUpdate
│  │     │  └─ productUpdate.tsx
│  │     └─ productutils
│  │        ├─ forms
│  │        │  ├─ productAffiandCateg.tsx
│  │        │  ├─ productArchieve.tsx
│  │        │  ├─ productDetailTable.tsx
│  │        │  ├─ productHeader.tsx
│  │        │  ├─ productImage.tsx
│  │        │  ├─ productnamedespridetails.tsx
│  │        │  └─ productStatus.tsx
│  │        ├─ layout
│  │        │  ├─ breadCrumbsList.tsx
│  │        │  ├─ dropDownMenu.tsx
│  │        │  ├─ sideToolTip.tsx
│  │        │  ├─ statusandFilter.tsx
│  │        │  └─ toggleSideToolTip.tsx
│  │        └─ productServices
│  │           └─ productDataInterface.ts
│  ├─ authentications
│  │  ├─ authfunction
│  │  │  ├─ apiSignin.ts
│  │  │  └─ apiSignup.ts
│  │  ├─ ContextCountryCode.js
│  │  ├─ Countrycode.js
│  │  ├─ deleteuser.js
│  │  ├─ OtpInput.tsx
│  │  ├─ Signin.js
│  │  ├─ Signout.js
│  │  └─ Signup.js
│  ├─ details
│  │
│  ├─ helpers
│  │  ├─ getcookie.js
│  │  ├─ getToken.ts
│  │  └─ zustand.ts
│  ├─ home
│  │  ├─ benefits
│  │  │  └─ Benefit.tsx
│  │  └─ pairing
│  │    
│  ├─ layout
│  │ 
├─ components.json
├─ Data
│  
├─ env.js
├─ jest.config.js
├─ lib
│  └─ utils.ts
├─ middleware.js
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ README.md
├─ server
│  └─ api
│     ├─ root.ts
│     ├─ routers
│     │  └─ post.ts
│     └─ trpc.ts
├─ tailwind.config.ts
├─ trash
│  └─ config.ts
├─ trpc
│  ├─ query-client.ts
│  ├─ react.tsx
│  └─ server.ts
├─ tsconfig-schema.json
└─ tsconfig.json

```