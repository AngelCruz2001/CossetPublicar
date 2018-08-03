"use strict";

var _require = require('./models/Productos'),
    modelProductos = _require.modelProductos;

var respuesta;
var BuscarProducto = function BuscarProducto(Producto) {
    return new Promise(function (resolve, reject) {
        modelProductos.find({ "$or": [{ Producto: Producto }, { Tipo: Producto }] }, { _id: 0 }, function (error, Productos) {
            if (error) {
                respuesta = error;
            } else {

                respuesta = Productos;
            }
            if (respuesta === undefined || respuesta === "") respuesta = "El producto que busca no esta en existencia";
            resolve(respuesta);
        });
    });
};
var BuscarProductoSE = function BuscarProductoSE() {
    return new Promise(function (resolve, reject) {
        modelProductos.find({}, function (error, Productos) {
            if (error) {
                respuesta = error;
            } else {
                respuesta = Productos;
            }
            if (respuesta === undefined || respuesta === "") respuesta = "El producto que busca no esta en existencia";
            resolve(respuesta);
        });
    });
};
exports.BP = async function (Producto) {
    var respuesta = await BuscarProducto(Producto);
    return respuesta;
};
exports.BuscarSE = async function () {
    var respuesta = await BuscarProductoSE();
    return respuesta;
};
//# sourceMappingURL=Consultas.js.map