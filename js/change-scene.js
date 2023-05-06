AFRAME.registerComponent('change-scene', {
    schema: {
        sky: { type: 'string' },
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        this.el.addEventListener("mouseenter", function () {
            var parentEntity = el.parentNode;
            var grandParentEntity = parentEntity.parentNode;

            var thisAPlane = parentEntity.querySelector("a-plane");
            thisAPlane.classList.remove("options");

            var allAPlane = grandParentEntity.querySelectorAll("a-plane");
            Object.keys(allAPlane).forEach(function (key) {
                if (allAPlane[key] != thisAPlane) {
                    allAPlane[key].classList.add("options");
                }
            });

            if (data.img === "#interior2") {
                var allAImage = grandParentEntity.querySelectorAll("a-image");
                Object.keys(allAImage).forEach(function (key) {
                    allAImage[key].setAttribute("visible", "true");
                });
            } else {
                var allAImage = grandParentEntity.querySelectorAll("a-image");
                Object.keys(allAImage).forEach(function (key) {
                    allAImage[key].setAttribute("visible", "false");
                });
            }

            var allABox = grandParentEntity.querySelectorAll("a-box");
            Object.keys(allABox).forEach(function (key) {
                allABox[key].setAttribute("visible", "false");
            });

            var parentEntityABox = parentEntity.querySelector("a-box");
            parentEntityABox.setAttribute("visible", "true");

            var allAText = grandParentEntity.querySelectorAll("a-text");
            Object.keys(allAText).forEach(function (key) {
                allAText[key].setAttribute("color", "gray")
            })

            var aText = thisAPlane.querySelector("a-text");
            if (aText) aText.setAttribute("color", "red");

            var sky = document.querySelector("#sky");
            sky.setAttribute("src", data.img)
        });
    }
});