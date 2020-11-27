export default {
    name: "TheProfCard",
    props: ["prof"],

    // data needs to be a function inside a component
    data: function() {
        return {
            myName: this.prof.name,
            myRole: this.prof.role,
            program:"IDP"
        }
    },

    template: 
        `<li @click="logClicked"> 
            <img :src="'images/' + prof.avatar" :alt='prof.name + " image"'>
            <p>My awesome Prof Name: {{prof.name}} </p>

            <a href="" class="remove-prof"> Show {{prof.name}} Prof name's Info</a>
            <a href="" class="remove-prof"> Remove {{prof.name}}</a> 
        </li>
        `,

    created: function() {
        console.log(`created ${this.prof.name}'s card`);
    },

    methods: {
        logClicked() {
            console.log(`fired from inside ${this.prof.name}'s the component!`);
        }
    }
}