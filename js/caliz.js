AFRAME.registerComponent('on-mouseenter', {
    schema: {},

    init: function () {
        var data = this.data;
        var el = this.el;

        this.el.addEventListener('click', function () {
            var isVisible = el.getAttribute('visible');

            // Verificar el valor de la propiedad "visible"
            if (isVisible.toString() === 'true') {
                var modalContent = `
    <div style="text-align: center;">
      <h1>Catedral de Nuestra Señora del Rosario (Paraná)</h1>
      <img src="https://4.bp.blogspot.com/-22kpah68LaM/VtM0Nj1KunI/AAAAAAAAcUI/6oMU4WIc6EM/s1600/042_42.jpg" style="width: 100%;">
    </div>
  `
                // Mostrar el modal informativo
                Swal.fire({
                    html: modalContent,
                    showCloseButton: true,
                    showConfirmButton: false,
                });
            }
        });
    }
});

