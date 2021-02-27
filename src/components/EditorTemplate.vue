<template>
  <div class="editor">
    <div class="editor__head">
      <div class="left-block"><h-1Edit/><h-2Edit/><h-3Edit/><boldEdit/><italicEdit/><ulEdit/><olEdit/><imageEdit/><linkEdit/></div>
      <div class="right-block">
        <figure v-for="n in pages"
        :key="n"
        :data-page="n"
        :class=" currentPage === n ? 'current' : ''"
        @click="current(n)"
        >
          <svg width="22" height="31" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30.5H2C1.17157 30.5 0.5 29.8284 0.5 29V2C0.5 1.17157 1.17157 0.5 2 0.5H11.8536C12.256 0.5 12.6415 0.661665 12.9235 0.948673L13.2781 0.600236L12.9235 0.948673L21.0699 9.23908C21.3456 9.51959 21.5 9.89713 21.5 10.2904V29C21.5 29.8284 20.8284 30.5 20 30.5Z" fill="white" stroke="#BEBEBE"/>
            <path d="M12 10H22L12 0V10Z" fill="#BEBEBE"/>
          </svg>
          <span>{{n}}</span>
        </figure>

        <figure @click="pages++">
          <svg width="22" height="31" viewBox="0 0 22 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 30.5H2C1.17157 30.5 0.5 29.8284 0.5 29V2C0.5 1.17157 1.17157 0.5 2 0.5H11.8536C12.256 0.5 12.6415 0.661665 12.9235 0.948673L21.0699 9.23908C21.3456 9.51959 21.5 9.89713 21.5 10.2904V29C21.5 29.8284 20.8284 30.5 20 30.5Z" fill="white" stroke="#BEBEBE"/>
            <path d="M10.4794 21.336V18.216H7.56744V17.224H10.4794V14.104H11.5194V17.224H14.4314V18.216H11.5194V21.336H10.4794Z" fill="#BEBEBE"/>
            <path d="M12 10H22L12 0V10Z" fill="#BEBEBE"/>
          </svg>
        </figure>
      </div>
    </div>
    <div class="editor__body">
      <p class="editor-h1">Тестовый договор №<span class="highlight h-red">указать номер</span> от указать дату</p>
      <ol>
        <li>Это тестовый договор (далее – Договор). Он создан для проверки работоспособности и тестирования удобства пользования сервисом Getlaw.</li>
        <li>Договором предусмотрен выбор указать кол-во условий условия, указанного в п. указать № пункта Договора.</li>
        <li><span class="dotted">Условие, указанное в настоящем пункте, основывается на текстовом блоке А.</span></li>
        <li><span class="dotted">Условие, указанное в настоящем пункте, основывается на текстовом блоке Б и действует до <span class="highlight h-red">указать дату.</span></span></li>
        <li>Настоящий договор состоит из 4 пунктов.</li>
      </ol>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam ratione libero voluptate. Tempora, provident impedit cumque unde pariatur facilis accusantium, consequuntur repellendus laudantium in deleniti. Incidunt commodi, est aliquam voluptatum quasi quas illo iure officia corrupti porro ratione et quos, illum sunt velit voluptates eaque veritatis ex provident id minima. Accusantium fugit beatae ab, alias facere blanditiis mollitia, quo molestiae quasi nesciunt cum cumque expedita totam excepturi et quae id! Error odio, accusamus delectus, deserunt molestias modi eos ut minima repellat alias illum voluptas. Cum quo harum nulla quaerat dolorum perspiciatis consequuntur ab saepe placeat quas minus velit ipsum ea veritatis quibusdam eos modi labore nobis maiores assumenda, laboriosam voluptatem a facilis? Eligendi quam illo unde mollitia alias dolor praesentium dolore quasi fugiat molestias. Eligendi amet consectetur ex quidem velit tempora praesentium? Provident qui autem perferendis aut deserunt unde ratione ab architecto obcaecati ipsam. Ab facere et tempore autem repellat dolore recusandae iste maxime fuga eos architecto, suscipit velit, sed consequuntur odio aperiam! Consequatur quasi voluptatum vitae dignissimos aliquid illum soluta expedita aspernatur iusto, eum impedit nemo veniam suscipit eaque fuga omnis accusamus voluptatibus ad temporibus quibusdam quia maiores quaerat in? Nemo repellat laudantium sit harum? Aut, iusto? Dolorem quaerat ipsam consequuntur accusamus ratione in eos minus, earum modi. Iusto hic unde deserunt magni a aliquam excepturi nesciunt, ducimus cupiditate quisquam necessitatibus fugiat, est asperiores atque suscipit dolore minus reprehenderit aut ad iure soluta odio nam ullam. Odit vero, cum quia, laudantium, maiores odio deleniti velit minus sapiente error eos. Eos aliquid, consectetur, tenetur deserunt ipsa quibusdam labore rem hic sed molestiae sequi ullam reiciendis culpa debitis libero enim, accusantium tempore non excepturi. Similique vitae assumenda aperiam, blanditiis repellendus nobis asperiores, tenetur dolores exercitationem ut dolore. Beatae ab aliquid, sit ratione accusamus hic nulla non necessitatibus consequuntur molestias, quaerat unde error consectetur eveniet porro distinctio ipsum est quos saepe dolor omnis? Atque unde quidem repellendus! Aut ex esse adipisci quae voluptas odio culpa, soluta impedit, ad vitae sed rem magni tenetur accusantium ullam autem ut aliquid a sequi qui voluptatem fugiat! Doloribus, fugiat dignissimos. Nobis pariatur assumenda fugit quisquam recusandae quod accusantium, sunt repudiandae, eos necessitatibus delectus, laboriosam explicabo? Unde est repudiandae illum ut et, porro animi? Ipsa veniam voluptates commodi, tempora impedit nobis dicta. Omnis natus labore vitae dolor corrupti similique eos commodi unde aperiam animi accusantium recusandae, dolores illum tenetur architecto impedit fuga sequi quas ipsam amet esse error ut! Vitae, exercitationem sint? Ipsa, consequatur illo ducimus voluptas, laborum porro quae dolor sequi quisquam dolore odio excepturi aliquam incidunt voluptatibus at eum quaerat dolores fugiat deleniti? Laborum omnis esse ex officia, modi et cupiditate mollitia quis magni distinctio labore, commodi qui non amet hic velit unde sed consequuntur odio. Ipsum dicta magni sunt laudantium molestiae. Quaerat maxime odit dolorum eum consequatur fugiat aperiam reiciendis, accusamus deserunt perferendis, quia voluptatem provident reprehenderit vel a. Ab aliquid voluptates non adipisci dolorem corporis voluptatum eos dignissimos distinctio reiciendis magnam, perferendis veniam aperiam. Quod iste sequi perspiciatis nulla minus, quidem sit nihil!</p>
    </div>
  </div>
</template>

<script>
import h1Edit from '../components/icons/editor/h1';
import h2Edit from '../components/icons/editor/h2';
import h3Edit from '../components/icons/editor/h3';
import boldEdit from '../components/icons/editor/bold';
import italicEdit from '../components/icons/editor/italic';
import linkEdit from '../components/icons/editor/link';
import olEdit from '../components/icons/editor/ol';
import ulEdit from '../components/icons/editor/ul';
import imageEdit from '../components/icons/editor/image';

export default {
  name: 'EditorTemplate',
  components: {
    h1Edit, h2Edit, h3Edit, boldEdit, 
    italicEdit, imageEdit, linkEdit, 
    olEdit, ulEdit
  },
  data() {
    return {
      pages: 2,
      currentPage: 1,
    }
  },
  methods: {
    current(num) {
      return this.currentPage = num;
    },
  },
};
</script>

<style lang="scss" scoped>
figure[data-page] {
  position: relative;
  span {
    position: absolute;
    top: 25%;
    left: 30%;
  }
}
figure[data-page].current {
  svg path:first-of-type {
    stroke: #FB8127;
  }
  svg path:last-of-type {
    fill: #FB8127;
  }
}
.highlight {
  border-radius: 2px;
}
span.h-green {
  background-color: rgba(74, 193, 32, .1);
  color: rgba(74, 193, 32, 1);
}
span.h-red {
  background-color: rgba(252, 116, 118, .1);
  color: rgba(252, 116, 118, 1);
}
span.h-orange {
  background-color: rgba(255, 146, 46, .1);;
  color: rgba(255, 146, 46, 1);
}
.dotted {
  border: 1px dotted #857BF9;
  border-radius: 4px;
}
</style>
