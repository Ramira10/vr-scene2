AFRAME.registerComponent('on-mouseenter', {
    schema: {
        scale: { default: '1.5 1.5 1.5', type: 'string' }
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        this.el.addEventListener('click', function () {
            alert('Caliz')
        });
    }
});


