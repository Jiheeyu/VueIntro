import { fetchData } from "./components/DataMiner.js";

(() => {
    let  vue_vm = new Vue({
        // link vue to an element in our HTML
        // el: "#app",

        data: {
            message: "Hello from vue!",
            anotherMessage: "jihee",
            removeAformat: true,
            showBioData: true,

            profs : [],
            currentProfData: {}

            // profs : [
            //     {name: "Justin", role:"coordinator", nickname:"nitsuJ"},
            //     {name: "John", role:"prof", nickname:"super chill"},
            //     {name: "Joe", role:"prof", nickname:"nitsuJ"}
            // ]
        },

        //this is "mounted" lifecycle hook. vue is done creating itself, and has attacted itself to the 'app'div on the page.
        mounted: function() {
            console.log("Vue is mounted, trying to fetch call");

            fetchData("./includes/index.php").then(data => this.profs = data).catch(err => console.log(err));
            // may be you can try .then(data => {
            // data.forEach(prof => this.profs.push(prof))
            //})
            
        },

        // run a method when we change our view (update DOM with vue)
        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            clickHeader() {
                console.log("header")
            },

            showProf(target) {
                // remove this prof from professors array
                console.log('click to view prof bio data', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the vue instance itself by default

                // toggle the property between true an false using a ternary statement
                this.showBioData = this.showBioData ? false : true;

                // make the selected profs data visible
                this.currentProfData = target;
            },

            removeProf(target) {
                console.log('click to view prof bio data', target, target.name);

                //this.profs.splice(this.profs.indexOf(target),1);
                this.$delete(this.profs, target);
            }
        }

    }).$mount("#app"); // also connect Vue to your wrapper in HTML
})();