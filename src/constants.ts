const GITHUB_MYCELIUM_SDK = 'https://github.com/MyceliumSDK/mycelium-sdk';
const API_KEY_FORM_MYCELIUM_SDK =
  'https://airtable.com/appdAzctTXEwlEoYw/pagJESMXBAT2GTTRA/form';
const DOCS_MYCELIUM_SDK = 'https://docs.mycelium.sh';

const CODE_HERO_SECTION = `import { MyceliumSDK } from "@mycelium-sdk/core";

const sdk = await MyceliumSDK.init({...});
const vaults = await sdk.protocols.getBestVaults());
`;

export {
  GITHUB_MYCELIUM_SDK,
  API_KEY_FORM_MYCELIUM_SDK,
  DOCS_MYCELIUM_SDK,
  CODE_HERO_SECTION,
};
