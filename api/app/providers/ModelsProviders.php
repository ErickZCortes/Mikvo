<?php
    $container['UserModel'] = function($container){
        return new app\Models\UserModel($container);
    };
    $container['RouterModel'] = function($container){
        return new app\Models\RouterModel($container);
    };
    $container['VoucherModel'] = function($container){
        return new app\Models\VoucherModel($container);
    };
    $container['ProfileModel'] = function($container){
        return new app\Models\ProfileModel($container);
    };

?>