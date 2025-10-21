const GITHUB_MYCELIUM_SDK = 'https://github.com/0xdeval/mycelium-sdk';
const DEMO_MYCELIUM_SDK = 'https://demo.mycelium.sh';
const DOCS_MYCELIUM_SDK = 'https://docs.mycelium.sh';

const CODE_HERO_SECTION = `import { Mycelium } from '@mycelium-sdk/core';

const sdk = new Mycelium({ apiKey: process.env.MYCELIUM_KEY });
await sdk.wallet.create({ email: 'andrew@designer.com' });
await sdk.wallet.earn({ amount: '100 USDC', currency: 'USDC' });
`;

export { GITHUB_MYCELIUM_SDK, DEMO_MYCELIUM_SDK, DOCS_MYCELIUM_SDK, CODE_HERO_SECTION };
