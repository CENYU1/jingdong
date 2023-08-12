<template>
  <div class="shop">
    <div v-for="item in shop" :key="item.id" class="shop-wrapper">
      <div class="img-container">
        <img :src="item.imgUrl" class="img-item" />
      </div>
      <div class="slogan">
        <span>
          {{ item.slogan }}
        </span>
      </div>
      <div class="supermarket">
        <span>
          {{ item.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  data() {
    return {
      colunm: 2,
      columnGap: 10,
      shop: [
        {
          id: 1,
          name: '沃尔玛',
          slogan: 'wodmaksjnfdfhbsdxhkfhjkdznfkjdsnfj',
          imgUrl:
            'https://images.pexels.com/photos/8051987/pexels-photo-8051987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 2,
          name: '沃尔玛',
          slogan: '你好',
          imgUrl:
            'https://images.pexels.com/photos/10269916/pexels-photo-10269916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        /* {
          id: 3,
          name: '沃尔玛',
          slogan: 'wodmaksjnfdfhbsdxhkfhjkdznfkjdsnfj',
          imgUrl:
            'https://images.pexels.com/photos/8051987/pexels-photo-8051987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 4,
          name: '沃尔玛',
          slogan: 'wodmaksjnfdfhbsdxhkfhjkdznfkjdsnfj',
          imgUrl:
            'https://images.pexels.com/photos/9437675/pexels-photo-9437675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 5,
          name: '沃尔玛',
          slogan: 'wodmaksjnfdfhbsdxhkfhjkdznfkjdsnfj',
          imgUrl:
            'https://images.pexels.com/photos/9437675/pexels-photo-9437675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        } */
      ]
    }
  },
  methods: {
    getColumnWidth() {
      return (
        (document.getElementsByClassName('shop')[0].offsetWidth -
          this.columnGap) /
          2 /
          100 +
        'rem'
      )
    },
    getItemLocation() {
      const items = document.getElementsByClassName('shop-wrapper')
      const columnWidth = this.getColumnWidth()
      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        item.style.position = 'absolute'
        item.style.width = columnWidth
        if (i < this.colunm) {
          item.style.top = '0rem'
          item.style.left =
            Number(i * (item.offsetWidth + this.columnGap)) / 100 + 'rem'
          console.log(item.style.top)
          console.log(item.style.left)
        }
      }
    }
  },
  mounted() {
    this.getItemLocation()
  }
}
</script>

<style lang="scss" scoped>
@import '../style/viriables.scss';
.shop {
  position: relative;
  .shop-wrapper {
    width: 1.645rem;
    margin-bottom: 0.2rem;
    .img-container {
      .img-item {
        width: 100%;
        height: 100%;
        border-radius: 8%;
      }
    }
    .slogan {
      width: 100%;
      overflow: hidden;
    }
    .supermarket {
      font-size: 0.16rem;
    }
  }
  .shop-wrapper:nth-child(2n + 1) {
    margin-right: 0.1rem;
  }
}
</style>
