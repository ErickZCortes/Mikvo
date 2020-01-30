<?php
    $app->get('/vouchers', 'VoucherController:selectVouchers');
    $app->post('/vouchers', 'VoucherController:insertVouchers');
    $app->put('/vouchers', 'VoucherController:updateVouchers');
    $app->delete('/vouchers', 'VoucherController:deleteVouchers');
?>