<?php
    $app->get('/users', 'UserController:selectUsers');
    $app->post('/users', 'UserController:insertUsers');
    $app->put('/users', 'UserController:updateUsers');
    $app->get('/users/{userNumber}', 'UserController:getUserbyId');
    $app->post('/users/login', 'UserController:login');
?>