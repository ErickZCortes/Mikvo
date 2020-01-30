<?php 
    //Se agregan los controllers al contexto de la app (container)
    $container['UserController'] = function($container) {
        return new app\Controllers\UserController($container);
    };
    $container['RouterController'] = function($container) {
        return new app\Controllers\RouterController($container);
    };
    $container['VoucherController'] = function($container) {
        return new app\Controllers\VoucherController($container);
    };
    $container['ProfileController'] = function($container) {
        return new app\Controllers\ProfileController($container);
    };
?>