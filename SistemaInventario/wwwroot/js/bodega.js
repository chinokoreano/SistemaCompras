var datable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    datatable = $('#tblDatos').Datatable({
        "ajax" {
            "url":"/Admin/Bodega/ObtenerTodos"
        },
        "columns": [
            { "data": "nombre", "width": "20%" },
            { "data": "descripcion", "width": "40%" },
            { "data": "estado", "width": "20%" },
            {
                "data": "id",
                "render": function (data) {
                    return `

                    `
                }
            }
        ]
    });
}