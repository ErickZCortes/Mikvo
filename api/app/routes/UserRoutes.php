<?php
    $app->get('/users', 'UserController:selectUsers');
    $app->post('/users/register', 'UserController:registerUser');
    $app->put('/users', 'UserController:updateUsers');
   // $app->get('/users/{userNumber}', 'UserController:getUserbyId');
    $app->post('/users/login', 'UserController:login');
?>