const myVM = (() => {
    let  vue_vm = new Vue({
        // link vue to an element in our HTML
        // el: "#app",

        data: {
            message: "Hello from vue!",
            anotherMessage: "jihee",
            removeAformat: true,
            showBioData: true,

            profs : [
                {name: "Justin", role:"coordinator", nickname:"nitsuJ"},
                {name: "John", role:"prof", nickname:"super chill"},
                {name: "Joe", role:"prof", nickname:"nitsuJ"}
            ]
        },

        //this is "mounted" lifecycle hook. vue is done creating itself, and has attacted itself to the 'app'div on the page.
        mounted: function() {
            console.log("Vue is mounted!");

            this.profs.push({name: "Jarrod", role: "supermodel prof", nickname: "Zoolander"});
            
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

            removeProf(target) {
                // remove this prof from professors array
                console.log('click to remove prof', target, target.name);
                // the "this" keyword inside a vue instance REFERS to the vue instance itself by default

                // toggle the property between true an false using a ternary statement
                this.showBioData = this.showBioData ? false : true
            }
        }

    }).$mount("#app"); // also connect Vue to your wrapper in HTML
})();