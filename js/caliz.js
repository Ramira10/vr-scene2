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
      <img src="../assets/Interior.jpg" style="width: 100%;">
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

