<template>
    <div class="side-panel">


        <div class="side-panel bg-panel">
            <div class="panel-content h-screen">
                <div class="panel-top">
                    <div class="logo">
                        <img src="../../assets/logo.png" class="w-36" />
                    </div>
                    <div class="panel-text">

                        <div v-for="(item, i) in itemsTop" :key="i">
                            <div class="text-one  pt-6">

                                <router-link :to=item.path class="flex items-center">
                                    <div class="logo-one">
                                        <img :src=item.image class="w-4">
                                    </div>
                                    <div class="text-pt font-medium pl-4 text-sm" :class="{ active: currentPath == item.path }">
                                        {{ item.name }}</div>
                                </router-link>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel-bottom">


                    <div class="panel-text">
                        <div v-for="(item, i) in itemsBottom" :key="i">

                            <div class="text-one flex items-center pt-6">
                                <div class="logo-one">
                                    <img :src=item.image class="w-4">
                                </div>
                                <div class="text-pt font-medium pl-4 text-sm">{{ item.name }}</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
  
<script>
export default {
    name: 'ActionSidePanel',

    data() {
        return {
            currentPath: this.$route.path,
            itemsTop: [
                {
                    image: require('@/assets/grid.png'),
                    name: 'Dashboard',
                    path: '/collections'

                },
                {
                    image: require('@/assets/exchange.png'),
                    name: 'Trade',
                    path: '/nft'
                },
                {
                    image: require('@/assets/analys.png'),
                    name: 'Actions',
                    path: '/'
                },
                {
                    image: require('@/assets/wallet.png'),
                    name: 'Wallet',
                    path: '/wallet'
                },
                {
                    image: require('@/assets/images.png'),
                    name: 'NFT',
                    path: '/nft'
                },
            ],
            itemsBottom: [
                {
                    image: require('@/assets/earphone.png'),
                    name: 'Support'
                },
                {
                    image: require('@/assets/notification.png'),
                    name: 'Notification'
                },
                {
                    image: require('@/assets/info.png'),
                    name: 'InCrypto Info'
                },
                {
                    image: require('@/assets/user.jpeg'),
                    name: 'Dan Tourlan'
                }
            ]
        }
    },
    created() {
        this.updateCurrentPath() // Вызываем метод при создании компонента
    },
    watch: {
        '$route'() {
            this.updateCurrentPath() // Вызываем метод при изменении маршрута
        }
    },
    methods: {
        updateCurrentPath() {
            this.currentPath = this.$route.path
        }
    }
}
</script>
  
<style scoped>
.side-panel {
    width: 250px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    border-right: 1px solid #ccc;

}

.panel-content {
    padding: 20px;
    display: flex;
    flex-direction: column;

}

.panel-top {
    flex: 1 1 auto;

}

.panel-bottom {
    display: flex;

}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    margin-bottom: 10px;
    cursor: pointer;
}

.active {
    color: #fff;
}
</style>
  