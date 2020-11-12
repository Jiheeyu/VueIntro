const myVM = (() => {
    let  vue_vm = new Vue({
        // link vue to an element in our HTML
        el: "#app",

        data: {
            message: "Hello from vue!",
            anotherMessage: "jihee",

            profs : [
                {name: "Justin", role:"coordinator", nickname:"nitsuJ"},
                {name: "John", role:"prof", nickname:"super chill"},
                {name: "Joe", role:"prof", nickname:"nitsuJ"}
            ]
        },

        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },

            clickHeader() {
                console.log("header")
            }
        }

    }).$mount("#app"); // also connect Vue to your wrapper in HTML
})();