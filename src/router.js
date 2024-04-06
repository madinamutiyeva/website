import { createRouter, createWebHistory } from 'vue-router';
 import ActionPages from "./components/Action/ActionPages.vue";

import WalletPage from "./components/Wallet/WalletPage.vue"

import NftCollections from "./components/NftCollections/NftCollectionsPage.vue"
import NftPage from "./components/NFT/NftPage.vue"



const routes = [
  {
    path: '/',
    component: ActionPages
  },
  {
    path: '/wallet',
    component: WalletPage
  },
  {
    path: '/collections',
    component: NftCollections
  }
  ,
  {
    path: '/nft',
    component: NftPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; // Убедитесь, что вы экспортируете router