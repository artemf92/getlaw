<template>
  <div class="events-wrapper">
    <div
      class="event"
      v-for="e in json"
      :key="e.eventId"
    >
      <div class="event__top">
        <img :src="`../images/photo${e.authorImg}.png`" alt="" class="user-photo">
        <p>{{e.authorName}}</p>
        <trash-icon />
        <span
          class="event__top--cat"
          :id="`event${e.eventType}`"
        >{{eventIs[e.eventType]}}</span>
        <span class="time">{{e.date | time}}</span>
      </div>
      <div class="event__body">
        <p v-if="e.eventType === 1">{{e.newContent}}</p>
        <p v-else-if="e.eventType === 2">
          <span class="e-green">«</span>{{e.newContent}}<span class="e-green">»</span>
        </p>
        <p v-else-if="e.eventType === 3">
          <span class="e-red">«</span>{{e.oldContent}}<span class="e-red">»</span><br>
          <span class="e-green">«</span>{{e.newContent}}<span class="e-green">»</span>
        </p>
        <p v-else-if="e.eventType === 4">
          <span class="e-red">«</span>{{e.oldContent}}<span class="e-red">»</span><br>
        </p>
      </div>
      <div class="event__bottom">
        <div class="">
          <comments-icon />
          <span class="comment">Добавить комментарий</span>
        </div>
        <div class="listphotos">
          <div
                class="listphotos-wrap"
                :data-status="value.status"
                v-for="(value, index) in e.team"
                :key="index"
              >
            <img
              :src="`../images/photo${value.authorId}.png`"
              alt=""
              class="user-photo"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trashIcon from '../icons/trash';
import commentsIcon from '../icons/comments';
import eventTypes from '../../lib/events';

export default {
  name: 'Events',
  components: {
    trashIcon, commentsIcon,
  },
  data() {
    return {
      json: [
        {
          eventID: 12,
          authorId: 1,
          authorName: 'Elena.M.B',
          authorImg: 1,
          eventType: 1,
          date: '2020-01-04T16:26:50.417Z',
          newContent: 'Мне кажется здеьсь не хватает данных по Физлицам',
          oldContent: null,
          team: [ {
              authorId: 1,
              status: 1,
            },
            {
              authorId: 2,
              status: 1,
            },
            {
              authorId: 3,
              status: 3,
            },
            {
              authorId: 4,
              status: 2,
            },

          ],
        },
        {
          eventID: 13,
          authorId: 1,
          authorName: 'Elena.M.B',
          authorImg: 1,
          eventType: 2,
          date: '2020-01-04T16:26:50.417Z',
          newContent: 'от указать дату',
          oldContent: null,
          team: [ {
              authorId: 1,
              status: 1,
            },
            {
              authorId: 2,
              status: 4,
            },
            {
              authorId: 3,
              status: 3,
            },
            {
              authorId: 4,
              status: 2,
            },

          ],
        },
        {
          eventID: 14,
          authorId: 1,
          authorName: 'Elena.M.B',
          authorImg: 1,
          eventType: 3,
          date: '2020-01-04T16:26:50.417Z',
          newContent: '№пунктаДоговора.',
          oldContent: '№ пункта Договора.',
          team: [ {
              authorId: 1,
              status: 1,
            },
            {
              authorId: 2,
              status: 1,
            },
            {
              authorId: 3,
              status: 3,
            },
            {
              authorId: 4,
              status: 2,
            },

          ],
        },
        {
          eventID: 15,
          authorId: 1,
          authorName: 'Elena.M.B',
          authorImg: 1,
          eventType: 4,
          date: '2020-01-04T16:26:50.417Z',
          newContent: null,
          oldContent: 'от указать дату',
          team: [ {
              authorId: 1,
              status: 1,
            },
            {
              authorId: 2,
              status: 1,
            },
            {
              authorId: 3,
              status: 3,
            },
            {
              authorId: 4,
              status: 2,
            },

          ],
        },
      ]
    }
  },
  computed: {
    eventIs() {
      return eventTypes;
    }
  },
  methods: {
  },
};
</script>

<style lang="scss">
.events-wrapper {
  margin-left: 16px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  row-gap: 8px;
  
  margin-top: 76px;
}
.event {
  width: 488px;
  padding: 12px 16px;
  background: #FFFFFF;
  border-radius: 4px;
  .user-photo {
    width: 24px !important;
    height: 24px !important;
  }
  p {
    font-family: "Source Sans Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #3A3F47;
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    &--cat {
      border-radius: 4px;
      font-style: normal;
      font-weight: 200;
      font-size: 16px;
      line-height: 20px;

      border-radius: 4px;
      padding: 0 8px;
      margin: 0 8px;
    }
  }
  &__bottom {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .listphotos {
      display: flex;

      .listphotos-wrap:first-child:after {
        width: 10.6px !important;
        height: 10.6px !important;
      }
    }
    .listphotos div {
      margin-right: 4px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
span.comment {
    font-size: 12px;
    color: #808080;
    font-style: normal;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    cursor: pointer;
}
.e-green {
  color: #4AC120;
}
.e-red {
  color: #FF5A5F;
}
#event1 {
  color: #FB8127;
  background: rgba(5, 139, 217, 0.1);
}
#event2 {
  background: rgba(74, 193, 32, 0.1);
  color: #4AC120;
}
#event3 {
  background: rgba(255, 146, 46, 0.1);
  color: #FF922E;
}
#event4 {
  background: rgba(255, 90, 95, 0.1);
  color: #FF5A5F;
}
[data-status] {
  position: relative;
  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 10.6px;
    height: 10.6px;
    bottom: 0;
    right: 0;
    background-repeat: no-repeat;
  }
}
[data-status='1']:after {
  background-image: url('../../../public/images/checked.png');
}
[data-status='2']:after {
  background-image: url('../../../public/images/pending.png');
}
[data-status='3']:after {
  background-image: url('../../../public/images/none.png');
}
[data-status='4']:after {
  background-image: url('../../../public/images/checked.png');
  filter:saturate(0)
}
</style>
