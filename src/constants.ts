const GITHUB_MYCELIUM_SDK = 'https://github.com/0xdeval/mycelium-sdk';
const DEMO_MYCELIUM_SDK = 'https://demo.mycelium.sh';
const DOCS_MYCELIUM_SDK = 'https://docs.mycelium.sh';

const CODE_HERO_SECTION = `import { MyceliumSDK } from "@mycelium-sdk/core";

const sdk = new MyceliumSDK({...});
const w = await sdk.wallet.createWallet("user@mail.com");
await w.earn("100");
`;

export {
  GITHUB_MYCELIUM_SDK,
  DEMO_MYCELIUM_SDK,
  DOCS_MYCELIUM_SDK,
  CODE_HERO_SECTION,
};
