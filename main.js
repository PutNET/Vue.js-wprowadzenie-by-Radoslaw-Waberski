Vue.component('custom-component', {
    template: '<p>this is my first vue component<p>'
})

const data = { counter: 0 };
Vue.component('lame-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    data() {
      return data
    }
  });

Vue.component('pro-counter', {
    template: '<button @click="counter += 1">{{ counter }}</button>',
    data() {
        return {
            counter: 0
        }
    }
});

Vue.component('emit-counter', {
    template: '<button @click="incrementCounter">{{ counter }}</button>',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter() {
            this.counter++;
            this.$emit('increment');
        }
    }
});

Vue.component('child', {
    template: '<p>i got it from my daddy: {{ present }}</p>',
    props: ['present']
})

Vue.component('fieldset-custom', {
    template: `
    <fieldset>
        <legend>{{ title }}</legend>
        <a :href="source" target="blank">{{ source }}</a>
    </fieldset>
    `,

    props: [
        'source',
        'title'
    ]
});

const app = new Vue({
    el: '#app',
    data() {
        return {
            hello: 'hello from vue',
            condition: {
                if: false,
                show: false
            },
            todo: [],
            model: 'placeholder',
            fieldset: {
                title: 'v-bind sample',
                source: 'https://www.google.pl/'
            },
            total: 0,
            emergencyInstructions: ['lie down', 'try not to cry', 'cry a lot']
        }
    },

    methods: {
        hi() {
            this.hello = 'Oh, hi Mark.';
        },

        onClick() {
            alert('handle click');
        },

        incrementTotal() {
            this.total++;
        }
    }
})

